import React, { Component } from "react";
import Homer from "../components/Homer";
import config from "../components/configSpringfieldVice.json";
import JoyWrapper from "../components/Joystick";
import Timer from "../components/Timer";
import Donut from "../components/Item";
import DonutCounter from "../components/DonutCounter";
import BoutonA from "../components/BoutonA";
import "./game.css";
import Modal from "../components/Modal";
import Selma from "../components/Selma";
import { getRandomArbitrary } from "../components/helpers";
import Bart from "../components/Bart";
import Seymour from "../components/Seymour";

const donutStatus = {
	GROUND : "ground",
	PICKED: "picked",
	THROWN: "thrown",
}

const objDisplayBlock = "block";
const objDisplayNone = "none";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionX: config.initialPosition.x,
			positionY: config.initialPosition.y,
			positionObstacleY: getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit),
			positionObstacleX: getRandomArbitrary(config.limits.leftLimit, config.limits.rightLimit),
			seconds: config.timer.seconds,
			paused: false,
			donutPosition: 0,
			positionDonutY: parseInt(getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)),
			catchDonut: false,
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
					display: true,
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					picked: false,
					status: donutStatus.GROUND,
					display: true,
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					picked: false,
					status: donutStatus.GROUND,
					display: true,
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					picked: false,
					status: donutStatus.GROUND,
					display: true,
				}
			],
			relativePositionX: config.initialPosition.x,
			isRunning: false,
			isHomerRunningLeft: false,
			selmaPos:
				{
				positionSelmaX: 600,
				positionSelmaY: 250,
				SelmaMovX: [1420, 1420, 1400, 1350, 1350, 1300, 1280, 1280, 1250, 1250, 1220, 1220, 1200, 1200, 1250, 1250, 1280, 1300, 1320, 1350, 1380],
				SelmaMovY: [150, 180, 180, 200, 230, 250, 250, 220, 200, 200, 180, 180, 150, 150, 140, 140, 130, 130, 130, 140, 140],
				},
			seymourPos:
				{
				positionSeymourX: 1400,
				positionSeymourY: 130,
				SeymourMovX: [600, 620, 620, 600, 580, 580, 550, 550, 530, 530, 520, 500, 500, 520, 550, 550, 580, 580, 580, 580],
				SeymourMovY: [250, 250, 250, 250, 230, 230, 200, 200, 220, 220, 220, 220, 250, 250, 210, 210, 230, 230, 240, 240],
				},
			bartPos:
				{
				positionBartX: 6000,
				positionBartY: 200,
				BartMovX: [6000, 6000, 6000, 6020, 6020, 6050, 6050, 6100, 6100, 6150, 6150, 6200, 6250, 6250, 6300, 6300, 6250, 6250, 6200, 6200, 6100, 6050],
				BartMovY: [200, 250, 250, 250, 300, 300, 300, 300, 250, 250, 300, 300, 250, 250, 200, 200, 230, 230, 200, 200, 180, 180],
				},
			globalPosition: 0,
		};

		this.stepX = 0;
		this.stepY = 0;
		this.tick = this.tick.bind(this);
		this.interval = undefined;
		this.intObs = undefined;
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
		const { positionX, positionY, positionSelmaX } = this.state;

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
	
		if (this.state.isRunning === false)
			this.stopRunning();
		


		if (positionX !== config.limits.leftLimit)
			this.setState({
				donutPosition: this.state.donutPosition - this.stepX / config.background.defilement,
				relativePositionX: this.state.positionX - this.state.donutPosition,
				positionSelmaX: positionSelmaX - this.stepX / config.background.defilement
		});

		
	};

	startRunning = () => {
		this.setState({ isRunning: true });
		this.state.intervalHomer = setInterval(() => this.move(), 50);
	};
	stopRunning = () => {
		this.setState({ isRunning: false });
		clearInterval(this.state.intervalHomer);
	}

	moveSelma = () => {
		let i=0;
		this.intSelma = setInterval(() => {
			let newPosX = this.state.selmaPos.SelmaMovX[i];
			let newPosY = this.state.selmaPos.SelmaMovY[i];
			this.setState({ selmaPos: { ...this.state.selmaPos, positionSelmaX: newPosX, positionSelmaY: newPosY} });
			i++;
			if(i>=this.state.selmaPos.SelmaMovX.length){
				i = 0;
			}
		}, 1000);
	};

	moveSeymour = () => {
		let i=0;
		this.intSeymour = setInterval(() => {
			let newPosX = this.state.seymourPos.SeymourMovX[i];
			let newPosY = this.state.seymourPos.SeymourMovY[i];
			this.setState({ seymourPos: { ...this.state.seymourPos, positionSeymourX: newPosX, positionSeymourY: newPosY} });
			i++;
			if(i>=this.state.seymourPos.SeymourMovX.length){
			
				i = 0;
			}
		}, 1000);
	};

	moveBart = () => {
		let i=0;
		this.intBart = setInterval(() => {
			let newPosX = this.state.bartPos.BartMovX[i];
			let newPosY = this.state.bartPos.BartMovY[i];
			this.setState({ bartPos: { ...this.state.bartPos, positionBartX: newPosX, positionBartY: newPosY} });
			i++;
			if(i>=this.state.bartPos.BartMovX.length){
				i = 0;
			}
		}, 1000);
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
		this.moveSelma();
		this.moveBart();
		this.moveSeymour();
	};

	pauseTimer = () => {
		if (this.state.paused === false) {
			clearInterval(this.interval);
			clearInterval(this.intSelma);
			clearInterval(this.intBart);
			clearInterval(this.intSeymour);
		} else {
			this.componentDidMount();
		};
	};

	pauseGame = () => {
		this.setState({ paused: !this.state.paused });
		this.pauseTimer();
	};

	collisionDetection = (item) => {
		if (
			this.state.relativePositionX > item.positionDonutX - 30 &&
			this.state.relativePositionX < item.positionDonutX + 30 &&
			this.state.positionY < item.positionDonutY + 30 &&
			this.state.positionY > item.positionDonutY - 30 && item.status === "ground"
		)
			item.status = "picked";
			
	};

	donutCount = () => {
		let donutCount = 0;
		// this.state.donutPopped.map((item) => {
		// 	if (item.status === "picked" && item.display === true) {
		// 		return donutCount = donutCount + 1
		// 		}
		// 	if (item.status === "picked" && item.display === false) {
		// 		return donutCount = donutCount
		// 		}
		// 	}
		// );
		this.state.donutPopped.map((item) => item.status === "picked" ? (donutCount = donutCount + 1) : (donutCount = donutCount));

		return donutCount;
	};


	throwingDonut = () => {
		this.setState({
			isThrowing: true,
			// donutPopped: {...this.state.donutPopped, picked: false}
		});
		let donutIndex = this.state.donutPopped.findIndex((item) => item.status === "picked")
		console.log(donutIndex)
		if (donutIndex < 0) donutIndex = 0;
		const { donutPopped } = this.state;
		donutPopped[donutIndex].status = donutStatus.THROWN;
		// donutPopped[donutIndex].display = false;
		this.setState({ donutPopped })
		// console.log("throw")
	};

	stopThrowingDonut = () => {
		this.setState({ isThrowing: false, displayDonut: false });
		// console.log("stopthrow")
	};

	gameLoop = () => {
		this.state.donutPopped.map((item) => this.collisionDetection(item));
		this.testLimitsOfMap();
	};


	render() {

		// Modal
		let params = new URLSearchParams(this.props.location.search);

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
				<Donut donutPopped={this.state.donutPopped} donutPosition={this.state.donutPosition} objDisplayBlock={objDisplayBlock} objDisplayNone={objDisplayNone}/>

				<Selma
					positionSelmaX={this.state.selmaPos.positionSelmaX}
					positionSelmaY={this.state.selmaPos.positionSelmaY}
					selmaPos={this.state.selmaPos}
				/>
				<Seymour
					positionSeymourX={this.state.seymourPos.positionSeymourX}
					positionSeymourY={this.state.seymourPos.positionSeymourY}
					seymourPos={this.state.seymourPos}
				/>
				<Bart 
					positionBartX={this.state.bartPos.positionBartX}
					positionBartY={this.state.bartPos.positionBartY}
				/>
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

				<Timer pauseGame={this.pauseGame} seconds={this.state.seconds} />

				{params.get("modal") && (
				<Modal
					modal={this.props.location.search}
					origin={null}
					resume={() => this.pauseGame()}
				/>)}
			</div>
		);
	}
}
export default Game;