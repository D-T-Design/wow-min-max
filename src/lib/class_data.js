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

const classAttr = {
	Druid: {
		id: 11,
		armorEquip: ["cloth", "leather"],
		weaponEquip: ["staff", "dagger", "fist", "onehandmace", "twohandmace", "polearm"],
		mainStats: ["agi", "int", "sta"],
	},
	Hunter: {
		id: 3,
		armorEquip: ["leather", "mail"],
		weaponEquip: [
			"gun",
			"bow",
			"crossbow",
			"staff",
			"thrown",
			"dagger",
			"fistweapon",
			"onehandsword",
			"twohandsword",
			"onehandaxe",
			"twohandaxe",
			"polearm",
		],
		mainStats: ["agi", "int", "sta"],
	},
	Mage: {
		id: 8,
		armorEquip: ["cloth"],
		weaponEquip: ["staff", "onehandsword", "dagger", "wand"],
		mainStats: ["int", "sta"],
	},
	Priest: {
		id: 5,
		armorEquip: ["cloth"],
		weaponEquip: ["staff", "onehandmace", "dagger", "wand"],
		mainStats: ["int", "spi", "sta"],
	},
	Rogue: {
		id: 4,
		armorEquip: ["leather"],
		weaponEquip: [
			"onehandsword",
			"dagger",
			"thrown",
			"bow",
			"crossbow",
			"gun",
			"fistweapon",
			"onehandmace",
		],
		mainStats: ["agi", "sta", "str"],
	},
	Shaman: {
		id: 7,
		armorEquip: ["leather", "mail", "cloth"],
		weaponEquip: ["staff", "onehandmace", "onehandaxe", "twohandaxe", "twohandmace"],
		mainStats: ["str", "int", "sta"],
	},
	Warlock: {
		id: 9,
		armorEquip: ["cloth"],
		weaponEquip: ["dagger", "onehandsword", "staff", "wand"],
		mainStats: ["sta", "int"],
	},
	Warrior: {
		id: 1,
		armorEquip: ["mail", "plate", "leather"],
		weaponEquip: [
			"gun",
			"bow",
			"crossbow",
			"staff",
			"thrown",
			"dagger",
			"fistweapon",
			"onehandsword",
			"twohandsword",
			"onehandaxe",
			"twohandaxe",
			"onehandmace",
			"twohandmace",
			"polearm",
		],
		mainStats: ["str", "sta", "spi"],
	},
};

export { factions, factionRaces, raceClasses, classAttr };
