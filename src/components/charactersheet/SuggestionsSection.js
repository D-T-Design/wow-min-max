import React from "react";
import dungeonData from "../dungeons/dungeonData";
import DisplaySuggestedGear from "../gear/DisplaySuggestedGear";
import DisplayGearNoClass from "../gear/DisplayGearNoClass";

const wowHeadZoneURL = "https://classic.wowhead.com/zone=";

const SuggestionsSection = props => {
  const dungeonDisplay = dungeonData.dungeons.map(
    (dungeon, index) =>
      dungeon.level.includes(parseInt(props.state.level)) && (
        <div key={index} className="dungeon">
          <h4>
            <a href={`${wowHeadZoneURL}${dungeon.id}`}>{dungeon.name}</a>
          </h4>
          <p>
            <span className="info-header">Zone:</span>
            <span className="info-title">
              <a href={`${wowHeadZoneURL}${dungeon.zoneID}`}>{dungeon.zone}</a>
            </span>
          </p>
          <p>
            <span className="info-header">Level Range:</span>
            <span className="info-title">{`${dungeon.level[0]}-${
              dungeon.level[dungeon.level.length - 1]
            }`}</span>
          </p>
        </div>
      )
  );
  const raidDisplay = dungeonData.raids.map(
    (raid, index) =>
      raid.level.includes(parseInt(props.state.level)) && (
        <div key={index} className="raid">
          <h4>
            <a href={`${wowHeadZoneURL}${raid.id}`}>{raid.name}</a>
            <span className="tier">
              Tier<span className="tier-num">{raid.tier}</span>
            </span>
          </h4>
          <p>
            <span className="info-header">Zone:</span>
            <span className="info-title">
              <a href={`${wowHeadZoneURL}${raid.zoneID}`}>{raid.zone}</a>
            </span>
          </p>
          <p>
            <span className="info-header">Level:</span>
            <span className="info-title">{raid.level[0]}+</span>
          </p>
        </div>
      )
  );
  return (
    <section className="suggestions-section">
      <div className="dungeons">
        <h3>Dungeons</h3>
        <div className="dungeon-block">{dungeonDisplay}</div>
        <div className="raid-block">{raidDisplay}</div>
      </div>
      <div className="quests">
        <h3>Quests</h3>
        <p>
          <a href="https://classic.wowhead.com/quests/min-level:25/max-level:35/min-req-level:27/max-req-level:33/side:1">
            Lvl 30 Quests
          </a>
        </p>
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
