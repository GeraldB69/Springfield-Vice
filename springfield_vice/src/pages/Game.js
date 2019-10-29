import React, { Component } from "react";
import Homer from "../components/Homer";
import ObstacleF from "../components/ObstacleF";
import config from "../components/configSpringfieldVice.json";
import JoyWrapper from "../components/Joystick";
import Timer from "../components/Timer";
import Donut from "../components/Item";
import DonutCounter from "../components/DonutCounter";
import BoutonA from "../components/BoutonA";
import "./game.css";
import Modal from "../components/Modal";
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
			positionObstacleY: getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit),
			positionObstacleX: getRandomArbitrary(config.limits.leftLimit, config.limits.rightLimit),
			showModal: false,
			seconds: config.timer.seconds,
			paused: false,
			positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, config.limits.rightLimit)),
			// eslint-disable-next-line
			positionDonutY: parseInt(getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)),
			catchDonut: false,
			donutCount: 0,
			throwing: false,
		};
		
		this.stepX = 0
		this.stepY = 0
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
		this.stepX = stepX
		this.stepY = stepY
	}

	move = () => {
		const { positionX, positionY, positionDonutX, positionObstacleX } = this.state;
		this.setState({
			positionX: positionX + this.stepX,
			positionY: positionY + this.stepY
		});
		console.log(this.stepX, this.stepY)
		
		if (this.stepX < 0) {
			this.setState({ isHomerRunningLeft: true })
		} else if (this.stepX > 0) {
			this.setState({ isHomerRunningLeft: false })
		}
		// if (this.state.isRunning)
		// 	this.timeOut = setTimeout(() => this.move(), 10);
	
		if (this.state.isRunning === false)
			this.stopRunning();
		
		if (positionX !== config.limits.leftLimit)
			this.setState({
				positionDonutX: positionDonutX - this.stepX / config.background.defilement,
				positionObstacleX: positionObstacleX - this.stepX / config.background.defilement
			});

		this.collisionDetection();
		this.toCountDonuts();
		
	};

	startRunning = () => {
		this.setState({ isRunning: true });
		this.state.intervalHomer = setInterval(() => this.move(), 50);
	}
	stopRunning = () => {
		this.setState({ isRunning: false });
		clearInterval(this.state.intervalHomer);
	}


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
			this.setState({ catchDonut: true });
	};
	toCountDonuts = () => {
		if (this.state.catchDonut) this.setState({ donutCount: 1 });
	};
	throwingDonut = () => {
		this.setState({ throwing: !this.state.throwing });
		this.setState({ donutCount: 0 });
		this.setState({ catchDonut: false });
	};

	render() {
		const bgStyle = {
			backgroundPositionY: config.background.position,
			backgroundPositionX: -this.state.positionX / config.background.defilement,
			height: config.background.height
		};

		const donutStyle = this.state.catchDonut ? "none" : "block";

		return (

			<div className="game" style={bgStyle}>
				{this.testLimitsOfMap()}

				<Homer positionX={this.state.positionX} positionY={this.state.positionY} isRunning={this.state.isRunning} isHomerRunningLeft={this.state.isHomerRunningLeft} donut={this.state.catchDonut}/>
				

				<Donut
					positionDonutX={this.state.positionDonutX}
					positionDonutY={this.state.positionDonutY}
					donutStyle={donutStyle}
				/>

				<ObstacleF
					positionObstacleX={this.state.positionObstacleX}
					positionObstacleY={this.state.positionObstacleY}
				/>
				
				<DonutCounter donutCount={this.state.donutCount} />
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
				
				<BoutonA
					throwingDonut={this.throwingDonut}
					displayButtonA={this.state.paused}
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
