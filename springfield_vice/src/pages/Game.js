import React, { Component } from "react";
import Homer from "../components/Homer";
import ObstacleFixe from "../components/ObstacleFixe"

class Game extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Homer positionX="500" positionY="600" />
				<ObstacleFixe />
			</div>
		);
	}
}
export default Game;
