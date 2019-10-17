import React, { Component } from "react";
import "./homer.css";

import homer from "./img/3.gif";
import donut from "./img/donut.png";

class Homer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionX: this.props.positionX,
			positionY: this.props.positionY,
			donut: true,
			throwing: false
		};
	}

	toTheRight = () => this.setState({ positionX: parseInt(this.state.positionX) + 35 });
	toTheLeft = () => this.setState({ positionX: parseInt(this.state.positionX) - 20 });
	toTheTop = () => this.setState({ positionY: parseInt(this.state.positionY) - 20 });
	toTheBottom = () => this.setState({ positionY: parseInt(this.state.positionY) + 20 });
	throwingDonut = () => {
		this.setState({ throwing: !this.state.throwing });
		//this.setState({ donut: false }); // A decommenter por faire disparaitre le donut lancé
	};

	render() {
		const heightLimit = 50; //<<------------------------------------- HAUTEUR LIMITE HAUTE DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionY < heightLimit) this.setState({ positionY: heightLimit });
		const scaledPosY = this.state.positionY * 0.008;

		const positionDonutX = this.state.throwing
			? parseInt(this.state.positionX) + 845
			: parseInt(this.state.positionX) + 45;

		const displayDonut = this.state.donut ? "block" : "none";
		console.log("coordonnées : ", this.state.positionX, " - ", this.state.positionY);

		const homerStyle = {
			backgroundColor: "transparent",
			padding: "0px",
			margin: "0px",
			height: "150px",
			position: "absolute",
			left: this.state.positionX + "px",
			top: this.state.positionY + "px",
			transition: "0.5s",

			transform: "scale(" + scaledPosY + ")"
		};

		const donutStyle = {
			display: displayDonut,
			width: "30px",
			position: "absolute",
			left: positionDonutX + "px",
			top: 75 + parseInt(this.state.positionY) + "px",
			transition: "0.5s"
		};

		return (
			<div>
				<button onClick={this.toTheLeft}> LEFT </button>
				<button onClick={this.toTheTop}> UP </button>
				<button onClick={this.toTheBottom}> DOWN </button>
				<button onClick={this.toTheRight}> RIGHT </button>
				<button onClick={this.throwingDonut}>DONUT</button>
				<div className="bandesNoirG" />
				<img src={homer} style={homerStyle} alt="homer" />
				<img src={donut} style={donutStyle} className="vibrate-1" alt="donut" />
				<div className="bandesNoirD" />
			</div>
		);
	}
}

export default Homer;
