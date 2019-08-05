import React from "react";
import CharacterSheet from "./components/charactersheet/CharacterSheet";
import SuggestionsSection from "./components/charactersheet/SuggestionsSection";
import {
  Level,
  Faction,
  Race,
  PlayerClass,
  Spec
} from "./components/characterinput/CharacterInput";
import "./App.css";

const logoURL = process.env.PUBLIC_URL + "/assets/img/wow-min-max_logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "30",
      faction: "alliance",
      race: "human",
      classPicked: "rogue",
      spec: "combat"
    };
    this.updateState = this.updateState.bind(this);
    this.clearRaceClassSpec = this.clearRaceClassSpec.bind(this);
    this.clearClassSpec = this.clearClassSpec.bind(this);
    this.clearSpec = this.clearSpec.bind(this);
  }
  updateState(key, value, callback) {
    this.setState({ [key]: value }, () => {
      callback && callback();
    });
  }
  clearRaceClassSpec() {
    this.setState({
      race: "",
      classPicked: "",
      spec: ""
    });
  }
  clearClassSpec() {
    this.setState({
      classPicked: "",
      spec: ""
    });
  }
  clearSpec() {
    this.setState({
      spec: ""
    });
  }
  changeLevel(e) {
    console.log(e);
  }
  changeFaction(faction) {
    this.updateState();
  }
  changeRace(race) {
    this.setState({
      race
    });
  }
  changeClass(e) {
    console.log(e);
  }
  changeSpec(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <div className="container nav">
          <h1 className="left">
            <img
              className="logo"
              src={logoURL}
              alt="World of Warcraft Classic - Min/Max"
            />
          </h1>
        </div>
        <section className="input-container">
          <Level
            changeLevel={this.updateState}
            currentLevel={this.state.level}
          />
          <Faction
            chosenFaction={this.state.faction}
            changeFaction={this.updateState}
            clearRaceClassSpec={this.clearRaceClassSpec}
          />
          <Race
            changeRace={this.updateState}
            chosenRace={this.state.race}
            faction={this.state.faction}
            clearClassSpec={this.clearClassSpec}
          />
          <PlayerClass
            changeClass={this.updateState}
            race={this.state.race}
            chosenClass={this.state.classPicked}
            clearSpec={this.clearSpec}
          />
          <Spec
            changeSpec={this.updateState}
            classPicked={this.state.classPicked}
            specPicked={this.state.spec}
          />
        </section>
        <section className="results-container">
          <div className="container">
            <CharacterSheet state={this.state} />
            <SuggestionsSection />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
