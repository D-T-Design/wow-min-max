import React from "react";
import DisplaySuggestedGear from "../gear/DisplaySuggestedGear";
import DisplayGearNoClass from "../gear/DisplayGearNoClass";
import { ClassSpecificQuests, LevelRangedQuests, QuestDisplayZones } from "../quests/QuestDisplay";

const SuggestionsSection = props => {
  return (
    <section className="suggestions-section">
      <div className="dungeons-display">
        <h3>Suggested Zones</h3>
        <QuestDisplayZones
          classPicked={props.state.classPicked}
          faction={props.state.faction}
          race={props.state.race}
          level={props.state.level}
        />
      </div>
      <div className="quests">
        <h3>Quests</h3>
        <div className="quests-boxes">
          <LevelRangedQuests level={props.state.level} faction={props.state.faction} />
          {props.state.classPicked && (
            <ClassSpecificQuests classPicked={props.state.classPicked} faction={props.state.faction} />
          )}
        </div>
        <h3>Gear Suggestion</h3>
        {props.state.classPicked ? (
          <DisplaySuggestedGear classPicked={props.state.classPicked} level={props.state.level} />
        ) : (
          <DisplayGearNoClass />
        )}
      </div>
      <div className="pvp">
        <h3>Class Guides</h3>
      </div>
    </section>
  );
};

export default SuggestionsSection;
