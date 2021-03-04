import React from "react";
// import CharacterSheet from "./components/charactersheet/CharacterSheet";
import SuggestionsSection from "./components/charactersheet/SuggestionsSection";
import { Level, Faction, Race, PlayerClass } from "./components/characterinput/CharacterInput";
import PlayerInfo from "./components/misc/PlayerInfo";
import Credits from "./components/misc/Credits";
import "./App.css";

import FetchBtn from "./components/BlizzardData";

const logoURL = process.env.PUBLIC_URL + "/assets/img/wow-min-max_logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "30",
      faction: "alliance",
      race: "human",
      classPicked: "rogue"
    };
    this.updateState = this.updateState.bind(this);
    this.clearRaceClass = this.clearRaceClass.bind(this);
    this.clearClass = this.clearClass.bind(this);
  }
  updateState(key, value, callback) {
    this.setState({ [key]: value }, () => {
      callback && callback();
    });
  }
  clearRaceClass() {
    this.setState({
      race: "",
      classPicked: ""
    });
  }
  clearClass() {
    this.setState({
      classPicked: ""
    });
  }
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <div className="container nav">
          <h1>
            <img className="logo" src={logoURL} alt="World of Warcraft Classic - Min/Max" />
          </h1>
          <aside className="site-info">
            <h2>We do the searching for you!</h2>
            <p>
              The goal of this website is to make it easy for World of Warcraft players to find out
              what to do <em>right now</em>. That means, at any given time or level, you can enter
              your basic level and class info, and you'll get back recommended zones, quests, items,
              and guides tailored to you!
            </p>
            <FetchBtn/>
          </aside>
        </div>
        <section className="input-container">
          <Level changeLevel={this.updateState} currentLevel={this.state.level} />
          <Faction
            chosenFaction={this.state.faction}
            changeFaction={this.updateState}
            clearRaceClass={this.clearRaceClass}
          />
          <Race
            changeRace={this.updateState}
            chosenRace={this.state.race}
            faction={this.state.faction}
            clearClass={this.clearClass}
          />
          <PlayerClass
            changeClass={this.updateState}
            race={this.state.race}
            chosenClass={this.state.classPicked}
          />
        </section>
        <section className="results-container">
          <div className="container">
            <PlayerInfo state={this.state}/>
            <SuggestionsSection state={this.state} />
            <Credits />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
