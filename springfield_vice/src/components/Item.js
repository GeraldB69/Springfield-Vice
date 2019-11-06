import React from "react";
import config from "./configSpringfieldVice.json";
import donut from "./img/donut.png";
import biere from "./img/biere.png";

function Donut(props) {
	const items = props.donutPopped.map((obj) => {
		const donutPickedStyle = obj.picked ? "none" : "block";
		const donutZone = {
			display: props.donutStyle,
			backgroundColor: "transparent",
			borderRadius: "50%",
			width: "50px",
			height: "50px",
			position: "absolute",
			top: obj.positionDonutY,
			left: obj.positionDonutX + props.donutPosition,
			transform: "scale(" + obj.positionDonutY * config.item.scale + ")"
		};
		const donutStyle = {
			display: donutPickedStyle,
			position: "absolute",
			width: "80%",
			margin: "auto"
		};
		return (
			<div>
				<div style={donutZone}>
					<img src={donut} style={donutStyle} alt="donut" />
				</div>
			</div>
		);
	});

	return <div>{items}</div>;
}

function Biere(props) {
	const items = props.bierePopped.map((obj) => {
		const bierePickedStyle = obj.picked ? "none" : "block";
		const biereZone = {
			display: props.biereStyle,
			backgroundColor: "transparent",
			borderRadius: "50%",
			width: "50px",
			height: "50px",
			position: "absolute",
			top: obj.positionBiereY,
			left: obj.positionBiereX + props.bierePosition,
			transform: "scale(" + obj.positionBiereY * config.item.scale + ")"
		};
		const biereStyle = {
			display: bierePickedStyle,
			position: "absolute",
			width: "80%",
			margin: "auto"
		};
		return (
			<div>
				<div style={biereZone}>
					<img src={biere} style={biereStyle} alt="biere" />
				</div>
			</div>
		);
	});

	return <div>{items}</div>;
}
export { Biere, Donut };
