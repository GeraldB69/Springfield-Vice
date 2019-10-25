import React from "react";
import config from "./configSpringfieldVice.json";
import donut from "./img/donut.png";

function Donut(props) {
	const donutZone = {
		display: props.donutStyle,
		backgroundColor: "transparent",
		borderRadius: "50%",
		width: "50px",
		height: "50px",
		position: "absolute",
		top: props.positionDonutY,
		left: props.positionDonutX,
		transform: "scale(" + props.positionDonutY * config.item.scale + ")"
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
export default Donut;
