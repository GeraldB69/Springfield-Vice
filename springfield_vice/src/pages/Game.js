import React, { Component } from "react";
import Homer from "../components/Homer";
import ObstacleF from "../components/ObstacleF";
import config from "../components/configSpringfieldVice.json";
import JoyWrapper from "../components/Joystick";
import Timer from "../components/Timer";
import Donut from "../components/Item";
import "./game.css";
import { getRandomArbitrary } from "../components/helpers";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionX: config.initialPosition.x,
			positionY: config.initialPosition.y,
			positionDonutY: getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit),
			positionYObstacleF : getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit),
			positionYObstacleF2 : getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
		};
	}

	testLimitsOfMap = () => {
		if (this.state.positionY < config.limits.topLimit) this.setState({ positionY: config.limits.topLimit });
		else if (this.state.positionY > config.limits.bottomLimit)
			this.setState({ positionY: config.limits.bottomLimit });
		else if (this.state.positionX > config.limits.rightLimit)
			this.setState({ positionX: config.limits.rightLimit });
		else if (this.state.positionX < config.limits.leftLimit)
			this.setState({ positionX: config.limits.leftLimit });
	};

	move = (stepX, stepY) => {
		const { positionX, positionY } = this.state;
		this.setState({
			positionX: positionX + stepX,
			positionY: positionY + stepY
		});
		this.stopMove();
		this.timeOut = setTimeout(() => this.move(stepX, stepY), 20);
	};

	stopMove = () => {
		clearTimeout(this.timeOut);
	};

	collisionObstacle = () => {
		console.log("positionX de Homer :" + this.state.positionX);
		console.log("positionY de Homer :" + this.state.positionY);
		console.log("positionX de ObstacleF :" + this.state.positionXObstacleF);
		console.log("positionY de ObstacleF :" + this.state.positionYObstacleF);



	}


	render() {
		const bgStyle = {
			backgroundPositionY: config.background.position,
			backgroundPositionX: -this.state.positionX / config.background.defilement,
			height: config.background.height
		};

		return (
			<div className="game" style={bgStyle}>
				{this.testLimitsOfMap()}
				<Donut positionX={this.state.positionX} positionDonutY={this.state.positionDonutY} />
				<Homer positionX={this.state.positionX} positionY={this.state.positionY} />
				{this.collisionObstacle()}
				<ObstacleF positionX={this.state.positionX} positionYObstacleF={this.state.positionYObstacleF}/>
				<JoyWrapper
					move={this.move}
					stopMove={this.stopMove}
					toTheRight={this.toTheRight}
					toTheLeft={this.toTheLeft}
					toTheTop={this.toTheTop}
					toTheBottom={this.toTheBottom}
				/>

				<Timer />
			</div>
		);
	}
}
export default Game;
