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
			positionDonutY: getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit),
			isHomerRunningLeft: false,
		};
		this.stepX = 0
		this.stepY = 0
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

	setStep = (stepX, stepY) => {
		this.stepX = stepX
		this.stepY = stepY
	}

	move = () => {
		const { positionX, positionY } = this.state;
		console.log("stepX", this.stepX)
		this.setState({
			positionX: positionX + this.stepX,
			positionY: positionY + this.stepY
		});
		// this.stopMove();
		if (this.stepX < 0) {
			this.setState({ isHomerRunningLeft: true })
		} else if (this.stepX > 0) {
			this.setState({ isHomerRunningLeft: false })
		}
		if (this.state.isRunning)
			this.timeOut = setTimeout(() => this.move(), 100);
	};

	startRunning = () => {
		this.setState({ isRunning: true }, () => this.move())
	}
	stopRunning = () => {
		this.setState({ isRunning: false });
		// clearTimeout(this.timeOut);
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

				<Homer positionX={this.state.positionX} positionY={this.state.positionY} isRunning={this.state.isRunning} isHomerRunningLeft={this.state.isHomerRunningLeft} />
				<Donut positionX={this.state.positionX} positionDonutY={this.state.positionDonutY} />

				<JoyWrapper
					setStep={this.setStep}
					startRunning={this.startRunning}
					stopRunning={this.stopRunning}
					toTheRight={this.toTheRight}
					toTheLeft={this.toTheLeft}
					toTheTop={this.toTheTop}
					toTheBottom={this.toTheBottom}
				/>

				{/* <Timer /> */}
			</div>
		);
	}
}
export default Game;
