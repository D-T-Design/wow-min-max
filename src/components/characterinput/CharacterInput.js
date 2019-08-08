import React from "react";
const factionURL = process.env.PUBLIC_URL + "/assets/img/faction/";
const raceURL = process.env.PUBLIC_URL + "/assets/img/race/";
const classURL = process.env.PUBLIC_URL + "/assets/img/class/";
const factionData = [{ faction: "alliance" }, { faction: "horde" }];

const raceData = [
  {
    race: "dwarf",
    faction: "alliance",
    availableClasses: ["hunter", "paladin", "priest", "rogue", "warrior"]
  },
  {
    race: "gnome",
    faction: "alliance",
    availableClasses: ["mage", "rogue", "warlock", "warrior"]
  },
  {
    race: "human",
    faction: "alliance",
    availableClasses: ["mage", "paladin", "priest", "rogue", "warrior", "warlock"]
  },
  {
    race: "nightelf",
    faction: "alliance",
    availableClasses: ["druid", "hunter", "priest", "rogue", "warrior"]
  },
  {
    race: "orc",
    faction: "horde",
    availableClasses: ["hunter", "rogue", "shaman", "warlock", "warrior"]
  },
  {
    race: "tauren",
    faction: "horde",
    availableClasses: ["druid", "hunter", "shaman", "warrior"]
  },
  {
    race: "troll",
    faction: "horde",
    availableClasses: ["hunter", "mage", "priest", "rogue", "shaman", "warrior"]
  },
  {
    race: "undead",
    faction: "horde",
    availableClasses: ["mage", "priest", "rogue", "warlock", "warrior"]
  }
];
const classData = [
  {
    type: "druid",
    race: ["nightelf", "tauren"]
  },
  {
    type: "hunter",
    race: ["dwarf", "nightelf", "orc", "tauren", "troll"]
  },
  {
    type: "mage",
    race: ["gnome", "human", "troll", "undead"]
  },
  { type: "paladin", race: ["dwarf", "human"] },
  {
    type: "priest",
    race: ["dwarf", "nightelf", "human", "troll", "undead"]
  },
  {
    type: "rogue",
    race: ["dwarf", "gnome", "human", "nightelf", "orc", "troll", "undead"]
  },
  {
    type: "shaman",
    race: ["orc", "tauren", "troll"]
  },
  {
    type: "warlock",
    race: ["gnome", "human", "orc", "undead"]
  },
  {
    type: "warrior",
    race: ["dwarf", "gnome", "human", "nightelf", "orc", "tauren", "troll", "undead"]
  }
];

const Level = props => (
  <div className="level">
    <label htmlFor="level">Your Level</label>
    <input
      name="level"
      type="text"
      value={props.currentLevel}
      onChange={e => !isNaN(e.target.value) && props.changeLevel("level", e.target.value)}
    />
  </div>
);
const Faction = props => (
  <div className="faction">
    <h2>Faction</h2>
    {factionData.map((faction, index) => (
      <div
        key={index}
        className={
          props.chosenFaction !== faction.faction && props.chosenFaction !== ""
            ? "faction-icon inactive"
            : "faction-icon active"
        }
      >
        <img
          src={`${factionURL}${faction.faction}.png`}
          alt={faction.faction}
          onClick={() => props.changeFaction("faction", faction.faction, props.clearRaceClass)}
        />
      </div>
    ))}
  </div>
);
const Race = props => (
  <div className="race">
    <h2>Race</h2>
    {raceData.map((race, index) =>
      props.faction === race.faction ? (
        <div
          key={index}
          className={`race-icon ${
            props.chosenRace !== race.race && props.chosenRace !== "" ? "inactive" : "active"
          }`}
        >
          <img
            src={`${raceURL}${race.race}-male.png`}
            alt={race.race}
            onClick={() => props.changeRace("race", race.race, props.clearClass)}
          />
        </div>
      ) : null
    )}
  </div>
);
const PlayerClass = props => (
  <div className="playerclass">
    {props.race && <h2>Class</h2>}
    {classData.map((type, index) =>
      type.race.includes(props.race) ? (
        <div
          key={index}
          className={`class-icon ${
            props.chosenClass !== type.type && props.chosenClass !== "" ? "inactive" : "active"
          }`}
        >
          <img
            src={`${classURL}${type.type}.png`}
            alt={type.type}
            onClick={() => {
              props.changeClass("classPicked", type.type);
            }}
            className={
              props.chosenClass !== type.type && props.chosenClass !== "" ? "inactive" : null
            }
          />
        </div>
      ) : null
    )}
  </div>
);

export { Level, Faction, Race, PlayerClass };
