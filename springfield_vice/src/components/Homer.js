import React, { Component } from "react";
import "./homer.css";

import homer from "./img/3.gif";
import donut from "./img/donut.png";
import ripchain from "./img/ripchain.png";

class Homer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positionX: this.props.positionX,
			positionY: this.props.positionY,
			ripchain: false,
			donut: true,
			throwing: false
		};
	}

	toTheRight = () => this.setState({ positionX: parseInt(this.state.positionX) + 35 });
	toTheLeft = () => this.setState({ positionX: parseInt(this.state.positionX) - 35 });
	toTheTop = () => this.setState({ positionY: parseInt(this.state.positionY) - 20 });
	toTheBottom = () => this.setState({ positionY: parseInt(this.state.positionY) + 20 });
	throwingDonut = () => {
		this.setState({ throwing: !this.state.throwing });
		//this.setState({ donut: false }); // A decommenter por faire disparaitre le donut lancé
	};

	render() {
		const topLimit = 110; //<<------------------------------------- HAUTEUR LIMITE HAUTE DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionY < topLimit) this.setState({ positionY: topLimit });

		const bottomLimit = 200; //<<------------------------------------- HAUTEUR LIMITE BAsse DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionY > bottomLimit) this.setState({ positionY: bottomLimit });

		const rigtLimit = 600; //<<------------------------------------- HAUTEUR LIMITE DROITE DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionX > rigtLimit) this.setState({ positionX: rigtLimit });

		const leftLimit = 100; //<<------------------------------------- HAUTEUR LIMITE DROITE DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionX < leftLimit) this.setState({ positionX: leftLimit });

		const scaledPosY = this.state.positionY * 0.008;

		const positionDonutX = this.state.throwing
			? parseInt(this.state.positionX) + 845
			: parseInt(this.state.positionX) + 45;

		const displayDonut = this.state.donut ? "block" : "none";
		const displayRipchain = this.state.ripchain ? "block" : "none";
		console.log("coordonnées : ", this.state.positionX, " - ", this.state.positionY);

		const homerStyle = {
			backgroundColor: "transparent",
			padding: "0px",
			margin: "0px",
			height: "150px",
			position: "absolute",
			left: `${this.state.positionX}px`,
			top: `${this.state.positionY}px`,
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

		const ripchainStyle = {
			display: displayRipchain,
			width: "60px",
			position: "absolute",
			left: positionDonutX + "px",
			top: 75 + parseInt(this.state.positionY) + "px",
			transition: "0.5s",
			transform: "scale(" + scaledPosY + ")"
		};

		return (
			<div>
				<table>
					<tr>
						<td>&nbsp;</td>
						<td>
							<button onClick={this.toTheTop}> U </button>
						</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>
							<button onClick={this.toTheLeft}> L </button>
						</td>
						<td>&nbsp;</td>
						<td>
							<button onClick={this.toTheRight}> R</button>
						</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td>
							<button onClick={this.toTheBottom}> D </button>
						</td>
						<td>&nbsp;</td>
					</tr>
				</table>




				<button onClick={this.throwingDonut}>DONUT</button>
				{/* <div className="bandesNoirG" /> */}
				<img src={homer} style={homerStyle} alt="homer" />
				<img src={donut} style={donutStyle} className="vibrate-1" alt="donut" />
				<img src={ripchain} style={ripchainStyle} alt="ripchain" />
				{/* <div className="bandesNoirD" /> */}
			</div>
		);
	}
}

export default Homer;
