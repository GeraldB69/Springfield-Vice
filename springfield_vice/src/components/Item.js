import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import donut from "./img/donut.png";

class Donut extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		console.log("position du donnut", this.props.positionDonutY);

		const donutZone = {
			backgroundColor: "deeppink",
			borderRadius: "50%",
			width: "50px",
			height: "50px",
			position: "absolute",
			top: this.props.positionDonutY,
			left: (-this.props.positionX + 230) / config.background.defilement,
			transform: "scale(" + this.props.positionDonutY * config.item.scale + ")"
		};
		const donutStyle = {
			position: "absolute",
			width: "80%",
			margin: "auto"
		};
		return (
			<div>
				<div>
					<div style={donutZone}>
						<img src={donut} style={donutStyle} />
						{/* 						{parseInt(this.props.positionDonutY)}
						 */}{" "}
					</div>
				</div>
			</div>
		);
	}
}
export default Donut;
