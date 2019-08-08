import React from "react";
import gearData from "./gearData"; //JSON Object

const DisplaySuggestedGear = props => {
  // Create data variables from JSON file and props
  const urlObj = gearData.urls;
  const armorURL = urlObj.urlArmor;
  const filters = urlObj.filters;
  const armorList = urlObj.armorTypes;
  const classPicked = props.class;
  const classObj = gearData[classPicked];
  const classID = classObj.classNumber;
  const classArmor = classObj.armorTypes;
  const classMainStats = classObj.mainStats;
  const slotTypes = Object.keys(urlObj.slotTypes);

  // Calculate min and max level based on user inputs, level can not be negative or over 60
  const minLevel = props.level <= 10 ? 1 : parseInt(props.level) - 5;
  const maxLevel = props.level >= 50 ? 60 : parseInt(props.level) + 5;

  // Loop armor entries to create armor type URL parameters
  let typeURL = "";
  for (const [index, armor] of classArmor.entries()) {
    const code = armorList[armor];
    typeURL = typeURL + code + (index !== classArmor.length - 1 ? ":" : "");
  }

  // Create base string variables to build filter URL parameters
  const filterURLBase = "?filter-any=";
  let statFilters = "";
  let statFiltersOperator = "";
  let statMinimum = "";
  // Loop class main stats and concatenate string for filter URL parameters
  for (const [index, stat] of classMainStats.entries()) {
    statFilters = statFilters + filters[stat] + (index !== classMainStats.length - 1 ? ":" : ";");
    statFiltersOperator =
      statFiltersOperator + "2" + (index !== classMainStats.length - 1 ? ":" : ";");
    statMinimum = statMinimum + "1" + (index !== classMainStats.length - 1 ? ":" : "");
  }
  const filterURL = filterURLBase + statFilters + statFiltersOperator + statMinimum;

  return (
    <div>
      <h4 className="gear-title">{classPicked} Gear:</h4>
      <p>{classObj.tips}</p>

      {// Map slotTypes array, return title and link for each slot type
      slotTypes.map((gearType, index) => {
        // Get URL codes from armorList for slots that don't use Cloth, Leather, Mail or Plate
        // TODO - Add Relic slot and differentiate "type" based on class input by user
        let type = typeURL;
        switch (gearType) {
          case "neck":
            type = armorList["amulet"];
            break;
          case "back":
            type = armorList["cloaks"];
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
    </div>
  );
};

export default DisplaySuggestedGear;
