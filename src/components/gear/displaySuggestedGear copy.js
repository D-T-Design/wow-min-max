import React from "react";
import gearData from "./gearData";

const DisplaySuggestedGear = props => {
  const weaponURL = gearData.urls.urlWeapon;
  const armorURL = gearData.urls.urlArmor;
  const classPicked = props.class;
  const slotTypes = gearData[classPicked].armorTypes;
  // const armorTypes = `type:${gearData.urls.slotTypes[gearData[classPicked].armorTypes[0]]}`;
  return (
    <div>
      <h4>{classPicked} Gear:</h4>
      <p>{gearData[classPicked].tips}</p>
      <p>Helm Suggestions</p>
      {console.log(weaponURL, armorURL, classPicked, slotTypes)}
    </div>
  );
};

export default DisplaySuggestedGear;
