import React, { Component } from "react";
import Homer from "../components/Homer";
import PadTouch from "../components/PadTouch";
import config from "../components/configSpringfieldVice.json";
import MoveHomer from "../components/MoveHomer";

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

	move = (stepX,stepY) => {
        const { positionX, positionY} = this.state;
        this.setState({ 
            positionX: positionX+stepX, 
            positionY: positionY+stepY,
        });
        this.timeOut = setTimeout(() => this.move(stepX, stepY), 20);
	}
	
	stopMove = () => {
        clearTimeout(this.timeOut);
    }

	render() {
		return (
			<div>
				{this.testLimitsOfMap()}
				<MoveHomer move={this.move} stopMove={this.stopMove}/>
				<Homer positionX={this.state.positionX} positionY={this.state.positionY} />
			</div>
		);
	}
}
export default Game;
