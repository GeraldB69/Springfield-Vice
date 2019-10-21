import React, { Component } from "react";
import "./homer.css";
import config from "./configSpringfieldVice.json";

import homer from "./img/3.gif";
import donut from "./img/donut.png";
import ripchain from "./img/ripchain.png";

class Homer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ripchain: false,
			donut: true,
			throwing: false
		};
	}

	throwingDonut = () => {
		this.setState({ throwing: !this.state.throwing });
		//this.setState({ donut: false }); // A decommenter por faire disparaitre le donut lancé
	};

	render() {
		const scaledPosY = this.props.positionY * config.homerSize.scale;

		const positionDonutX = this.state.throwing
			? parseInt(this.props.positionX) + 845
			: parseInt(this.props.positionX) + 45;

		const displayDonut = this.state.donut ? "block" : "none";
		const displayRipchain = this.state.ripchain ? "block" : "none";
		console.log("coordonnées : ", this.props.positionX, " - ", this.props.positionY);

		const homerStyle = {
			backgroundColor: "transparent",
			padding: "0px",
			margin: "0px",
			height: config.homerSize.height,
			position: "absolute",
			left: `${this.props.positionX}px`,
			top: `${this.props.positionY}px`,
			transform: "scale(" + scaledPosY + ")"
		};

		const donutStyle = {
			display: displayDonut,
			width: config.donutSize.width,
			position: "absolute",
			left: positionDonutX + "px",
			top: 75 + parseInt(this.props.positionY) + "px"
		};

		const ripchainStyle = {
			display: displayRipchain,
			width: "60px",
			position: "absolute",
			left: positionDonutX + "px",
			top: 75 + parseInt(this.props.positionY) + "px",
			transform: "scale(" + scaledPosY + ")"
		};

		return (
			<div>
				<button onClick={this.throwingDonut}>DONUT</button>
				<img src={homer} style={homerStyle} alt="homer" />
				<img src={donut} style={donutStyle} alt="donut" />
				<img src={ripchain} style={ripchainStyle} alt="ripchain" />
			</div>
		);
	}
}

export default Homer;
