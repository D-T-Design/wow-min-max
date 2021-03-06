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
import * as weaponsLib from "../lib/weapons.json";

const clientId = process.env.REACT_APP_BLIZZARD_ID;
const clientSecret = process.env.REACT_APP_BLIZZARD_SECRET;

let accessToken = getAuth();
async function getAuth() {
	const tokenUrl = "https://us.battle.net/oauth/token";
	const authUrl = `${tokenUrl}?grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
	await axios
		.post(authUrl)
		.catch((error) => {
			console.log(error);
		})
		.then((res) => {
			console.log(res);
			accessToken = res.data.access_token;
			return accessToken;
		});
}

async function searchGameData() {
	const searchUrl = "https://us.api.blizzard.com/data/wow/search/item?";
	const namespace = "namespace=static-classic-us";
	// const itemNameParam = "&name.en_US=";
	// ${itemNameParam}Thunderfury
	const orderByParam = "&orderby=";
	const accessParam = "&access_token=";
	const pageParam = "&_page=";
	// const strMin = "&str=[1,]";
	// const itemClass = "&item_class.name.en_US=";
	const subClass = "&item_subclass.name.en_US=";
	await axios({
		method: "get",
		url: `${searchUrl}${namespace}${subClass}Dagger${orderByParam}id${pageParam}1${accessParam}${accessToken}`,
	})
		.catch((error) => {
			console.log(error);
		})
		.then((res) => {
			console.log(res.data.results);
		});
}

async function getItemData() {
	const searchUrl = "https://us.api.blizzard.com/data/wow/item/";
	const namespace = "namespace=static-classic-us";
	const weapons = weaponsLib.default;
	const accessParam = "&access_token=";
	let weaponDump = [];
	for (let i = 0; i < 10; i++) {
		let itemID = weapons[i];
		const itemEndpoint = `${searchUrl}${itemID}?${namespace}${accessParam}${accessToken}`;
		axios
			.get(itemEndpoint)
			.catch((error) => {
				console.log(error);
			})
			.then((res) => {
				const data = res.data;
				setTimeout(function () {
					if (res.data) {
						let obj = {
							id: data.id,
							level: data.level,
							required_level: data.required_level,
							name: data.name.en_US,
							quality: data.quality.name.en_US,
							item_class: { id: data.item_class.id, name: data.item_class.name.en_US },
							item_subclass: {
								id: data.item_subclass.id,
								name: data.item_subclass.name.en_US,
							},
							type: data.inventory_type.name,
						};
						weaponDump.push(obj);
					}
				}, 200);
			});
	}
	console.log(weaponDump);
}

export default function FetchBtn() {
	return (
		<div>
			<button onClick={getItemData}>Get Data</button>
		</div>
	);
}
