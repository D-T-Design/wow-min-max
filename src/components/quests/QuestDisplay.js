import React from "react";
import gearData from "../gear/gearData";

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
        Lvl {props.level} Quests
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
        {props.class} Specific Quests
      </a>
    </p>
  );
};

export { QuestDisplayClass, QuestDisplayLevel };
