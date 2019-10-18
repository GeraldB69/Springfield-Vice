import React, { Component } from "react";
import Homer from "../components/Homer";

class Game extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Homer positionX="160" positionY="120" />
			</div>
		);
	}
}
export default Game;
