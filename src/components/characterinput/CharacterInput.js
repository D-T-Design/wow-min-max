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

const Level = ({ currentLevel, changeLevel }) => (
  <div className="level">
    <label htmlFor="level">Your Level</label>
    <input
      name="level"
      type="text"
      value={currentLevel}
      onChange={e => !isNaN(e.target.value) && changeLevel("level", e.target.value)}
    />
  </div>
);

const Faction = ({ chosenFaction, changeFaction, clearRaceClass }) => (
  <div className="faction">
    <h2>Faction</h2>
    {factionData.map((faction, index) => (
      <div
        key={index}
        className={`faction-icon ${
          chosenFaction !== faction.faction && chosenFaction !== "" ? "inactive" : "active"
        }`}
      >
        <img
          src={`${factionURL}${faction.faction}.png`}
          alt={faction.faction}
          data-hover={faction.faction}
          onClick={() => changeFaction("faction", faction.faction, clearRaceClass)}
        />
      </div>
    ))}
    <span className="selection-title chosen">{chosenFaction}</span>
  </div>
);

const Race = ({ faction, chosenRace, changeRace, clearClass }) => (
  <div className="race">
    <h2>Race</h2>
    {raceData.map((race, index) =>
      faction === race.faction ? (
        <div
          key={index}
          className={`race-icon ${
            chosenRace !== race.race && chosenRace !== "" ? "inactive" : "active"
          }`}
        >
          <img
            src={`${raceURL}${race.race}-male.png`}
            alt={race.race}
            onClick={() => changeRace("race", race.race, clearClass)}
          />
        </div>
      ) : null
    )}
    <span className="selection-title chosen">{chosenRace}</span>
  </div>
);

const PlayerClass = ({ race, chosenClass, changeClass }) => (
  <div className="playerclass">
    {race && <h2>Class</h2>}
    {classData.map((classType, index) =>
      classType.race.includes(race) ? (
        <div
          key={index}
          className={`class-icon ${
            chosenClass !== classType.type && chosenClass !== "" ? "inactive" : "active"
          }`}
        >
          <img
            src={`${classURL}${classType.type}.png`}
            alt={classType.type}
            onClick={() => {
              changeClass("classPicked", classType.type);
            }}
            className={chosenClass !== classType.type && chosenClass !== "" ? "inactive" : null}
          />
        </div>
      ) : null
    )}
    <span className="selection-title chosen">{chosenClass}</span>
  </div>
);

export { Level, Faction, Race, PlayerClass };
