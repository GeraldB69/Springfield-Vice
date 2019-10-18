import React, { Component } from "react";
import Homer from "../components/Homer";
import PadTouch from "../components/PadTouch";
import config from "../components/configSpringfieldVice.json";

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionX: config.initialPosition.x,
			positionY: config.initialPosition.y
		};
	}
	
	toTheRight = () => this.setState({ positionX: parseInt(this.state.positionX) + config.homerSpeed.x });
	toTheLeft = () => this.setState({ positionX: parseInt(this.state.positionX) - config.homerSpeed.x });
	toTheTop = () => this.setState({ positionY: parseInt(this.state.positionY) - config.homerSpeed.y });
	toTheBottom = () => this.setState({ positionY: parseInt(this.state.positionY) + config.homerSpeed.y });
	testLimitsOfMap = () => {
		if (this.state.positionY < config.limits.topLimit) this.setState({ positionY: config.limits.topLimit });
		else if (this.state.positionY > config.limits.bottomLimit)
			this.setState({ positionY: config.limits.bottomLimit });
		else if (this.state.positionX > config.limits.rightLimit)
			this.setState({ positionX: config.limits.rightLimit });
		else if (this.state.positionX < config.limits.leftLimit)
			this.setState({ positionX: config.limits.leftLimit });
	};

	render() {
		return (
			<div>
				<PadTouch
					toTheRight={this.toTheRight}
					toTheLeft={this.toTheLeft}
					toTheTop={this.toTheTop}
					toTheBottom={this.toTheBottom}
				/>

				{this.testLimitsOfMap()}

				<Homer positionX={this.state.positionX} positionY={this.state.positionY} />
			</div>
		);
	}
}
export default Game;
