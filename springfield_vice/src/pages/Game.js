import React, { Component } from "react";
import Homer from "../components/Homer";
import config from "../components/configSpringfieldVice.json";
import JoyWrapper from "../components/Joystick";
import Timer from "../components/Timer";
import "./game.css";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionX: config.initialPosition.x,
			positionY: config.initialPosition.y
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

	render() {
		const bgStyle = {
			backgroundPositionY: config.background.position,
			backgroundPositionX: -this.state.positionX / config.background.defilement,
			height: config.background.height
		};
		return (
			<div className="game" style={bgStyle}>
				{this.testLimitsOfMap()}
				<Homer positionX={this.state.positionX} positionY={this.state.positionY} />

				<JoyWrapper
					move={this.move}
					stopMove={this.stopMove}
					toTheRight={this.toTheRight}
					toTheLeft={this.toTheLeft}
					toTheTop={this.toTheTop}
					toTheBottom={this.toTheBottom}
				/>

				<Timer />
				<ModalPause show={this.state.show} handleClose={this.hideModal} >
					<p>Modal</p>
					<p>Data</p>
				</ModalPause>
			</div>
		);
	}
}
export default Game;
