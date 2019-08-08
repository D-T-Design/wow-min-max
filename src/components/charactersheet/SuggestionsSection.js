import React from "react";
import DisplaySuggestedGear from "../gear/DisplaySuggestedGear";
import DisplayGearNoClass from "../gear/DisplayGearNoClass";
import DungeonDisplay from "../dungeons/DungeonDisplay";
import { QuestDisplayClass, QuestDisplayLevel } from "../quests/QuestDisplay";

const SuggestionsSection = props => {
  return (
    <section className="suggestions-section">
      <div className="dungeons-display">
        <h3>Dungeons</h3>
        <div className="dungeon-block">
          <DungeonDisplay state={props.state} type="dungeons" />
        </div>
        <div className="raid-block">
          <DungeonDisplay state={props.state} type="raids" />
        </div>
      </div>
      <div className="quests">
        <h3>Quests</h3>
        <QuestDisplayLevel level={props.state.level} faction={props.state.faction} />
        {props.state.classPicked && (
          <QuestDisplayClass class={props.state.classPicked} faction={props.state.faction} />
        )}
      </div>
      <div className="auction house">
        <h3>Gear Suggestion</h3>
        {props.state.classPicked ? (
          <DisplaySuggestedGear class={props.state.classPicked} level={props.state.level} />
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
