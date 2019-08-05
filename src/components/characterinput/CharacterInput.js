import React from "react";
const factionURL = process.env.PUBLIC_URL + "/assets/img/faction/";
const raceURL = process.env.PUBLIC_URL + "/assets/img/race/";
const classURL = process.env.PUBLIC_URL + "/assets/img/class/";
const specURL = process.env.PUBLIC_URL + "/assets/img/spec/";

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
    availableClasses: [
      "mage",
      "paladin",
      "priest",
      "rogue",
      "warrior",
      "warlock"
    ]
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
    race: ["nightelf", "tauren"],
    spec: ["balance", "feralcat", "feralbear", "resto"]
  },
  {
    type: "hunter",
    race: ["dwarf", "nightelf", "orc", "tauren", "troll"],
    spec: ["bm", "marks", "survival"]
  },
  {
    type: "mage",
    race: ["gnome", "human", "troll", "undead"],
    spec: ["arcane", "fire", "frost"]
  },
  { type: "paladin", race: ["dwarf", "human"], spec: ["holy", "prot", "ret"] },
  {
    type: "priest",
    race: ["dwarf", "nightelf", "human", "troll", "undead"],
    spec: ["disc", "holy", "shadow"]
  },
  {
    type: "rogue",
    race: ["dwarf", "gnome", "human", "nightelf", "orc", "troll", "undead"],
    spec: ["subtlety", "assassination", "combat"]
  },
  {
    type: "shaman",
    race: ["orc", "tauren", "troll"],
    spec: ["ele", "enh", "resto"]
  },
  {
    type: "warlock",
    race: ["gnome", "human", "orc", "undead"],
    spec: ["aff", "dem", "des"]
  },
  {
    type: "warrior",
    race: [
      "dwarf",
      "gnome",
      "human",
      "nightelf",
      "orc",
      "tauren",
      "troll",
      "undead"
    ],
    spec: ["arms", "fury", "prot"]
  }
];

const Level = props => (
  <div className="level">
    <label htmlFor="level">Your Level</label>
    <input
      name="level"
      type="text"
      value={props.currentLevel}
      onChange={e => props.changeLevel("level", e.target.value)}
    />
  </div>
);
const Faction = props => (
  <div className="faction">
    <h2>Faction</h2>
    {factionData.map((faction, index) => (
      <div key={index} className="faction-icon">
        <img
          src={`${factionURL}${faction.faction}.png`}
          alt={faction.faction}
          onClick={() =>
            props.changeFaction(
              "faction",
              faction.faction,
              props.clearRaceClassSpec
            )
          }
          className={
            props.chosenFaction !== faction.faction &&
            props.chosenFaction !== ""
              ? "inactive"
              : null
          }
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
        <div key={index} className="race-icon">
          <img
            src={`${raceURL}${race.race}-male.png`}
            alt={race.race}
            onClick={() =>
              props.changeRace("race", race.race, props.clearClassSpec)
            }
            className={
              props.chosenRace !== race.race && props.chosenRace !== ""
                ? "inactive"
                : null
            }
          />
        </div>
      ) : null
    )}
  </div>
);
const PlayerClass = props => (
  <div className="playerclass">
  <h2>Class</h2>
    {classData.map((type, index) =>
      type.race.includes(props.race) ? (
        <div key={index} className="class-icon">
          <img
            src={`${classURL}${type.type}.png`}
            alt={type.type}
            onClick={() => {
              props.changeClass("classPicked", type.type, props.clearSpec);
            }}
            className={
              props.chosenClass !== type.type && props.chosenClass !== ""
                ? "inactive"
                : null
            }
          />
        </div>
      ) : null
    )}
  </div>
);
const Spec = props => (
  <div className="spec">
  <h2>Spec</h2>
    {classData.map(type => {
      if (type.type === props.classPicked) {
        const icon = type.spec.map((spec, index) => (
          <div key={index} className="spec-icon">
            <img
              src={`${specURL}${type.type}-${spec}.png`}
              alt={`${type.type}-${spec}`}
              onClick={() => {
                props.changeSpec("spec", spec);
              }}
              className={
                props.specPicked !== spec && props.specPicked !== ""
                  ? "inactive"
                  : null
              }
            />
          </div>
        ));
        return icon;
      } else {
        return null;
      }
    })}
  </div>
);

export { Level, Faction, Race, PlayerClass, Spec };
