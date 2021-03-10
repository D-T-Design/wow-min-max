import React from "react";

const Name = ({ currentName, changeName }) => (
	<div className="character-name">
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

export { Name, Level };
