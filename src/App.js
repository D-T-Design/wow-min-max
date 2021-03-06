import React, { useState } from "react";
// import CharacterSheet from "./components/charactersheet/CharacterSheet";
import SuggestionsSection from "./components/charactersheet/SuggestionsSection";
import {
	Name,
	Level,
	Faction,
	Race,
	PlayerClass,
} from "./components/characterinput/CharacterInput";
import PlayerInfo from "./components/misc/PlayerInfo";
import Credits from "./components/misc/Credits";
import "./App.css";

// import FetchBtn from "./components/BlizzardData";

const logoURL = process.env.PUBLIC_URL + "/assets/img/wow-min-max_logo.png";

export default function App() {
	const [level, setLevel] = useState(30);
	const [faction, setFaction] = useState("Alliance");
	const [race, setRace] = useState("Human");
	const [playerClass, setClass] = useState("Rogue");
	const [name, setName] = useState("Gild");
	const updateLevel = (e) => {
		const newLevel = e.target.value;
		let val = newLevel === "" ? "" : newLevel < 1 ? 1 : newLevel > 60 ? 60 : newLevel;
		setLevel(val);
	};
	const updateFaction = (newFaction) => {
		setFaction(newFaction);
		setRace("");
		setClass("");
	};
	const updateRace = (race) => {
		setRace(race);
		setClass("");
	};
	const updateClass = (newClass) => {
		setClass(newClass);
	};
	const updateName = (e) => {
		setName(e.target.value);
	};
	const factions = ["Horde", "Alliance"];
	const factionRaces = {
		Horde: ["Undead", "Tauren", "Orc", "Troll"],
		Alliance: ["Human", "Dwarf", "Gnome", "Night Elf"],
	};
	const raceClasses = {
		Undead: ["Mage", "Priest", "Rogue", "Warlock", "Warrior"],
		Troll: ["Hunter", "Mage", "Priest", "Rogue", "Shaman", "Warrior"],
		Tauren: ["Druid", "Hunter", "Shaman", "Warrior"],
		Orc: ["Hunter", "Rogue", "Shaman", "Warlock", "Warrior"],
		Human: ["Mage", "Paladin", "Priest", "Rogue", "Warrior", "Warlock"],
		Dwarf: ["Hunter", "Paladin", "Priest", "Rogue", "Warrior"],
		Gnome: ["Mage", "Rogue", "Warlock", "Warrior"],
		"Night Elf": ["Druid", "Hunter", "Priest", "Rogue", "Warrior"],
	};

	return (
		<div className="App" style={{ textAlign: "center" }}>
			<div className="container nav">
				<h1>
					<img className="logo" src={logoURL} alt="World of Warcraft Classic - Min/Max" />
				</h1>
				<aside className="site-info">
					<h2>We do the searching for you!</h2>
					<p>
						The goal of this website is to make it easy for World of Warcraft players to find out
						what to do <em>right now</em>. That means, at any given time or level, you can enter
						your basic level and class info, and you'll get back recommended zones, quests, items,
						and guides tailored to you!
					</p>
					{/* <FetchBtn/> */}
				</aside>
			</div>
			<section className="input-container">
				<Name changeName={updateName} currentName={name} />
				<Level changeLevel={updateLevel} currentLevel={level} />
				<Faction chosenFaction={faction} changeFaction={updateFaction} factions={factions} />
				<Race
					changeRace={updateRace}
					chosenRace={race}
					faction={faction}
					factionRaces={factionRaces}
				/>
				<PlayerClass
					changeClass={updateClass}
					race={race}
					chosenClass={playerClass}
					raceClasses={raceClasses}
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
		</div>
	);
}
