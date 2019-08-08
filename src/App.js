import React from "react";
// import CharacterSheet from "./components/charactersheet/CharacterSheet";
import SuggestionsSection from "./components/charactersheet/SuggestionsSection";
import { Level, Faction, Race, PlayerClass } from "./components/characterinput/CharacterInput";
import "./App.css";

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
          <h1 className="left">
            <img className="logo" src={logoURL} alt="World of Warcraft Classic - Min/Max" />
          </h1>
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
            {/* <CharacterSheet state={this.state} /> */}
            <SuggestionsSection state={this.state} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
