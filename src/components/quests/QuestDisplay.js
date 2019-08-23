import React from "react";
import gearData from "../gear/gearData";
import questData from "../quests/questData";
const factionURL = process.env.PUBLIC_URL + "/assets/img/faction/";
const zoneURLString = process.env.PUBLIC_URL + "/assets/img/zone/";
const zoneURL = "https://classic.wowhead.com/zone=";

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
  const zoneData = questData.zones;
  const zoneCheck = (level, { range, faction, tier, starter }, playerFaction) => {
    const levelNum = parseInt(level);
    let isInRange = range[0] <= levelNum && range[1] >= levelNum;
    let isFaction = tier === 1 ? faction === playerFaction : true;
    let isStarter = starter ? faction === playerFaction : true;
    let isContested = faction === "Contested";
    return isInRange && (isFaction || isContested) && isStarter;
  };
  const splitDungeons = () => {
    let dungeonList = [];
    let raidList = [];
    let cityList = [];
    let zoneList = [];
    let bgList = [];
    for (const zone of zoneData) {
      switch (zone.tier) {
        case 0:
          zoneList.push(zone);
          break;
        case 1:
          cityList.push(zone);
          break;
        case 2:
          dungeonList.push(zone);
          break;
        case 3:
          raidList.push(zone);
          break;
        case 4:
          bgList.push(zone);
          break;
        default:
          break;
      }
    }
    return [zoneList, cityList, dungeonList, raidList, bgList];
  };
  const zoneCategory = splitDungeons();
  let displays = [];
  const sortDisplays = () => {
    for (const [index, list] of zoneCategory.entries()) {
      let listType;
      switch (index) {
        case 0:
          listType = "Zone";
          break;
        case 1:
          listType = "City";
          break;
        case 2:
          listType = "Dungeon";
          break;
        case 3:
          listType = "Raid";
          break;
        case 4:
          listType = "Battleground";
          break;
        default:
          break;
      }
      const zoneListings = list.map((zone, index) => {
        return (
          zoneCheck(level, zone, faction) && (
            <QuestListing
              zone={zone}
              type={listType}
              playerFaction={faction}
              factionURL={factionURL}
              key={index}
            />
          )
        );
      });
      const itemObj = { [listType]: zoneListings };
      displays.push(itemObj);
    }
    return displays;
  };
  const zoneDisplays = sortDisplays();
  const mapDisplays = zoneDisplays.map((zone, index) => {
    let title = Object.keys(zone)[0];
    let show = false;
    let count = 0;
    for (const zoneItem of zone[title]) {
      zoneItem !== false && count++;
    }
    show = count > 0 && !show;
    if (show) {
      return (
        <section className="zone-section" key={index}>
          <h4>{title}</h4>
          {zone[title]}
        </section>
      );
    } else {
      return null;
    }
  });
  return (
    <div className="quests-zones">
      {mapDisplays}
    </div>
  );
};

const QuestListing = ({ zone, type, playerFaction, factionURL }) => (
  <div className="quests-zone">
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
    {type !== "Zone" ? (
      <div className="faction-icon" data-faction={type}>
        <img src={`${zoneURLString}${type}.png`} alt={type} />
      </div>
    ) : type === "City" && zone.faction === playerFaction ? (
      <div className="faction-icon" data-faction={zone.name}>
        <img src={`${zoneURLString}${zone.name}.png`} alt={type} />
      </div>
    ) : null}
    {zone.faction !== "Contested" &&
      (zone.faction !== "PvP" ? (
        <div className="faction-icon" data-faction={zone.faction}>
          <img src={`${factionURL}${zone.faction}.png`} alt={zone.faction} />
        </div>
      ) : null)}
  </div>
);

export { QuestDisplayClass, QuestDisplayLevel, QuestDisplayZones };
