import React from "react";
import DisplaySuggestedGear from "../gear/DisplaySuggestedGear";
import DisplayGearNoClass from "../gear/DisplayGearNoClass";
import { ClassSpecificQuests, LevelRangedQuests, QuestDisplayZones } from "../quests/QuestDisplay";

const SuggestionsSection = ({ level, faction, race, playerClass }) => {
	return (
		<section className="suggestions-section">
			<div className="dungeons-display">
				<h3>Suggested Zones</h3>
				<QuestDisplayZones
					classPicked={playerClass.toLowerCase()}
					faction={faction.toLowerCase()}
					race={race}
					level={level}
				/>
			</div>
			<div className="quests">
				<h3>Quests</h3>
				<div className="quests-boxes">
					<LevelRangedQuests level={level} faction={faction} />
					{playerClass && (
						<ClassSpecificQuests classPicked={playerClass.toLowerCase()} faction={faction} />
					)}
				</div>
				<h3>Gear Suggestion</h3>
				{playerClass ? (
					<DisplaySuggestedGear classPicked={playerClass.toLowerCase()} level={level} />
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
