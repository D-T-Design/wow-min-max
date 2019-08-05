import React from "react";
import { classBonus, statsPerLevel, baseStats } from "../stats/BaseStats";
const specNames = {
  balance: "Balance",
  feralbear: "Feral Bear",
  feralcat: "Feral Cat",
  resto: "Restoration",
  bm: "Beast Mastery",
  marks: "Marksmanship",
  survival: "Survival",
  arcane: "Arcane",
  fire: "Fire",
  frost: "Frost",
  holy: "Holy",
  prot: "Protection",
  ret: "Retribution",
  disc: "Discipline",
  shadow: "Shadow",
  assassination: "Assassination",
  combat: "Combat",
  subtlety: "Subtlety",
  ele: "Elemental",
  enh: "Enhancement",
  aff: "Affliction",
  dem: "Demonology",
  des: "Destruction",
  arms: "Arms",
  fury: "Fury"
};

const armorURL = process.env.PUBLIC_URL + "/assets/img/armor/";

const calcStats = (raceName, className, level) => {
  const raceBaseStats = baseStats[raceName];
  const statBoostPerLvl = statsPerLevel[className];
  const bonusStats = classBonus[className];
  const statList = ["agi", "int", "spi", "sta", "str"];
  const finalStats = {
    ...raceBaseStats
  };
  for (const stat in statBoostPerLvl) {
    const levelDifference = level - 1;
    const statDifference = levelDifference * statBoostPerLvl[stat];
    bonusStats[stat]
      ? (finalStats[stat] = Math.round(finalStats[stat] + bonusStats[stat] + statDifference))
      : (finalStats[stat] = Math.round(finalStats[stat] + statDifference));
  }
  console.log("calcStats Input ", raceBaseStats, bonusStats, statBoostPerLvl, statList, finalStats);
  return (
    <ul className="stat-list">
      {statList.map((stat, index) => {
        let statName = "";
        switch (stat) {
          case "agi":
            statName = "Agility";
            break;
          case "int":
            statName = "Intellect";
            break;
          case "spi":
            statName = "Spirit";
            break;
          case "sta":
            statName = "Stamina";
            break;
          case "str":
            statName = "Strength";
            break;
          default:
            break;
        }
        return (
          <li key={index} className="clearfix">
            {statName}:<span className="stat">{finalStats[stat]}</span>
          </li>
        );
      })}
    </ul>
  );
};
const CharacterSheet = props => (
  <div className="character-sheet">
    <h2>
      {props.state.level && `Level ${props.state.level}`}{" "}
      <span className="caps">
        {props.state.race === "nightelf" ? "Night Elf" : props.state.race}
      </span>{" "}
      <span className="caps">{props.state.spec && specNames[props.state.spec]}</span>{" "}
      <span className="caps">{props.state.classPicked}</span>
    </h2>
    <section className="character-gear">
      <div className="character-gear-left">
        <div className="gear-icon">
          <img src={`${armorURL}helm.png`} alt="helm"/>
        </div>
        <div className="gear-icon">Neck</div>
        <div className="gear-icon">Shoulders</div>
        <div className="gear-icon">Back</div>
        <div className="gear-icon">Chest</div>
        <div className="gear-icon">Shirt</div>
        <div className="gear-icon">Tabard</div>
        <div className="gear-icon">Wrist</div>
      </div>
      <div className="character-gear-mid">
        <div className="character-profile">
          <div className="resist-icons">
            <div className="ar">0</div>
            <div className="fr">0</div>
            <div className="nr">0</div>
            <div className="ir">0</div>
            <div className="sr">0</div>
          </div>
        </div>
        <div className="character-stats">
          <div className="character-stats-base">
            {calcStats(props.state.race, props.state.classPicked, props.state.level)}
          </div>
          <div className="character-stats-combat">
            <div className="character-stats-combat-melee">Melee</div>
            <div className="character-stats-combat-ranged">Ranged</div>
          </div>
        </div>
        <div className="character-gear-weapons">
          <div className="gear-icon">MH</div>
          <div className="gear-icon">OH</div>
          <div className="gear-icon">Ranged</div>
          <div className="gear-icon ammo">Ammo</div>
        </div>
      </div>
      <div className="character-gear-right">
        <div className="gear-icon">Hands</div>
        <div className="gear-icon">Belt</div>
        <div className="gear-icon">Pants</div>
        <div className="gear-icon">Feet</div>
        <div className="gear-icon">Ring 1</div>
        <div className="gear-icon">Ring 2</div>
        <div className="gear-icon">Trinket 1</div>
        <div className="gear-icon">Trinket 2</div>
      </div>
    </section>
  </div>
);

export default CharacterSheet;
