# WoW Classic Character Guide (WCCG)
### World of Warcraft Leveling Gear, Quest, and Dungeon suggestions based on user input.
##### v0.2

The goal of this project is to provide help for WoW Classic players by making their leveling experience easier.  This tool does the "searching" work for them and automatically generates suggested questing zones, cities, dungeons, battlegrounds, quests, and gear based on their input.

## The Challenges
- This project is not a quick an easy project, **the majority of the work is compiling the data needed to display suggestions**.  Blizzard provides an API for their game data, however it is not all-inclusive and only includes basic details about gear such as Name, Required Level, and Type (also, queries are 1 item at a time... there are thousands and thousands of items to parse!).  This means I will need to compile data from various sources including Blizzard, WoWQuery.db and WoWHead.  That data needs to be rearranged, merged, and otherwise set up correctly on my own database in order to pull, parse, organize, and filter data for my application.
- **I have never used a database or REST API directly before...** so that means I better get to learning!  For this project I've chosen FaunaDB as my back-end since I am building this as a JAMStack application.  That means I have/had to learn Fauna's FQL language and implement GraphQL into my application itself in order to pull data out of it.  Lastly, I included SWR for easy data-fetching and cache management.
- **This web app is being built with React**.  The user experience I've planned requires quick loading and state/data management.  Users can pick from Factions, Classes, and Races and the view will automatically change depending on input.
- **Release Schedule**. This application is most useful and relevant when a lot of new people are playing the game.  The original goal was to have this built by the time WoW Classic was released, though I did not reach that goal (a newborn son is more important!)  Now I would like to release this by the time Burning Crusade Classic is released, likely late Summer 2021.  That means, I have a deadline, and an obligation to get a Minimum Viable Product online and start getting feedback and iterating by the time the game get's going!

### To-Do (as of March 2021)
- ~~*App* - User Input & State Management~~
- ~~Create Dungeon JSON Data~~
- ~~Generate Dungeon List~~
- Create Quest JSON Data
- Generate Quest List
- ~~Create Faction, Race, and Class Data~~
- ~~*Fauna* - Move Faction, Race, and Class Data to Fauna~~
- ~~*App* - Implement Faction, Race, Class toggles using FaunaDB.~~
- *Fauna* - Move Dungeon & Zone Data to Fauna
- *App* - Implement Suggestion Switching (Show just Zones, just Gear, etc.)
- *Data* - Gather gear IDs and run scripting to pull Blizzard base data
- *Data* - Run gear IDs through WoWQuery data to get Item Stats, merge with existing Data
- *Fauna* - Upload gear data to Fauna, look for a way to implement this without having to edit thousands of item entries.
- *App* - Implement Gear Lists, including Filters, Sorting, and Toggling
- Design & Style UX
- Implement Domain
- Get feedback from community
- ???

### Future Ideas
- Save/Login System
- Export as PDF
- Talent Calculator
- In-Game Addon Integration
- Character Sheet / Stats
- Gear Stats & Comparison