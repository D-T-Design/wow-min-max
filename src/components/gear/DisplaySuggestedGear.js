import React from "react";
import gearData from "./gearData";

const DisplaySuggestedGear = props => {
  const urlObj = gearData.urls;
  // const weaponURL = urlObj.urlWeapon;
  const armorURL = urlObj.urlArmor;
  const classPicked = props.class;
  const classObj = gearData[classPicked];
  const classID = classObj.classNumber;
  const minLevel = parseInt(props.level) - 5;
  const maxLevel = props.level >= 55 ? 60 : parseInt(props.level) + 5;
  const slotTypes = Object.keys(urlObj.slotTypes);
  const filters = urlObj.filters;
  const classMainStats = classObj.mainStats;
  const armorTypes = gearData[classPicked].armorTypes;
  let typeURL = "";
  for (const [index, armor] of armorTypes.entries()) {
    const code = urlObj.armorTypes[armor];
    typeURL = typeURL + code + (index === armorTypes.length - 1 ? "" : ":");
    console.log(typeURL);
  }
  const filterURLBase = "?filter-any=";
  let statCodes = "";
  let statCodesMin = "";
  let statCodesMax = "";
  for (const [index, stat] of classMainStats.entries()) {
    statCodes = statCodes + filters[stat] + (index === classMainStats.length - 1 ? ";" : ":");
    statCodesMin = statCodesMin + "2" + (index === classMainStats.length - 1 ? ";" : ":");
    statCodesMax = statCodesMax + "1" + (index === classMainStats.length - 1 ? "" : ":");
  }
  const filterURL = filterURLBase + statCodes + statCodesMin + statCodesMax;

  return (
    <div>
      <h4 className="gear-title">{classPicked} Gear:</h4>
      <p>{classObj.tips}</p>
      {slotTypes.map((gearType, index) => {
        const armorList = urlObj.armorTypes;
        let type = typeURL;
        switch (gearType) {
          case "neck":
            type = armorList["amulet"];
            break;
          case "back":
            type = armorList["cloaks"];
            break;
          case "shirt":
            type = armorList["shirts"];
            break;
          case "trinket":
            type = armorList["trinkets"];
            break;
          case "finger":
            type = armorList["rings"];
            break;
          default:
            break;
        }
        return (
          <p className="gear-title" key={index}>
            {gearType} Suggestions:{" "}
            <a
              href={`${armorURL}min-req-level:${minLevel}/max-req-level:${maxLevel}/class:${classID}/quality:2:3:4/slot:${
                urlObj.slotTypes[gearType]
              }/type:${type}${filterURL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </p>
        );
      })}
      {console.log(filterURL)}
    </div>
  );
};

export default DisplaySuggestedGear;
