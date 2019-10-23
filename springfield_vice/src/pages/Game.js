import React, { Component } from "react";
import Homer from "../components/Homer";
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
			isRunning: false,
			positionDonutY: getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
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
		if (this.state.isRunning) this.timeOut = setTimeout(() => this.move(stepX, stepY), 20);
	};

	startRunning = () => this.setState({ isRunning: true });
	stopRunning = () => this.setState({ isRunning: false });

	stopMove = () => {
		console.log("stopmove");
		clearTimeout(this.timeOut);
		this.stopRunning();
	};

	render() {
		const bgStyle = {
			backgroundPositionY: config.background.position,
			backgroundPositionX: -this.state.positionX / config.background.defilement,
			height: config.background.height
		};

		return (
			<div className="game" style={bgStyle}>
				{this.testLimitsOfMap()}
				<Homer
					positionX={this.state.positionX}
					positionY={this.state.positionY}
					isRunning={this.state.isRunning}
				/>
				<Donut positionX={this.state.positionX} positionDonutY={this.state.positionDonutY} />

				<JoyWrapper
					move={this.move}
					startRunning={this.startRunning}
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
