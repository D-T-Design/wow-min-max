import useSWR from "swr";
import { graphQLClient } from "./fauna_gql";
const fetcher = (query) => graphQLClient.request(query);

export default function useGameData() {
	const { data, error } = useSWR(
		`{
      allFactions {
        data {
          name
          races {
            data {
              name
              classes {
                data {
                  id
                  name
                  armorTypes {
                    data {
                      name
                      id
                    }
                  }
                  weaponTypes {
                    data {
                      name
                      id
                    }
                  }
                  statTypes {
                    data {
                      name
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
		fetcher
	);
	let gameData = data || [];
	const isPending = !data;
	const parseGameData = (data) => {
		const availableFactions = data.allFactions.data.map((faction) => faction.name);

		const [hordeRaces, allianceRaces] = data.allFactions.data.map((faction) =>
			faction.races.data.map((race) => race.name)
		);

		const extractClasses = data.allFactions.data.map((faction) =>
			faction.races.data.map((race) => race.classes.data)
		);

		let classes = [];
		extractClasses.map((faction) =>
			faction.map((race) =>
				race.map(
					(playerClass) =>
						!classes.includes(classes.find((el) => el.name === playerClass.name)) &&
						classes.push(playerClass)
				)
			)
		);

		const hordeData = data.allFactions.data[0].races.data;
		const allianceData = data.allFactions.data[1].races.data;
		const getAvailableClasses = (data, className) =>
			data
				.find((race) => race.name === className)
				.classes.data.map((playerClass) => playerClass.name);
		const [
			undeadClasses,
			trollClasses,
			taurenClasses,
			orcClasses,
			humanClasses,
			nightElfClasses,
			dwarfClasses,
			gnomeClasses,
		] = [
			getAvailableClasses(hordeData, "Undead"),
			getAvailableClasses(hordeData, "Troll"),
			getAvailableClasses(hordeData, "Tauren"),
			getAvailableClasses(hordeData, "Orc"),
			getAvailableClasses(allianceData, "Human"),
			getAvailableClasses(allianceData, "Night Elf"),
			getAvailableClasses(allianceData, "Dwarf"),
			getAvailableClasses(allianceData, "Gnome"),
		];
		return {
			availableFactions,
			hordeRaces,
			allianceRaces,
			classes,
			undeadClasses,
			trollClasses,
			taurenClasses,
			orcClasses,
			humanClasses,
			nightElfClasses,
			dwarfClasses,
			gnomeClasses,
		};
	};
	const parsedGameData = gameData.allFactions ? parseGameData(gameData) : gameData;
	return { parsedGameData, error, isPending };
}
