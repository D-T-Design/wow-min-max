import React from "react";
// import useGameData from "../../lib/useGameData";

const classURL = process.env.PUBLIC_URL + "/assets/img/class/";

export default function PlayerClass({ race, chosenClass, changeClass, data }) {
	let availableClasses = [];
	switch (race) {
		case "Undead":
			availableClasses = data.undeadClasses;
			break;
		case "Troll":
			availableClasses = data.trollClasses;
			break;
		case "Tauren":
			availableClasses = data.taurenClasses;
			break;
		case "Orc":
			availableClasses = data.orcClasses;
			break;
		case "Human":
			availableClasses = data.humanClasses;
			break;
		case "Night Elf":
			availableClasses = data.nightElfClasses;
			break;
		case "Dwarf":
			availableClasses = data.dwarfClasses;
			break;
		case "Gnome":
			availableClasses = data.gnomeClasses;
			break;
		default:
			availableClasses = [];
	}
	return (
		race && (
			<div className="playerclass">
				<h2>Class</h2>
				{availableClasses.map((classType, index) => (
					<label
						key={index}
						className={`class-icon ${
							chosenClass !== classType && chosenClass !== "" ? "inactive" : "active"
						}`}
					>
						<input type="radio" name="Class" value={classType} />
						<img
							src={`${classURL}${classType.toLowerCase()}.png`}
							alt={classType}
							onClick={() => {
								changeClass(classType);
							}}
							className={chosenClass !== classType && chosenClass !== "" ? "inactive" : null}
						/>
					</label>
				))}
				<span className="selection-title chosen">{chosenClass}</span>
			</div>
		)
	);
}
