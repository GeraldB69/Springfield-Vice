import React, { Component } from "react";
import Homer from "../components/Homer";
import config from "../components/configSpringfieldVice.json";
import JoyWrapper from "../components/Joystick";
import Timer from "../components/Timer";
import { Donut } from "../components/Item";
import { Beer } from "../components/Item";
import DonutCounter from "../components/DonutCounter";
import BoutonA from "../components/BoutonA";
import "./game.css";
import Modal from "../components/Modal";
import Health from "../components/Health";
import MovingObs from "../components/MovingObs";
import { getRandomArbitrary } from "../components/helpers";
import Obstacle from "../components/Obstacle";
import Bart from "../components/Bart";

const donutStatus = {
	GROUND: "ground",
	PICKED: "picked",
	THROWN: "thrown"
};
const beerStatus = {
	GROUND: "ground",
	PICKED: "picked"
};
const obstacleStatus = {
	GROUND: "ground",
	PICKED: "picked"
};

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionX: config.initialPosition.x,
			positionY: config.initialPosition.y,
			//positionObstacleY: getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit),
			//positionObstacleX: getRandomArbitrary(config.limits.leftLimit, config.limits.rightLimit),
			showModal: false,
			seconds: config.timer.seconds,
			paused: false,
			donutPosition: 0,
			obstaclePosition: 0,
			positionDecal: 0,
			positionDonutY: parseInt(getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)),
			catchDonut: false,
			moving: false,
			isBlocked: false,
			isThrowing: false,
			homerCollisionHue: 0,
			donutPopped: [
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					status: donutStatus.GROUND,
					display: true
				},
				{
					positionDonutX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionDonutY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					status: donutStatus.GROUND,
					display: true
				}
			],
			beerPopped: [
				{
					positionBeerX: parseInt(getRandomArbitrary(config.limits.leftLimit, 1000)),
					positionBeerY: parseInt(getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)),
					status: beerStatus.GROUND
				},
				{
					positionBeerX: parseInt(getRandomArbitrary(config.limits.leftLimit, 2000)),
					positionBeerY: parseInt(getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)),
					status: beerStatus.GROUND
				},
				{
					positionBeerX: parseInt(getRandomArbitrary(config.limits.leftLimit, 3000)),
					positionBeerY: parseInt(getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)),
					status: beerStatus.GROUND
				},
				{
					positionBeerX: parseInt(getRandomArbitrary(config.limits.leftLimit, 4000)),
					positionBeerY: parseInt(getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)),
					status: beerStatus.GROUND
				}
			],
			obstaclePopped: [
				{
					positionObstacleX: parseInt(getRandomArbitrary(config.limits.leftLimit + 100, 1000)),
					positionObstacleY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					status: obstacleStatus.GROUND
				},
				{
					positionObstacleX: parseInt(getRandomArbitrary(1000, 3000)),
					positionObstacleY: parseInt(
						getRandomArbitrary(config.limits.topLimit, config.limits.bottomLimit)
					),
					status: obstacleStatus.GROUND
				}
			],
			relativePositionX: config.initialPosition.x,
			isRunning: false,
			isHomerRunningLeft: false,
			opponentPos: {
				positionMovingObsX: 300,
				positionMovingObsY: 200,
				movX: [650, 650, 700, 700, 800, 800, 850, 850, 900, 900, 850, 850, 800, 800, 750, 750, 700, 700],
				movY: [250, 250, 250, 250, 300, 300, 300, 300, 250, 250, 300, 300, 250, 250, 200, 200, 230, 230]
			},
			// {
			// positionMovingObsX: 850,
			// positionMovingObsY: 400,
			// movX: [800, 800, 750, 750, 700, 700, 650, 650, 650, 650, 700, 700, 700, 700, 750, 750],
			// movY: [350, 350, 400, 400, 350, 350, 350, 350, 300, 300, 250, 250, 200, 200, 300, 300],
			// },
			bartPos: {
				positionBartX: 6000,
				positionBartY: 200,
				BartMovX: [
					6000,
					6000,
					6000,
					6020,
					6020,
					6050,
					6050,
					6100,
					6100,
					6150,
					6150,
					6200,
					6250,
					6250,
					6300,
					6300,
					6250,
					6250,
					6200,
					6200,
					6100,
					6050
				],
				BartMovY: [
					200,
					250,
					250,
					250,
					300,
					300,
					300,
					300,
					250,
					250,
					300,
					300,
					250,
					250,
					200,
					200,
					230,
					230,
					200,
					200,
					180,
					180
				]
			},
			globalPosition: 0,
			defilement: 0
		};

		this.stepX = 0;
		this.stepY = 0;
		this.tick = this.tick.bind(this);
		this.interval = undefined;
		this.displayBarrel = "none";
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
				defilement: this.state.defilement - this.stepX / config.background.defilement
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

	moveObs = () => {
		let i = 0;
		setInterval(() => {
			let newPosX = this.state.opponentPos.movX[i];
			let newPosY = this.state.opponentPos.movY[i];

			this.setState({
				opponentPos: {
					...this.state.opponentPos,
					positionMovingObsX: newPosX,
					positionMovingObsY: newPosY
				}
			});
			i++;
			if (i >= this.state.opponentPos.movX.length) {
				i = 0;
			}
		}, 1000);
	};

	moveBart = () => {
		let i = 0;
		setInterval(() => {
			let newPosX = this.state.bartPos.BartMovX[i];
			let newPosY = this.state.bartPos.BartMovY[i];
			this.setState({ bartPos: { ...this.state.bartPos, positionBartX: newPosX, positionBartY: newPosY } });
			i++;
			if (i >= this.state.bartPos.BartMovX.length) {
				i = 0;
			}
		}, 1000);
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
		this.interval = setInterval(() => {
			this.tick();
		}, 1000);
		setInterval(() => this.gameLoop(), 80);

		this.moveObs();
		this.moveBart();
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

	collisionDetection = (item) => {
		if (
			this.state.relativePositionX > item.positionDonutX - 30 &&
			this.state.relativePositionX < item.positionDonutX + 30 &&
			this.state.positionY < item.positionDonutY + 30 &&
			this.state.positionY > item.positionDonutY - 30 &&
			item.status === "ground"
		)
			item.status = "picked";
	};
	collisionDetectionBeer = (item) => {
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
		}
	};

	collisionDetectionObstacle = (item) => {
		if (
			this.state.relativePositionX > item.positionObstacleX - 10 &&
			this.state.relativePositionX < item.positionObstacleX + 10 &&
			this.state.positionY < item.positionObstacleY + 30 &&
			this.state.positionY > item.positionObstacleY - 30
		) {
			this.setState({
				isRunning: false,
				isBlocked: true,
				homerCollisionHue: this.state.homerCollisionHue + 30
			});
			item.status = "picked";
		}
	};

	donutCount = () => {
		let donutCount = 0;
		this.state.donutPopped.map((item) =>
			item.status === "picked" ? (donutCount = donutCount + 1) : (donutCount = donutCount)
		);

		return donutCount;
	};
	beerCount = () => {
		let beerCount = 0;
		this.state.beerPopped.map((item) =>
			item.status === "picked" ? (beerCount = beerCount + 1) : (beerCount = beerCount)
		);

		return beerCount;
	};
	obstacleCollisionCount = () => {
		let obstacleCount = 0;
		this.state.obstaclePopped.map((item) =>
			item.status === "picked" ? (obstacleCount = obstacleCount + 1) : (obstacleCount = obstacleCount)
		);

		return obstacleCount;
	};

	throwingDonut = () => {
		this.setState({
			isThrowing: true
			// donutPopped: {...this.state.donutPopped, picked: false}
		});
		let donutIndex = this.state.donutPopped.findIndex((item) => item.status === "picked");
		console.log(donutIndex);
		if (donutIndex < 0) donutIndex = 0;
		const { donutPopped } = this.state;
		donutPopped[donutIndex].status = donutStatus.THROWN;
		// donutPopped[donutIndex].display = false;
		this.setState({ donutPopped });
		// console.log("throw")
	};

	stopThrowingDonut = () => {
		this.setState({ isThrowing: false, displayDonut: false });
		// console.log("stopthrow")
	};

	gameLoop = () => {
		this.state.donutPopped.map((item) => this.collisionDetection(item));
		this.state.beerPopped.map((item) => this.collisionDetectionBeer(item));

		this.state.obstaclePopped.map((item) => {
			this.collisionDetectionObstacle(item);
		});
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

		return (
			<div className="game" style={bgStyle}>
				<Donut donutPopped={this.state.donutPopped} donutPosition={this.state.defilement} />
				<Beer beerPopped={this.state.beerPopped} beerPosition={this.state.defilement} />
				<Obstacle obstaclePopped={this.state.obstaclePopped} obstaclePosition={this.state.defilement} />
				<MovingObs
					positionMovingObsX={this.state.opponentPos.positionMovingObsX}
					positionMovingObsY={this.state.opponentPos.positionMovingObsY}
					defilement={this.state.defilement}
				/>
				<Bart
					positionBartX={this.state.bartPos.positionBartX + this.state.defilement}
					positionBartY={this.state.bartPos.positionBartY}
				/>
				<Homer
					positionX={this.state.positionX}
					positionY={this.state.positionY}
					isRunning={this.state.isRunning}
					isHomerRunningLeft={this.state.isHomerRunningLeft}
					donutCount={this.donutCount()}
					isThrowing={this.state.isThrowing}
					hue={this.state.homerCollisionHue}
				/>

				<DonutCounter donutCount={this.donutCount()} />
				<Health beerCounter={this.beerCount()} obstCounter={this.obstacleCollisionCount()} />

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
					<Modal modal={this.props.location.search} origin={null} resume={() => this.pauseGame()} />
				)}
			</div>
		);
	}
}
export default Game;
