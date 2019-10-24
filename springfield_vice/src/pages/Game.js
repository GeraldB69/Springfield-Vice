import React, { Component } from "react";
import Homer from "../components/Homer";
import ObstacleF from "../components/ObstacleF";
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
			positionObstacleY : getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit),
			positionObstacleX : getRandomArbitrary(config.limits.leftLimit, config.limits.rightLimit),
			showModal: false,
			seconds: config.timer.seconds,
			paused: false,
			positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, config.limits.rightLimit)),
			positionDonutY: parseInt(getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)),
			collisionHomer: false
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
		const { positionX, positionY, positionDonutX, positionObstacleX } = this.state;
		this.setState({
			positionX: positionX + stepX,
			positionY: positionY + stepY,
			positionDonutX: positionDonutX - stepX / config.background.defilement,
			positionObstacleX : positionObstacleX - stepX / config.background.defilement
		});
		this.stopMove();
		this.timeOut = setTimeout(() => this.move(stepX, stepY), 20);
		this.collisionDetection();
	};

	stopMove = () => {
		clearTimeout(this.timeOut);
	};

	// collisionObstacle = () => {
	// 	console.log("positionX de Homer :" + this.state.positionX);
	// 	console.log("positionY de Homer :" + this.state.positionY);
	// 	console.log("positionX de ObstacleF :" + this.state.positionXObstacleF);
	// 	console.log("positionY de ObstacleF :" + this.state.positionYObstacleF);
		


	// }

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

	collisionDetection = () => {
		if (
			this.state.positionX > this.state.positionDonutX - 30 &&
			this.state.positionX < this.state.positionDonutX + 30 &&
			this.state.positionY < this.state.positionDonutY + 30 &&
			this.state.positionY > this.state.positionDonutY - 30
		)
			//onsole.log("collision");
			this.setState({ collisionHomer: true });
	};

	render() {
		const bgStyle = {
			backgroundPositionY: config.background.position,
			backgroundPositionX: -this.state.positionX / config.background.defilement,
			height: config.background.height
		};

		const donutStyle = this.state.collisionHomer ? "none" : "block";

		return (
			<div className="game" style={bgStyle}>
				{this.testLimitsOfMap()}

				<Donut
					positionDonutX={this.state.positionDonutX}
					positionDonutY={this.state.positionDonutY}
					donutStyle={donutStyle}
				/>
				<Homer positionX={this.state.positionX} positionY={this.state.positionY} />
			
				<ObstacleF positionObstacleX={this.state.positionObstacleX } positionObstacleY={this.state.positionObstacleY}/>
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
