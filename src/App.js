import React from "react";
import { Content } from "./Content";
import "./App.css";

const logoURL = process.env.PUBLIC_URL + "/assets/img/wow-min-max_logo.png";

export default function App() {
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

			<section className="content">
				<Content />
			</section>
		</div>
	);
}
