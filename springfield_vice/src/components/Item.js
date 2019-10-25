import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import donut from "./img/donut.png";

class Donut extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const donutZone = {
			display: this.props.donutStyle,
			backgroundColor: "transparent",
			borderRadius: "50%",
			width: "50px",
			height: "50px",
			position: "absolute",
			top: this.props.positionDonutY,
			left: this.props.positionDonutX,
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
						<img src={donut} style={donutStyle} alt="donut" />
					</div>
				</div>
			</div>
		);
	}
}
export default Donut;
