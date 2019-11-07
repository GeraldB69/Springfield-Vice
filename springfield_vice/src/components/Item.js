import React from "react";
import config from "./configSpringfieldVice.json";
import donut from "./img/donut.png";
import beer from "./img/biere.png";

function Donut(props) {
	const items = props.donutPopped.map((obj) => {
		const donutPickedStyle = obj.status === "picked" || obj.status === "thrown" ? "none" : "block";
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

function Beer(props) {
	const items = props.beerPopped.map((obj) => {
		const beerPickedStyle = obj.status === "picked" || obj.status === "thrown" ? "none" : "block";
		const beerZone = {
			display: props.beerStyle,
			backgroundColor: "transparent",
			borderRadius: "50%",
			width: "50px",
			height: "50px",
			position: "absolute",
			top: obj.positionBeerY,
			left: obj.positionBeerX + props.beerPosition,
			transform: "scale(" + obj.positionBeerY * config.item.scale + ")"
		};
		const beerStyle = {
			display: beerPickedStyle,
			position: "absolute",
			width: "80%",
			margin: "auto"
		};
		return (
			<div>
				<div style={beerZone}>
					<img src={beer} style={beerStyle} alt="beer" />
				</div>
			</div>
		);
	});

	return <div>{items}</div>;
}
export { Beer, Donut };
