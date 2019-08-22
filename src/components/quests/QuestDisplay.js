import React from "react";
import gearData from "../gear/gearData";
import questData from "../quests/questData";
const factionURL = process.env.PUBLIC_URL + "/assets/img/faction/";
const zoneURLString = process.env.PUBLIC_URL + "/assets/img/zone/";

const QuestDisplayLevel = props => {
  const questURL = "https://classic.wowhead.com/quests/";
  // Calculate min and max level based on user inputs, level can not be negative or over 60
  const minLevel = props.level <= 5 ? 1 : parseInt(props.level) - 5;
  const maxLevel = props.level >= 55 ? 60 : parseInt(props.level) + 5;
  const sideNum = props.faction !== "alliance" ? 2 : 1;
  const minLevelText = `min-req-level:${minLevel}/`;
  const maxLevelText = `max-req-level:${maxLevel}/`;
  const sideText = `side:${sideNum}`;
  const sortText = "#0-3+11";
  const joinedURL = questURL + minLevelText + maxLevelText + sideText + sortText;
  return (
    <p className="quests-level">
      <a href={joinedURL} target="_blank" rel="noopener noreferrer">
        View All Lvl {props.level} Quests
      </a>
    </p>
  );
};

const QuestDisplayClass = props => {
  const questURL = "https://classic.wowhead.com/quests/";
  const sideNum = props.faction !== "alliance" ? 2 : 1;
  const classNumber = gearData[props.class].classNumber;
  const sideText = `side:${sideNum}`;
  const classFilterText = `?filter=37;${classNumber};0`;
  const sortText = "#0-3+11";
  const joinedURL = questURL + sideText + classFilterText + sortText;
  return (
    <p className="quests-class">
      <a href={joinedURL} target="_blank" rel="noopener noreferrer">
        View All {props.class} Specific Quests
      </a>
    </p>
  );
};

const QuestDisplayZones = ({ faction, race, level, classPicked }) => {
  const zoneURL = "https://classic.wowhead.com/zone=";
  const zoneData = questData.zones;
  const nearLvl = (minLvl, target, maxLvl) => {
    return minLvl - 3 < target && maxLvl + 3 > target;
  };
  const rangeCheck = (level, levelRange) => {
    let isInRange = nearLvl(levelRange[0], parseInt(level), levelRange[1]);
    return isInRange;
  };
  const questList = zoneData.map((zone, index) => {
    let zoneType = "";
    switch (zone.tier) {
      case 0:
        zoneType = "Open Zone";
        break;
      case 1:
        zoneType = "Battleground";
        break;
      case 2:
        zoneType = "Dungeon";
        break;
      case 3:
        zoneType = "Raid";
        break;
      default:
        break;
    }
    return (
      rangeCheck(level, zone.range) && (
        <div className="quests-zone" key={index}>
          <a
            className="quests-link"
            href={`${zoneURL}${zone.id}#quests`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{zone.name}</div>
          </a>
          <div className="quests-range">
            <small>
              <em>{`(Lvl: ${zone.range[0]}-${zone.range[1]})`}</em>
            </small>
          </div>
          {zoneType !== "Open Zone" ? (
            <div class="faction-icon" data-faction={zoneType}>
              <img src={`${zoneURLString}${zoneType}.png`} alt={zoneType} />
            </div>
          ) : null}
          {zone.faction !== "Contested" &&
            (zone.faction !== "PvP" ? (
              <div class="faction-icon" data-faction={zone.faction}>
                <img src={`${factionURL}${zone.faction}.png`} alt={zone.faction} />
              </div>
            ) : null)}
        </div>
      )
    );
  });
  return <div className="quests-zones"><h2>Questing Zones:</h2>{questList}</div>;
};

export { QuestDisplayClass, QuestDisplayLevel, QuestDisplayZones };
