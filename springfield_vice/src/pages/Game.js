import React, { Component } from "react";
import Homer from "../components/Homer";
import PadTouch from "../components/PadTouch";
import JoyWrapper from "../components/Joystick"

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionX: 300,
			positionY: 200
		};
	}
	toTheRight = () => this.setState({ positionX: parseInt(this.state.positionX) + 5 });
	toTheLeft = () => this.setState({ positionX: parseInt(this.state.positionX) - 5 });
	toTheTop = () => this.setState({ positionY: parseInt(this.state.positionY) - 20 });
	toTheBottom = () => this.setState({ positionY: parseInt(this.state.positionY) + 20 });

	testLimit = () => {
		const topLimit = 110; //<<------------------------------------- HAUTEUR LIMITE HAUTE DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionY < topLimit) this.setState({ positionY: topLimit });

		const bottomLimit = 200; //<<------------------------------------- HAUTEUR LIMITE BAsse DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionY > bottomLimit) this.setState({ positionY: bottomLimit });

		const rigtLimit = 600; //<<------------------------------------- HAUTEUR LIMITE DROITE DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionX > rigtLimit) this.setState({ positionX: rigtLimit });

		const leftLimit = 100; //<<------------------------------------- HAUTEUR LIMITE DROITE DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionX < leftLimit) this.setState({ positionX: leftLimit });
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
				{this.testLimit}
				<Homer positionX={this.state.positionX} positionY={this.state.positionY} testLimit={" "} />
				<JoyWrapper 
					toTheRight={this.toTheRight}
					toTheLeft={this.toTheLeft}
					toTheTop={this.toTheTop}
					toTheBottom={this.toTheBottom}
				/>
			</div>
		);
	}
}
export default Game;
