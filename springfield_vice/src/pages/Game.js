import React, { Component } from "react";
import Homer from "../components/Homer";
//import ObstacleF from "../components/ObstacleF";
import config from "../components/configSpringfieldVice.json";
import JoyWrapper from "../components/Joystick";
import Timer from "../components/Timer";
import Donut from "../components/Item";
import DonutCounter from "../components/DonutCounter";
import BoutonA from "../components/BoutonA";
import "./game.css";
import Modal from "../components/Modal";
import { getRandomArbitrary } from "../components/helpers";

const donutStatus = {
	GROUND : "ground",
	PICKED: "picked",
	THROWN: "thrown",
}
console.log(donutStatus)

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionX: config.initialPosition.x,
			positionY: config.initialPosition.y,
			positionObstacleY: getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit),
			positionObstacleX: getRandomArbitrary(config.limits.leftLimit, config.limits.rightLimit),
			showModal: false,
			seconds: config.timer.seconds,
			paused: false,
			donutPosition: 0,
			positionDonutY: parseInt(getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)),
			catchDonut: false,
			//donutCount: 0,
			moving: false,
			isThrowing: false,
			donutPopped: [
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					picked: false,
					status: donutStatus.GROUND,
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					picked: false,
					status: donutStatus.GROUND,
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					picked: false,
					status: donutStatus.GROUND,
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					picked: false,
					status: donutStatus.GROUND,
				}
			],
			relativePositionX: config.initialPosition.x,
			isRunning: false,
			isHomerRunningLeft: false
		};

		this.stepX = 0;
		this.stepY = 0;
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

	setStep = (stepX, stepY) => {
		this.stepX = stepX;
		this.stepY = stepY;
	};

	move = () => {
		const { positionX, positionY } = this.state;

		this.setState({
			positionX: positionX + this.stepX,
			positionY: positionY + this.stepY,
			moving: true
		});
		console.log(this.stepX, this.stepY);

		if (this.stepX < 0) {
			this.setState({ isHomerRunningLeft: true });
		} else if (this.stepX > 0) {
			this.setState({ isHomerRunningLeft: false });
		}
		// if (this.state.isRunning)
		// 	this.timeOut = setTimeout(() => this.move(), 10);

		if (this.state.isRunning === false) this.stopRunning();

		if (positionX !== config.limits.leftLimit)
			this.setState({ donutPosition: this.state.donutPosition - this.stepX / config.background.defilement });
		this.setState({ relativePositionX: this.state.positionX - this.state.donutPosition });
	};

	startRunning = () => {
		this.setState({ isRunning: true });
		this.state.intervalHomer = setInterval(() => this.move(), 50);
	};
	stopRunning = () => {
		this.setState({ isRunning: false });
		clearInterval(this.state.intervalHomer);
	};

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

	collisionDetection = (item) => {
		if (
			this.state.relativePositionX > item.positionDonutX - 30 &&
			this.state.relativePositionX < item.positionDonutX + 30 &&
			this.state.positionY < item.positionDonutY + 30 &&
			this.state.positionY > item.positionDonutY - 30
		)
			item.status = "picked";
			
	};

	donutCount = () => {
		let donutCount = 0;
		// this.state.donutPopped.map((item) => {
		// 	if (item.picked && !item.isAlreadyThrown) {
		// 		return donutCount = donutCount + 1
		// 	}
		// 	else if (item.picked && item.isAlreadyThrown) {
		// 		return donutCount = donutCount -1
		// 	}
		// 	else {
		// 		return donutCount = donutCount
		// 	}
		// }
		this.state.donutPopped.map((item) => item.status === "picked" ? (donutCount = donutCount + 1) : (donutCount = donutCount)
		);
		//console.log("donutCount = ", donutCount);
		return donutCount;
	};


	throwingDonut = () => {
		this.setState({
			isThrowing: true,
			// donutPopped: {...this.state.donutPopped, picked: false}
		});
		const donutIndex = this.state.donutPopped.findIndex((item) => item.status === "picked")
		const { donutPopped } = this.state;
		donutPopped[donutIndex].status = donutStatus.THROWN;
		this.setState({ donutPopped })
		// console.log("throw")
	};

	stopThrowingDonut = () => {
		this.setState({ isThrowing: false });
		// console.log("stopthrow")
	};

	gameLoop = () => {
		this.state.donutPopped.map((item) => this.collisionDetection(item));
		this.testLimitsOfMap();
	};


	render() {
		const bgStyle = {
			backgroundPositionY: config.background.position,
			backgroundPositionX: -this.state.positionX / config.background.defilement,
			height: config.background.height
		};
		{
			this.gameLoop();
		}

		return (
			<div className="game" style={bgStyle}>
				<Donut donutPopped={this.state.donutPopped} donutPosition={this.state.donutPosition} />

				<Homer
					positionX={this.state.positionX}
					positionY={this.state.positionY}
					isRunning={this.state.isRunning}
					isHomerRunningLeft={this.state.isHomerRunningLeft}
					donutCount={this.donutCount()}
					isThrowing={this.state.isThrowing}
				/>

				<DonutCounter donutCount={this.donutCount()} />

				<JoyWrapper
					setStep={this.setStep}
					startRunning={this.startRunning}
					stopRunning={this.stopRunning}
					toTheRight={this.toTheRight}
					toTheLeft={this.toTheLeft}
					toTheTop={this.toTheTop}
					toTheBottom={this.toTheBottom}
					displayJoystick={this.state.paused}
				/>

				<BoutonA throwingDonut={this.throwingDonut} stopThrowingDonut={this.stopThrowingDonut} displayButtonA={this.state.paused} />

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