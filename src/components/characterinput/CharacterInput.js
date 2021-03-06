import React from "react";
const factionURL = process.env.PUBLIC_URL + "/assets/img/faction/";
const raceURL = process.env.PUBLIC_URL + "/assets/img/race/";
const classURL = process.env.PUBLIC_URL + "/assets/img/class/";

const Name = ({ currentName, changeName }) => (
	<div className="level">
		<label htmlFor="name">Character Name</label>
		<input
			name="name"
			type="text"
			value={currentName}
			onChange={(e) =>
				e.target.value.match(/^[a-zA-Z]+$/) || e.target.value === "" ? changeName(e) : null
			}
		/>
	</div>
);

const Level = ({ currentLevel, changeLevel }) => (
	<div className="level">
		<label htmlFor="level">Your Level</label>
		<input
			name="level"
			type="text"
			value={currentLevel}
			onChange={(e) => !isNaN(e.target.value) && changeLevel(e)}
		/>
	</div>
);

const Faction = ({ chosenFaction, changeFaction, factions }) => (
	<div className="faction">
		<h2>Faction</h2>
		{factions.map((faction, index) => {
			return (
				<div
					key={index}
					className={`faction-icon ${
						chosenFaction !== faction && chosenFaction !== "" ? "inactive" : "active"
					}`}
				>
					<img
						src={`${factionURL}${faction.toLowerCase()}.png`}
						alt={faction}
						data-hover={faction}
						onClick={() => changeFaction(faction)}
					/>
				</div>
			);
		})}
		<span className="selection-title chosen">{chosenFaction}</span>
	</div>
);

const Race = ({ faction, chosenRace, changeRace, factionRaces }) => (
	<div className="race">
		{faction && <h2>Race</h2>}
		{factionRaces[faction]
			? factionRaces[faction].map((race, index) => (
					<div
						key={index}
						className={`race-icon ${
							chosenRace !== race && chosenRace !== "" ? "inactive" : "active"
						}`}
					>
						<img
							src={`${raceURL}${race.toLowerCase().replace(/\s/g, "")}-male.png`}
							alt={race}
							onClick={() => changeRace(race)}
						/>
					</div>
			  ))
			: null}
		<span className="selection-title chosen">{chosenRace}</span>
	</div>
);

const PlayerClass = ({ race, chosenClass, changeClass, raceClasses }) => (
	<div className="playerclass">
		{race && <h2>Class</h2>}
		{raceClasses[race]
			? raceClasses[race].map((classType, index) => (
					<div
						key={index}
						className={`class-icon ${
							chosenClass !== classType && chosenClass !== "" ? "inactive" : "active"
						}`}
					>
						<img
							src={`${classURL}${classType.toLowerCase()}.png`}
							alt={classType}
							onClick={() => {
								changeClass(classType);
							}}
							className={chosenClass !== classType && chosenClass !== "" ? "inactive" : null}
						/>
					</div>
			  ))
			: null}
		<span className="selection-title chosen">{chosenClass}</span>
	</div>
);

export { Name, Level, Faction, Race, PlayerClass };
