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
			donut: false,
			throwing: false
		};
	}

	throwingDonut = () => {
		this.setState({ throwing: !this.state.throwing });
		//this.setState({ donut: false }); // A decommenter por faire disparaitre le donut lancé
	};

	render() {
		const scaledPosY = this.props.positionY * config.homerSize.scale;

		const displayDonut = this.props.donut ? "block" : "none";
		const displayRipchain = this.state.ripchain ? "block" : "none";
		//console.log("coordonnées : ", this.props.positionX, " - ", this.props.positionY);

		const donutStyle = {
			display: displayDonut,
			width: config.donutSize.width,
			position: "absolute",
			left: "70%",
			bottom: "35px"
		};

		const ripchainStyle = {
			display: displayRipchain,
			width: "60px",
			position: "absolute",
			left: "50%",
			bottom: "0"
		};

		const homerZone = {
			width: "50px",
			height: "50px",
			backgroundColor: "transparent",
			left: `${this.props.positionX}px`,
			top: `${this.props.positionY}px`,
			transform: "scale(" + scaledPosY + ")",
			position: "absolute",
			borderRadius: "50%"
		};
		const homerStyle = {
			backgroundColor: "transparent",
			padding: "0px",
			height: config.homerSize.height,
			position: "absolute",
			left: "50%",
			margin: "0 -30px 0",
			bottom: "0"
		};
		return (
			<div>
				<button onClick={this.throwingDonut}>DONUT</button>
				<div style={homerZone}>
					<img src={homer} style={homerStyle} alt="homer" />
					<img src={donut} style={donutStyle} alt="donut" />
					<img src={ripchain} style={ripchainStyle} alt="ripchain" />
				</div>
			</div>
		);
	}
}

export default Homer;
