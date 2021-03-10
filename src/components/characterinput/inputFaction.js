import React from "react";

const factionURL = process.env.PUBLIC_URL + "/assets/img/faction/";

export default function Faction({ chosenFaction, changeFaction, data }) {
	const availableFactions = data.availableFactions;
	return (
		<div className="faction">
			<h2>Faction</h2>
			{availableFactions.map((faction, index) => (
				<label
					className={`faction-icon ${
						chosenFaction !== faction && chosenFaction !== "" ? "inactive" : "active"
					}`}
					key={index}
				>
					<input type="radio" name="Faction" value={faction} />
					<img
						src={`${factionURL}${faction.toLowerCase()}.png`}
						alt={faction}
						data-hover={faction}
						onClick={() => changeFaction(faction)}
					/>
				</label>
			))}
			<span className="selection-title chosen">{chosenFaction}</span>
		</div>
	);
}
