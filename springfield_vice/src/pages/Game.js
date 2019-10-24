import React, { Component } from "react";
import Homer from "../components/Homer";
import config from "../components/configSpringfieldVice.json";
import JoyWrapper from "../components/Joystick";
import Timer from "../components/Timer";
import Donut from "../components/Item";
import "./game.css";
import Modal from "../components/Modal";
import { getRandomArbitrary } from "../components/helpers";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionX: config.initialPosition.x,
			positionY: config.initialPosition.y,
			showModal: false,
			seconds: config.timer.seconds,
			paused: false,
			positionDonutY: getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
		};
		this.tick = this.tick.bind(this);
		this.interval = undefined;
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

	//---------------------- Timer + Modal Pause

	tick = () => {
		let { seconds } = this.state;
		this.setState({ seconds: seconds - 1 });

		if (seconds === 0) {
			this.setState({ seconds: 0 });
			alert("GAME OVER");
			clearInterval(this.interval);
		}
	};

	componentDidMount = () => {
		this.interval = setInterval(() => this.tick(), 1000);
	};

	pauseTimer = () => {
		if (this.state.paused === false) {
			clearInterval(this.interval);
		} else {
			this.componentDidMount();
		}
	};

	pauseGame = () => {
		this.setState({ paused: !this.state.paused });
		this.pauseTimer();
	};

	showModal = () => {
		this.setState({ showModal: true });
	};

	hideModal = () => {
		this.setState({ showModal: false });
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
				<Donut positionX={this.state.positionX} positionDonutY={this.state.positionDonutY} />
				<Homer positionX={this.state.positionX} positionY={this.state.positionY} />

				<JoyWrapper
					move={this.move}
					stopMove={this.stopMove}
					toTheRight={this.toTheRight}
					toTheLeft={this.toTheLeft}
					toTheTop={this.toTheTop}
					toTheBottom={this.toTheBottom}
				/>

				<Timer pauseGame={this.pauseGame} showModal={this.showModal} seconds={this.state.seconds} />
				<Modal
					className="modal"
					pauseGame={this.pauseGame}
					show={this.state.showModal}
					hideModal={this.hideModal}
					showModal={this.showModal}
				/>
			</div>
		);
	}
}
export default Game;
