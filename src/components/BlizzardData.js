// https://us.api.blizzard.com/data/wow/search/item?

// Required Parameters:
// :region (string)
// namespace string)
// ?access_token (string)

// Optional Parameters:
// locale (string)
// name (string)
// orderby (string)
// _page (integer)

// Operators
// Join "&"

import React from "react";
import axios from "axios";

async function getAuth() {
	await axios({
		method: "post",
		url: "https://us.battle.net/oauth/token",
		data: {
			token_type: "basic",
			client_id: "876970e949b64e3fba0a583c07b24569",
			client_secret: "dQK2uoiE1kAnhPqMb7tzyxkcDDkB5o9T",
		},
	})
		.catch((error) => {
			console.log(error);
		})
		.then((res) => {
			console.log(res);
		});
}

export default function FetchBtn() {
	return (
		<div>
			<button onClick={getAuth}>Get Auth</button>
		</div>
	);
}
