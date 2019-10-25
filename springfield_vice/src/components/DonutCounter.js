import React, { Component } from "react";
import donut from "./img/donut.png";

class DonutCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const donutCounterImgStyle = {
			width: "30px"
		};
		const donutCounterContainer = {
			backgroundColor: "rgb(255,255,255,0.6)",
			position: "absolute",
			top: 0,
			right: "50%",
			borderRadius: "10px",
			padding: "5px"
		};
		const donutCountTextStyle = {
			fontSize: "20px",
			bottom: "10px"
		};

		return (
			//console.log(this.props.donutCount)
			<div>
				<div style={donutCounterContainer}>
					<img src={donut} style={donutCounterImgStyle} alt="" donut counter />
					<span style={donutCountTextStyle}>x {this.props.donutCount}</span>
				</div>
			</div>
		);
	}
}
export default DonutCounter;
