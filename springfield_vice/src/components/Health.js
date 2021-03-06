import React, { Component } from "react";
import biere from "./img/duffpix_glow_pink.png";
import biere_no from "./img/duffpix_grayscale.png";

class Health extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	counterHealth = () => {

		let diff = this.props.beerCounter - this.props.obstCounter;

		//if (diff > 5) diff = 5;
		if (diff < 0) diff = 0;


		const styleDisplay = {
			width: "35px",
			height: "auto",
		};

		const styleDisplayNone = {
			display: "none",
			width: "30px",
			height: "auto"
		};

		const grappeBiereStyleDisplay = (
			<div>
				<img src={biere} alt="duff beer" style={styleDisplay} />
				<img src={biere_no} alt="empty beer" style={styleDisplayNone} />
			</div>
		);

		const grappeBiereStyleDisplayNone = (
			<div>
				<img src={biere} alt="duff beer" style={styleDisplayNone} />
				<img src={biere_no} alt="empty beer" style={styleDisplay} />
			</div>
		);

		const styleDivPourFlexBieres = {
			display: "flex",
			flexFlow: "row nowrap",
			justifyContent: "center",
			alignItems: "center",
		};

		switch (diff) {
			case 0:
				return (
					<div style={styleDivPourFlexBieres}>
						{grappeBiereStyleDisplayNone}
						{grappeBiereStyleDisplayNone}
						{grappeBiereStyleDisplayNone}
						{grappeBiereStyleDisplayNone}
						{grappeBiereStyleDisplayNone}
					</div>
				);
			case 1:
				return (
					<div style={styleDivPourFlexBieres}>
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplayNone}
						{grappeBiereStyleDisplayNone}
						{grappeBiereStyleDisplayNone}
						{grappeBiereStyleDisplayNone}
					</div>
				);
			case 2:
				return (
					<div style={styleDivPourFlexBieres}>
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplayNone}
						{grappeBiereStyleDisplayNone}
						{grappeBiereStyleDisplayNone}
					</div>
				);
			case 3:
				return (
					<div style={styleDivPourFlexBieres}>
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplayNone}
						{grappeBiereStyleDisplayNone}
					</div>
				);
			case 4:
				return (
					<div style={styleDivPourFlexBieres}>
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplayNone}
					</div>
				);
			case 5:
				return (
					<div style={styleDivPourFlexBieres}>
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
					</div>
				);
			default:
				return (
					<div style={styleDivPourFlexBieres}>
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
						{grappeBiereStyleDisplay}
					</div>
				);
		}
	};

	render() {
		const styleDivParentBieres = {
			width: "200px",
			height: "auto",
			// border: "2px solid red",
			// borderRadius: "10px",

			// backgroundColor: "rgb(255,255,255,0.6)",
			backgroundColor: "transparent",
			position: "absolute",
			left: "5px",
			top: "20px"
		};
		return (
			<div id="divHealth" style={styleDivParentBieres}>
				{this.counterHealth()}
			</div>
		);
	}
}

export default Health;
