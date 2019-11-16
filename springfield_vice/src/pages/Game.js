import React, { Component } from "react";
import Homer from "../components/Homer";
import Grid from "../components/Grid";
import config from "../components/configSpringfieldVice.json";
import moveConfig from "../components/moveOpponents.json";
import JoyWrapper from "../components/Joystick";
import Timer from "../components/Timer";
import { Donut } from "../components/Item";
import { Beer } from "../components/Item";
import DonutCounter from "../components/DonutCounter";
import BoutonA from "../components/BoutonA";
import "./game.css";
import Modal from "../components/Modal";
import Selma from "../components/Selma";
import Health from "../components/Health";
import { getRandomArbitrary } from "../components/helpers";
import Obstacle from "../components/Obstacle";
import Bart from "../components/Bart";
import Seymour from "../components/Seymour";
import Milhouse from "../components/Milhouse";
import Grandpa from "../components/Grandpa";
import Sherri from "../components/Sherri";
// import pink_ground from "../components/img/pink_ground.png";
// import springfield80s from "../components/img/background_80s_repeat.png";
import Sound from "../components/Sound";

const donutStatus = {
	GROUND: "ground",
	PICKED: "picked",
	THROWN: "thrown"
};
const beerStatus = {
	GROUND: "ground",
	PICKED: "picked",
};
const obstacleStatus = {
	GROUND: "ground",
	PICKED: "picked",
	KILLED: "killed"
};
const selmaStatus = {
	KILLED: "killed",
	ALIVE: "alive"
};
const seymourStatus = {
	KILLED: "killed",
	ALIVE: "alive"
};
const milhouseStatus = {
	KILLED: "killed",
	ALIVE: "alive"
};
const grandpaStatus = {
	KILLED: "killed",
	ALIVE: "alive"
};
const sherriStatus = {
	KILLED: "killed",
	ALIVE: "alive"
};

