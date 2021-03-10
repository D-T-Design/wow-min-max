import React, { useState } from "react";
// import CharacterSheet from "./components/charactersheet/CharacterSheet";
import SuggestionsSection from "./components/charactersheet/SuggestionsSection";
import { Name, Level } from "./components/characterinput/CharacterInput";
import PlayerInfo from "./components/misc/PlayerInfo";
import Credits from "./components/misc/Credits";
import "./App.css";

import Faction from "./components/characterinput/inputFaction";
import Race from "./components/characterinput/inputRace";
import PlayerClass from "./components/characterinput/inputClass";

import useGameData from "./lib/useGameData";

export function Content() {
	const { parsedGameData, error, isPending } = useGameData();
	const [level, setLevel] = useState(30);
	const [faction, setFaction] = useState("");
	const [race, setRace] = useState("");
	const [playerClass, setClass] = useState("");
	const [name, setName] = useState("Gild");
	const updateLevel = (e) => {
		const newLevel = e.target.value;
		let val = newLevel === "" ? "" : newLevel < 1 ? 1 : newLevel > 60 ? 60 : newLevel;
		setLevel(val);
	};
	const updateFaction = async (newFaction) => {
		setFaction(newFaction);
		setRace("");
		setClass("");
	};
	const updateRace = async (race) => {
		setRace(race);
		setClass("");
	};
	const updateClass = (newClass) => {
		setClass(newClass);
	};
	const updateName = (e) => {
		setName(e.target.value);
	};
	if (error) {
		return <section className="content">Error Loading Data.</section>;
	}
	if (isPending) {
		return <section className="content">Loading game data....</section>;
	}
	return (
		<>
			<section className="input-container">
				<Name changeName={updateName} currentName={name} />
				<Level changeLevel={updateLevel} currentLevel={level} />
				<Faction changeFaction={updateFaction} chosenFaction={faction} data={parsedGameData} />
				<Race changeRace={updateRace} chosenRace={race} faction={faction} data={parsedGameData} />
				<PlayerClass
					changeClass={updateClass}
					race={race}
					chosenClass={playerClass}
					data={parsedGameData}
				/>
			</section>
			<section className="results-container">
				<div className="container">
					<PlayerInfo state={{ level, faction, race, playerClass }} />
					<SuggestionsSection
						level={level}
						faction={faction}
						race={race}
						playerClass={playerClass}
					/>
					<Credits />
				</div>
			</section>
		</>
	);
}
