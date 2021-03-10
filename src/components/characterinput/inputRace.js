import React from "react";

const raceURL = process.env.PUBLIC_URL + "/assets/img/race/";

export default function Race({ faction, chosenRace, changeRace, data }) {
	const availableRaces = faction === "Horde" ? data.hordeRaces : data.allianceRaces;
	return (
		faction && (
			<div className="race">
				<h2>Race</h2>
				{availableRaces.map((race, index) => (
					<label
						key={index}
						className={`race-icon ${
							chosenRace !== race && chosenRace !== "" ? "inactive" : "active"
						}`}
						tabIndex="0"
					>
						<input type="radio" name="Race" value={race} />
						<img
							src={`${raceURL}${race.toLowerCase().replace(/\s/g, "")}-male.png`}
							alt={race}
							onClick={() => changeRace(race)}
						/>
					</label>
				))}
				<span className="selection-title chosen">{chosenRace}</span>
			</div>
		)
	);
}