const bartStatus = {
	KILLED: "killed",
	ALIVE: "alive", 
	HIT1: "hit1",
	HIT1BIS: "hit1bis",
	HIT2: "hit2",
	HIT2BIS: "hit2bis",
	GROUND: "ground",
	STRANGLED: "strangled",
};

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			soundsPlay: true,
			musicPlay: true,
			positionX: config.initialPosition.x,
			positionY: config.initialPosition.y,
			showModal: false,
			seconds: config.timer.seconds,
			paused: false,
			donutPosition: 0,
			obstaclePosition: 0,
			positionDecal: 0,
			catchDonut: false,
			moving: false,
			isBlocked: false,
			isThrowing: false,
			homerCollisionHue: 0,
			strangling: false,
			donutPopped: [
				{
					positionDonutX: parseInt(
						getRandomArbitrary(config.limits.leftLimit, 1000)
					),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.PICKED,
					display: true
				},
				{
					positionDonutX: parseInt(
						getRandomArbitrary(config.limits.leftLimit, 1000)
					),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.PICKED,
					display: true
				},
				{
					positionDonutX: parseInt(
						getRandomArbitrary(config.limits.leftLimit, 1000)
					),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.PICKED,
					display: true
				},
				{
					positionDonutX: parseInt(
						getRandomArbitrary(config.limits.leftLimit, 1000)
					),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.PICKED,
					display: true
				},
				{
					positionDonutX: parseInt(
						getRandomArbitrary(config.limits.leftLimit, 1000)
					),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.PICKED,
					display: true
				},
				{
					positionDonutX: parseInt(
						getRandomArbitrary(config.limits.leftLimit, 1000)
					),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(1000, 2000)),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(1000, 2000)),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(2000, 3000)),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(2000, 3000)),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(3000, 4000)),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(3000, 4000)),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(3000, 4000)),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(4000, 5000)),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(4500, 5500)),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(4500, 5500)),
					positionDonutY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: donutStatus.GROUND,
					display: true
				}
			],
			beerPopped: [

				{
					positionBeerX: parseInt(getRandomArbitrary(1000, 2000)),
					positionBeerY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: beerStatus.GROUND
				},
				{
					positionBeerX: parseInt(getRandomArbitrary(2000, 3000)),
					positionBeerY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: beerStatus.GROUND
				},
				{
					positionBeerX: parseInt(getRandomArbitrary(3000, 4000)),
					positionBeerY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: beerStatus.GROUND
				},
				{
					positionBeerX: parseInt(getRandomArbitrary(4000, 5000)),
					positionBeerY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: beerStatus.GROUND
				},
			],
			obstaclePopped: [
				{
					positionObstacleX: parseInt(
						getRandomArbitrary(config.limits.leftLimit + 100, 1000)
					),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(
						getRandomArbitrary(config.limits.leftLimit + 100, 1000)
					),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(1000, 2000)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(1000, 2000)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(2000, 3000)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(2000, 2500)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(3000, 3500)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(3000, 3500)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(3500, 4000)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(3500, 4000)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(4000, 4500)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(4000, 4500)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(4500, 5000)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(4500, 5000)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(4500, 5000)),
					positionObstacleY: parseInt(
						getRandomArbitrary(
							config.limits.topLimit,
							config.limits.bottomLimit
						)
					),
					status: obstacleStatus.GROUND
				}
			],

			selmaPos: {
				positionX: 1500,
				positionY: 180,
				SelmaMovX: moveConfig.selma.MovX,
				SelmaMovY: moveConfig.selma.MovY,
				status: selmaStatus.ALIVE
			},
			seymourPos: {
				positionX: 700,
				positionY: 250,
				SeymourMovX: moveConfig.seymour.MovX,
				SeymourMovY: moveConfig.seymour.MovY,
				status: seymourStatus.ALIVE

			},
			bartPos: {
				positionX: 5500,
				positionY: 200,
				BartMovX: moveConfig.bart.MovX,
				BartMovY: moveConfig.bart.MovY,
				status: bartStatus.ALIVE,
			},
			milhousePos: {
				positionX: 2500,
				positionY: 250,
				MilhouseMovX: moveConfig.milhouse.MovX,
				MilhouseMovY: moveConfig.milhouse.MovY,
				status: milhouseStatus.ALIVE

			},
			grandpaPos: {
				positionX: 3500,
				positionY: 200,
				GrandpaMovX: moveConfig.grandpa.MovX,
				GrandpaMovY: moveConfig.grandpa.MovY,
				status: grandpaStatus.ALIVE
			},
			sherriPos: {
				positionX: 4500,
				positionY: 180,
				SherriMovX: moveConfig.sherri.MovX,
				SherriMovY: moveConfig.sherri.MovY,
				status: sherriStatus.ALIVE
			},
			relativePositionX: config.initialPosition.x,
			isRunning: false,
			isHomerRunningLeft: false,
			beerSound: false,
			obstSound: false,
			donutSound: false,
			opponentSound: false,
			//			globalPosition: 0,
			//			defilement: 0,
			bartSound: false,
			bartSeBarreX: 400,
			bartSeBarreY: 250,
			gunSound: false,
			globalPosition: 0,
			defilement: 0,
			beerCountOrigin: 3
		};

		this.stepX = 0;
		this.stepY = 0;
		this.tick = this.tick.bind(this);
		this.interval = undefined;
		this.intObs = undefined;
		this.displayBarrel = "none";
	}







	//---------------------------------------








	testLimitsOfMap = () => {
		if (this.state.positionY < config.limits.topLimit)
			this.setState({ positionY: config.limits.topLimit });
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

		if (this.stepX < 0) {
			this.setState({ isHomerRunningLeft: true });
		} else if (this.stepX > 0) {
			this.setState({ isHomerRunningLeft: false });
		}
		// if (this.state.isRunning)
		// 	this.timeOut = setTimeout(() => this.move(), 10);

		if (this.state.isRunning === false) this.stopRunning();

		if (positionX !== config.limits.leftLimit)
			this.setState({
				relativePositionX: this.state.positionX - this.state.defilement,
				defilement:
					this.state.defilement - this.stepX / config.background.defilement
			});
	};

	startRunning = () => {
		this.setState({ isRunning: true });
		this.state.intervalHomer = setInterval(() => this.move(), 50);
	};
	stopRunning = () => {
		this.setState({ isRunning: false });
		clearInterval(this.state.intervalHomer);
	};


	moveSelma = () => {
		let i = 0;
		this.intSelma = setInterval(() => {
			let newPosX =
				this.state.selmaPos.positionX + this.state.selmaPos.SelmaMovX[i];
			let newPosY =
				this.state.selmaPos.positionY + this.state.selmaPos.SelmaMovY[i];
			this.setState({
				selmaPos: {
					...this.state.selmaPos,
					positionX: newPosX,
					positionY: newPosY
				}
			});
			i++;
			if (i >= this.state.selmaPos.SelmaMovX.length) {
				i = 0;
			}
		}, 300);
	};

	moveSeymour = () => {
		let i = 0;
		this.intSeymour = setInterval(() => {
			let newPosX =
				this.state.seymourPos.positionX +
				this.state.seymourPos.SeymourMovX[i];
			let newPosY =
				this.state.seymourPos.positionY +
				this.state.seymourPos.SeymourMovY[i];
			this.setState({
				seymourPos: {
					...this.state.seymourPos,
					positionX: newPosX,
					positionY: newPosY
				}
			});
			i++;
			if (i >= this.state.seymourPos.SeymourMovX.length) {
				i = 0;
			}
		}, 300);
	};


	moveBart = () => {
		let i = 0;
		this.intBart = setInterval(() => {
			let newPosX = this.state.bartPos.positionX + this.state.bartPos.BartMovX[i];
			let newPosY = this.state.bartPos.positionY + this.state.bartPos.BartMovY[i];
			this.setState({
				bartPos: {
					...this.state.bartPos,
					positionX: newPosX,
					positionY: newPosY
				}
			});
			i++;
			if (i >= this.state.bartPos.BartMovX.length) {
				i = 0;
			}
		}, 300);
	};

	moveMilhouse = () => {
		let i = 0;
		this.intMilhouse = setInterval(() => {
			let newPosX = this.state.milhousePos.positionX + this.state.milhousePos.MilhouseMovX[i];
			let newPosY = this.state.milhousePos.positionY + this.state.milhousePos.MilhouseMovY[i];
			this.setState({
				milhousePos: { ...this.state.milhousePos, positionX: newPosX, positionY: newPosY }
			});
			i++;
			if (i >= this.state.milhousePos.MilhouseMovX.length) {
				i = 0;
			}
		}, 1000);
	};

	moveGrandpa = () => {
		let i = 0;
		this.intGrandpa = setInterval(() => {
			let newPosX = this.state.grandpaPos.positionX + this.state.grandpaPos.GrandpaMovX[i];
			let newPosY = this.state.grandpaPos.positionY + this.state.grandpaPos.GrandpaMovY[i];
			this.setState({
				grandpaPos: { ...this.state.grandpaPos, positionX: newPosX, positionY: newPosY }
			});
			i++;
			if (i >= this.state.grandpaPos.GrandpaMovX.length) {
				i = 0;
			}
		}, 1000);
	};

	moveSherri = () => {
		let i = 0;
		this.intSherri = setInterval(() => {
			let newPosX =
				this.state.sherriPos.positionX + this.state.sherriPos.SherriMovX[i];
			let newPosY =
				this.state.sherriPos.positionY + this.state.sherriPos.SherriMovY[i];
			this.setState({
				sherriPos: {
					...this.state.sherriPos,
					positionX: newPosX,
					positionY: newPosY
				}
			});
			i++;
			if (i >= this.state.sherriPos.SherriMovX.length) {
				i = 0;
			}
		}, 300);
	};

	bartSeBarre = () => {
		this.setState({ bartSound: true });
		setTimeout(() => {
			this.setState({ bartSound: false });
		}, 3000);
		setTimeout(() => {
			this.setState({ bartSeBarreX: 15000 });
		}, 3000);
	};

	tick = () => {
		let { seconds } = this.state;
		this.setState({ seconds: seconds - 1 });
		// GAME_OVER
		if (seconds === 0) {
			this.setState({ seconds: 0 });
			clearInterval(this.interval);
		}
	};

	isGameOver = () => {
		const health = this.beerCount(this.state.beerCountOrigin) - this.obstacleCollisionCount();
		if (this.state.seconds === 0 || health <= 0) {
			// Si perdant :
			this.stopRunning();
			clearInterval(this.interval);
			setTimeout(() => {
				this.props.history.push("?modal=true&go=true");
				this.setState({ origin: "go_lost" });
				return;
			}, 2000);
		}
		if (this.beerCount(this.state.beerCountOrigin) === 100) {
			// Si gagnant :
			this.stopRunning();
			clearInterval(this.interval);
			this.props.history.push("?modal=true&go=true");
			this.setState({ origin: "go_win" });
			return;
		}
	};

	componentDidMount = () => {
		this.interval = setInterval(() => {
			this.tick();
			this.isGameOver();
		}, 1000);
		setInterval(() => this.gameLoop(), 80);
		this.moveSelma();
		this.moveBart();
		this.moveSeymour();
		this.moveMilhouse();
		this.moveGrandpa();
		this.moveSherri();
		this.bartSeBarre();
	};

	pauseTimer = () => {
		if (this.state.paused === false || this.state.seconds === 0) {
			clearInterval(this.interval);
			clearInterval(this.intSelma);
			clearInterval(this.intBart);
			clearInterval(this.intSeymour);
			clearInterval(this.intMilhouse);
			clearInterval(this.intGrandpa);
			clearInterval(this.intSherri);
		} else {
			this.componentDidMount();
		}
	};

	pauseGame = () => {
		this.setState({ paused: !this.state.paused });
		this.pauseTimer();
		document.getElementById("root").classList.remove("background_opacity")
	};

	collisionDetection = item => {
		if (
			this.state.relativePositionX > item.positionDonutX - 30 &&
			this.state.relativePositionX < item.positionDonutX + 30 &&
			this.state.positionY < item.positionDonutY + 30 &&
			this.state.positionY > item.positionDonutY - 30 &&
			item.status === "ground"
		) {
			item.status = "picked";
			this.setState({ donutSound: true });
			setTimeout(() => {
				this.setState({ donutSound: false });
			}, 500);
		}
	};
	collisionDetectionBeer = item => {
		if (
			this.state.relativePositionX > item.positionBeerX - 30 &&
			this.state.relativePositionX < item.positionBeerX + 30 &&
			this.state.positionY < item.positionBeerY + 30 &&
			this.state.positionY > item.positionBeerY - 30 &&
			item.status === "ground"
		) {
			if (this.state.homerCollisionHue > 0)
				this.setState({ homerCollisionHue: this.state.homerCollisionHue - 30 });
			item.status = "picked";
			this.setState({ beerSound: true });
			setTimeout(() => {
				this.setState({ beerSound: false });
			}, 800);
		}
	};
	collisionDetectionOpponent = item => {
		if (
			this.state.relativePositionX > item.positionX - 30 &&
			this.state.relativePositionX < item.positionX + 30 &&
			this.state.positionY < item.positionY + 30 &&
			this.state.positionY > item.positionY - 30 &&
			item.status === "alive"
		) {
			/*ici*/
			item.status = "killed";
			this.setState({ opponentSound: true, beerCountOrigin: this.state.beerCountOrigin - 1 });
			setTimeout(() => {
				this.setState({ opponentSound: false });
			}, 2000);
		}
	};

	collisionDetectionBart = item => {
		if (
			this.state.relativePositionX > item.positionX - 30 &&
			this.state.relativePositionX < item.positionX + 30 &&
			this.state.positionY < item.positionY + 30 &&
			this.state.positionY > item.positionY - 30 &&
			item.status === "ground"
		) {
			/*ici*/
			item.status = "killed";
			
			this.setState({ strangling: true, opponentSound: true, beerCountOrigin: this.state.beerCountOrigin - 1});
			setTimeout(() => {
				this.props.history.push("?modal=true&go=true");
				this.setState({ origin: "go_win", opponentSound: false });
			}, 2000);
		}
	};


	collisionDetectionObstacle = item => {
		if (
			this.state.relativePositionX > item.positionObstacleX - 10 &&
			this.state.relativePositionX < item.positionObstacleX + 10 &&
			this.state.positionY < item.positionObstacleY + 30 &&
			this.state.positionY > item.positionObstacleY - 30 &&
			item.status === 'ground'
		) {
			this.setState({
				isRunning: false,
				isBlocked: true,
				homerCollisionHue: this.state.homerCollisionHue + 30
			});
			item.status = "picked";
			this.setState({ obstSound: true });
			setTimeout(() => {
				this.setState({ obstSound: false });
			}, 2000);
		}
	};

	// collisionBart = item => {
	// 	//		console.log(item.positionBartX, this.state.relativePositionX + this.state.defilement)
	// 	if (
	// 		this.state.relativePositionX > item.positionBartX - 15 &&
	// 		this.state.relativePositionX < item.positionBartX + 20 &&
	// 		this.state.positionY < item.positionBartY + 40 &&
	// 		this.state.positionY > item.positionBartY - 60
	// 	) {
	// 		console.log("collision bart")
	// 		this.setState({strangling: true});
			
	// 		// this.props.history.push("?modal=true&go=true");
	// 		// this.setState({ origin: "go_win" });
	// 		this.stopRunning();
	// 		clearInterval(this.interval);
	// 		return;
	// 	}
	// };

	collisionDonutLauncher = () => {
		console.log("status bart =", this.state.bartPos.status)
		if (
			this.state.bartPos.positionY < this.state.positionY +20 &&
			this.state.bartPos.positionY > this.state.positionY - 50 &&
			this.state.bartPos.positionX < this.state.relativePositionX + 500 &&
			this.state.bartPos.positionX > this.state.relativePositionX &&
			this.state.bartPos.status === "alive" &&
			this.donutCount() > 0
		) {
			this.state.bartPos.status = "hit1";
			setTimeout(() => {
				this.state.bartPos.status = "hit1bis"
				}, 700);
			// clearInterval(this.intBart);
			console.log('hit 1 bart', this.state.bartPos.status)
		}
		else if (
			this.state.bartPos.positionY < this.state.positionY + 20 &&
			this.state.bartPos.positionY > this.state.positionY - 50 &&
			this.state.bartPos.positionX < this.state.relativePositionX + 500 &&
			this.state.bartPos.positionX > this.state.relativePositionX &&
			this.state.bartPos.status === "hit1bis" &&
			this.donutCount() > 0
		) {
			this.state.bartPos.status = "hit2";
			setTimeout(() => {
				this.state.bartPos.status = "hit2bis"
				}, 700);
			// clearInterval(this.intBart);
			console.log('hit 2 bart')
		}
		else if (
			this.state.bartPos.positionY < this.state.positionY + 20 &&
			this.state.bartPos.positionY > this.state.positionY - 50 &&
			this.state.bartPos.positionX < this.state.relativePositionX + 500 &&
			this.state.bartPos.positionX > this.state.relativePositionX &&
			this.state.bartPos.status === "hit2bis" &&
			this.donutCount() > 0
		) {
			this.state.bartPos.status = "ground";
			clearInterval(this.intBart);
			console.log('bart on the ground')
		}

		// else if (
		// 	this.state.bartPos.positionY < this.state.positionY + 20 &&
		// 	this.state.bartPos.positionY > this.state.positionY - 50 &&
		// 	this.state.bartPos.positionX < this.state.relativePositionX + 500 &&
		// 	this.state.bartPos.positionX > this.state.relativePositionX &&
		// 	this.state.bartPos.status === "ground" &&
		// 	this.donutCount() > 0
		// ) {
		// 	this.state.bartPos.status = "strangled";
		// 	clearInterval(this.intBart);
		// 	console.log('strangling')
		// }

		if (
			this.state.selmaPos.positionY < this.state.positionY + 20 &&
			this.state.selmaPos.positionY > this.state.positionY - 50 &&
			this.state.selmaPos.positionX < this.state.relativePositionX + 500 &&
			this.state.selmaPos.positionX > this.state.relativePositionX &&
			this.state.selmaPos.status === "alive" &&
			this.donutCount() > 0
		) {
			this.state.selmaPos.status = "killed";
			clearInterval(this.intSelma);
			console.log('Kill Selma')
		}

		if (
			this.state.seymourPos.positionY < this.state.positionY + 20 &&
			this.state.seymourPos.positionY > this.state.positionY - 50 &&
			this.state.seymourPos.positionX < this.state.relativePositionX + 500 &&
			this.state.seymourPos.positionX > this.state.relativePositionX &&
			this.state.seymourPos.status === "alive" &&
			this.donutCount() > 0
		) {
			this.state.seymourPos.status = "killed";
			clearInterval(this.intSeymour);
			console.log('Kill Seymour')

		}
		if (
			this.state.grandpaPos.positionY < this.state.positionY + 20 &&
			this.state.grandpaPos.positionY > this.state.positionY - 50 &&
			this.state.grandpaPos.positionX < this.state.relativePositionX + 500 &&
			this.state.grandpaPos.positionX > this.state.relativePositionX &&
			this.state.grandpaPos.status === "alive" &&
			this.donutCount() > 0
		) {
			this.state.grandpaPos.status = "killed";
			clearInterval(this.intGrandpa);
			console.log('Kill Grandpa')
		}

		if (
			this.state.milhousePos.positionY < this.state.positionY + 20 &&
			this.state.milhousePos.positionY > this.state.positionY - 50 &&
			this.state.milhousePos.positionX < this.state.relativePositionX + 500 &&
			this.state.milhousePos.positionX > this.state.relativePositionX &&
			this.state.milhousePos.status === "alive" &&
			this.donutCount() > 0
		) {
			this.state.milhousePos.status = "killed";
			clearInterval(this.intMilhouse);
			console.log('Kill Milhouse')
		}

		if (
			this.state.sherriPos.positionY < this.state.positionY + 20 &&
			this.state.sherriPos.positionY > this.state.positionY - 50 &&
			this.state.sherriPos.positionX < this.state.relativePositionX + 500 &&
			this.state.sherriPos.positionX > this.state.relativePositionX &&
			this.state.sherriPos.status === "alive" &&
			this.donutCount() > 0
		) {
			this.state.sherriPos.status = "killed";
			clearInterval(this.intSherri);
			console.log('Kill Sherri')
		}
		this.state.obstaclePopped.map(item => {
			//console.log(item.positionObstacleX)
			if (
				item.positionObstacleY < this.state.positionY + 15 &&
				item.positionObstacleY > this.state.positionY - 50 &&
				item.positionObstacleX < this.state.relativePositionX + 500 &&
				item.positionObstacleX > this.state.relativePositionX &&
				item.status === "ground" &&
				this.donutCount() > 0
			) {
				item.status = "killed";
				console.log('Kill barril')
			}
		});

	};

	donutCount = () => {
		let donutCount = 0;
		this.state.donutPopped.map(item =>
			item.status === "picked"
				? (donutCount = donutCount + 1)
				: (donutCount = donutCount + 0)
		);

		return donutCount;
	};
	beerCount = (beerCountOrigin) => {
		let beerCount = beerCountOrigin;
		this.state.beerPopped.map(item =>
			item.status === "picked"
				? (beerCount = beerCount + 1)
				: (beerCount = beerCount + 0)

		);


		return beerCount;
	};
	obstacleCollisionCount = () => {
		let obstacleCount = 0;
		this.state.obstaclePopped.map(item =>
			item.status === "picked"
				? (obstacleCount = obstacleCount + 1)
				: (obstacleCount = obstacleCount + 0)
		);


		return obstacleCount;
	};

	throwingDonut = () => {
		if (this.donutCount() > 0) {

			this.setState({ gunSound: true });
			setTimeout(() => {
				this.setState({ gunSound: false });
			}, 500);
		}
		this.setState({
			isThrowing: true
			// donutPopped: {...this.state.donutPopped, picked: false}
		});
		let donutIndex = this.state.donutPopped.findIndex(
			item => item.status === "picked"
		);
		if (donutIndex < 0) donutIndex = 0;
		const { donutPopped } = this.state;
		donutPopped[donutIndex].status = donutStatus.THROWN;
		// donutPopped[donutIndex].display = false;
		this.setState({ donutPopped });
		this.collisionDonutLauncher();
		// console.log("throw")
	};

	stopThrowingDonut = () => {
		this.setState({ isThrowing: false, displayDonut: false });
		// console.log("stopthrow")
	};

	gameLoop = () => {
		this.state.donutPopped.map(item => this.collisionDetection(item));
		this.state.beerPopped.map(item => this.collisionDetectionBeer(item));

		// this.collisionBart(this.state.bartPos);
		this.state.obstaclePopped.map(item => {
			this.collisionDetectionObstacle(item);
		});
		this.collisionDetectionOpponent(this.state.selmaPos)
		this.collisionDetectionOpponent(this.state.seymourPos)
		this.collisionDetectionOpponent(this.state.milhousePos)
		this.collisionDetectionOpponent(this.state.grandpaPos)
		this.collisionDetectionBart(this.state.bartPos)
		this.collisionDetectionOpponent(this.state.sherriPos)
		this.testLimitsOfMap();
	};

	hideButtons = () => {
		// MODAL
		clearInterval(this.interval);
		document.getElementById("root").className = "background_opacity";
	};


	toggleSounds = (stateSounds) => {
		this.setState({ soundsPlay: stateSounds });
	}

	toggleMusic = (stateMusic) => {
		this.setState({ musicPlay: stateMusic });
	}

	render() {
		// Modal
		let params = new URLSearchParams(this.props.location.search);

		const bgStyle = {
			backgroundPositionY: config.background.position,
			backgroundPositionX: -this.state.positionX / config.background.defilement,
			height: config.background.height
		};

		const topDivStyle = {
			position: "absolute",
			width: "100vw",
			height: "100px",
			background: "linear-gradient(rgba(0,0,0,0.7), transparent)",
			// background: "rgba(56,42,125,0.9)"
		}

		let diff1 = 3 + this.beerCount(this.state.beerCountOrigin) - this.obstacleCollisionCount();
		return (
			<div className="game" style={bgStyle}>

				<div style={topDivStyle}></div>
				<Grid
					isRunning={this.state.isRunning}
					isHomerRunningLeft={this.state.isHomerRunningLeft}
				/>

				<Selma
					positionSelmaX={this.state.selmaPos.positionX}
					positionSelmaY={this.state.selmaPos.positionY}
					defilement={this.state.defilement}
					status={this.state.selmaPos.status}
				/>
				<Seymour
					positionSeymourX={this.state.seymourPos.positionX}
					positionSeymourY={this.state.seymourPos.positionY}
					defilement={this.state.defilement}
					status={this.state.seymourPos.status}
				/>
				<Milhouse
					positionMilhouseX={this.state.milhousePos.positionX}
					positionMilhouseY={this.state.milhousePos.positionY}
					defilement={this.state.defilement}
					status={this.state.milhousePos.status}
				/>
				<Grandpa
					positionGrandpaX={this.state.grandpaPos.positionX}
					positionGrandpaY={this.state.grandpaPos.positionY}
					defilement={this.state.defilement}
					status={this.state.grandpaPos.status}
				/>
				<Sherri
					positionSherriX={this.state.sherriPos.positionX}
					positionSherriY={this.state.sherriPos.positionY}
					defilement={this.state.defilement}
					status={this.state.sherriPos.status}
				/>
				<Donut
					donutPopped={this.state.donutPopped}
					donutPosition={this.state.defilement}
				/>
				<Beer
					beerPopped={this.state.beerPopped}
					beerPosition={this.state.defilement}
				/>
				<div id="obstacle_full">
					<Obstacle
						obstaclePopped={this.state.obstaclePopped}
						obstaclePosition={this.state.defilement}
					/>
				</div>
				<Bart
					positionBartX={this.state.bartPos.positionX}
					positionBartY={this.state.bartPos.positionY}
					defilement={this.state.defilement}
					bartSeBarreX={this.state.bartSeBarreX}
					bartSeBarreY={this.state.bartSeBarreY}
					status={this.state.bartPos.status}
					strangling={this.state.strangling}
					positionStranglingX={this.state.positionX}
					positionStranglingY={this.state.positionY}
				/>

				<Homer
					positionX={this.state.positionX}
					positionY={this.state.positionY}
					isRunning={this.state.isRunning}
					isHomerRunningLeft={this.state.isHomerRunningLeft}
					donutCount={this.donutCount()}
					isThrowing={this.state.isThrowing}
					isDead={diff1}
					hue={this.state.homerCollisionHue}
					strangling={this.state.strangling}
				/>

				<DonutCounter donutCount={this.donutCount()} />
				<Health
					beerCounter={this.beerCount(this.state.beerCountOrigin)}
					obstCounter={this.obstacleCollisionCount()}
				/>

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
					stopThrowingDonut={this.stopThrowingDonut}
					displayButtonA={this.state.paused}
				/>

				<Timer pauseGame={this.pauseGame} seconds={this.state.seconds} />

				{params.get("modal") && (
					<Modal
						toggleMusic={this.toggleMusic}
						getStateMusic={this.state.musicPlay}
						toggleSounds={this.toggleSounds}
						getStateSounds={this.state.soundsPlay}
						close={() => {
							this.props.history.push(this.props.location.pathname);
						}}
						modal={this.props.location.search}
						origin={this.state.origin}
						resume={() => this.pauseGame()}
						hide={() => this.hideButtons()}
					/>
				)}
				{this.state.beerSound === true ? <Sound beerSound soundsPlay={this.state.soundsPlay} /> : ""}
				{this.state.obstSound === true ? <Sound obstSound soundsPlay={this.state.soundsPlay} /> : ""}
				{this.state.donutSound === true ? <Sound donutSound soundsPlay={this.state.soundsPlay} /> : ""}
				{this.state.opponentSound === true ? <Sound opponentSound soundsPlay={this.state.soundsPlay} /> : ""}
				{this.state.gunSound === true ? <Sound gunSound soundsPlay={this.state.soundsPlay} /> : ""}
				{this.state.musicPlay === true ? <Sound musicPlay={this.state.musicPlay} /> : ""}
				{this.state.bartSound === true ? <Sound bartSound soundsPlay={this.state.soundsPlay} /> : ""}
				{this.state.strangling === true ? <Sound soundsPlayStrangling={this.state.strangling} /> : ""}
				{this.state.bartPos.status === "bartStatus.HIT1BIS" ? <Sound soundsSuspens ={true} /> : ""}
			</div>
		);
	}
}

export default Game;
