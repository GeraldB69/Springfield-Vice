import React from "react";
import donut from "./img/donut_shadow.png";

function DonutCounter(props) {
	const donutCounterImgStyle = {
		position: "absolute",
		width: "40px", 
		top: "8px"
	};
	const donutCounterContainer = {
		backgroundColor: "rgb(255,255,255,0.0)",
		position: "absolute",
		top: "75px",
		left: "12px",
		// right: "50%",
		borderRadius: "10px",
		padding: "5px", 
	};
	const donutCountTextStyle = {
		position: "absolute",
		left: "50px",
		fontSize: "45px",
		fontFamily: "VT323",
		fontWeight: "bold",
		color: "white",
		textShadow: "2px 2px 3px #FF00E6",
	};

	return (
		//console.log(this.props.donutCount)
		<div>
			<div style={donutCounterContainer}>
				<img src={donut} style={donutCounterImgStyle} alt="donut counter" />
				<span style={donutCountTextStyle}>x{props.donutCount}</span>
			</div>
		</div>
	);
}

export default DonutCounter;
