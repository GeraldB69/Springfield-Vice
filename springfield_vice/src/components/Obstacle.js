import React, { Component } from "react";
import poubelles from "./img/poubelles.png";
import config from "./configSpringfieldVice.json";

function Obstacle(props) {
	const obstacles = props.obstaclePopped.map((obj) => {
		const obstacleZone = {
			backgroundColor: "transparent",
			borderRadius: "50%",
			width: "40px",
			height: "40px",
			position: "absolute",
			top: obj.positionObstacleY,
			left: obj.positionObstacleX + props.obstaclePosition,
			transform: "scale(" + obj.positionObstacleY * config.obstacle.scale + ")",
			zIndex: obj.positionObstacleY
		};
		const obstacleStyle = {
			position: "absolute",
			width: "80%",
			margin: "auto"
		};

		return (
			<div>
				<div style={obstacleZone}>
					<img src={poubelles} style={obstacleStyle} alt="Poubelle" />
				</div>
			</div>
		);
	});

	return <div>{obstacles}</div>;
}
export default Obstacle;