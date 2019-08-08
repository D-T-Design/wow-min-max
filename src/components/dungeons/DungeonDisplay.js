import React from "react";
import dungeonData from "../dungeons/dungeonData";

const wowHeadZoneURL = "https://classic.wowhead.com/zone=";
const DungeonDisplay = props =>
  props.state.level <= 12 ? (
    <div>Level up more to start thinking about dungeons (usually around lvl 15.)</div>
  ) : (
    dungeonData[props.type].map(
      (dungeon, index) =>
        dungeon.level.includes(parseInt(props.state.level)) && (
          <div key={index} className={props.type}>
            <h4>
              <a href={`${wowHeadZoneURL}${dungeon.id}`}>{dungeon.name}</a>
              {props.type === "raids" && (
                <span className="tier">
                  Tier<span className="tier-num">{dungeon.tier}</span>
                </span>
              )}
            </h4>
            <p>
              <span className="info-header">Zone:</span>
              <span className="info-title">
                <a href={`${wowHeadZoneURL}${dungeon.zoneID}`}>{dungeon.zone}</a>
              </span>
            </p>
            <p>
              <span className="info-header">Level Range:</span>
              <span className="info-title">
                {props.type !== "dungeons"
                  ? `${dungeon.level[0]}+`
                  : `${dungeon.level[0]}-${dungeon.level[dungeon.level.length - 1]}`}
              </span>
            </p>
          </div>
        )
    )
  );

export default DungeonDisplay;
