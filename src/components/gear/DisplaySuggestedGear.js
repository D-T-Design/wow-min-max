import React from "react";
import gearData from "./gearData"; //JSON Object
const armorIconURL = process.env.PUBLIC_URL + "/assets/img/armor/";

const DisplaySuggestedGear = ({ classPicked, level }) => {
  // Create data variables from JSON file and props
  const urlObj = gearData.urls;
  const armorURL = urlObj.urlArmor;
  const weaponURL = urlObj.urlWeapon;
  const filters = urlObj.filters;
  const armorList = urlObj.armorTypes;
  const weaponList = urlObj.weaponTypes;
  const classObj = gearData[classPicked];
  const classID = classObj.classNumber;
  const classArmor = classObj.armorTypes;
  const classWeapon = classObj.weaponTypes;
  const classMainStats = classObj.mainStats;
  const slotTypes = Object.keys(urlObj.slotTypes);

  // Calculate min and max level based on user inputs, level can not be negative or over 60
  const minLevel = level <= 10 ? 1 : parseInt(level) - 5;
  const maxLevel = level >= 50 ? 60 : parseInt(level) + 5;

  // Loop armor entries to create armor type URL parameters
  let armorTypeURL = "";
  for (const [index, armor] of classArmor.entries()) {
    const code = armorList[armor];
    armorTypeURL = armorTypeURL + code + (index !== classArmor.length - 1 ? ":" : "");
  }
  // Loop weapon entries to create weapon type URL parameters
  let weaponTypeURL = "";
  for (const [index, weapon] of classWeapon.entries()) {
    const code = weaponList[weapon];
    weaponTypeURL = weaponTypeURL + code + (index !== classWeapon.length - 1 ? ":" : "");
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
      <div className="gear-list">
        {// Map slotTypes array, return title and link for each slot type
        slotTypes.map((gearType, index) => {
          // Get URL codes from armorList for slots that don't use Cloth, Leather, Mail or Plate
          // TODO - Add Relic slot and differentiate "type" based on class input by user
          let armorType = armorTypeURL;
          let weaponType = weaponTypeURL;
          switch (gearType) {
            case "neck":
              armorType = armorList["amulet"].toLowerCase();
              break;
            case "back":
              armorType = armorList["cloaks"].toLowerCase();
              break;
            case "trinket":
              armorType = armorList["trinkets"].toLowerCase();
              break;
            case "finger":
              armorType = armorList["rings"].toLowerCase();
              break;
            default:
              break;
          }
          let inventoryID = urlObj.slotTypes[gearType];
          const armorHref = `${armorURL}min-req-level:${minLevel}/max-req-level:${maxLevel}/class:${classID}/quality:2:3:4/slot:${inventoryID}/type:${armorType}${filterURL}`;
          const weaponHref = `${weaponURL}min-req-level:${minLevel}/max-req-level:${maxLevel}/class:${classID}/quality:2:3:4/slot:${inventoryID}/type:${armorType}${filterURL}`;
          return (
            <a
              href={inventoryID === 21 ? weaponHref : armorHref}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="gear-link"
            >
              <span className="gear-icon">
                <img src={`${armorIconURL}${gearType}.png`} alt={gearType} />
              </span>
              <span className="gear-name">{gearType}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DisplaySuggestedGear;
