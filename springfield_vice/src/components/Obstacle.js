import React from "react";
import barrel from "./img/barrel_green_pixelized_posterized.png";
import fire from "./img/fire.gif";
import config from "./configSpringfieldVice.json";

function Obstacle(props) {
	const obstacles = props.obstaclePopped.map((obj) => {
		let image = barrel
		let filter = 'hue-rotate(0deg)';
		if (obj.status === 'killed') { image = fire; filter = 'hue-rotate(45deg)' }
		else if (obj.status === 'ground') { image = barrel; }


		const obstacleZone = {
			backgroundColor: "transparent",
			borderRadius: "50%",
			width: "50px",
			height: "50px",
			position: "absolute",
			top: obj.positionObstacleY,
			left: obj.positionObstacleX + props.obstaclePosition,
			transform: "scale(" + obj.positionObstacleY * config.obstacle.scale + ")",
			zIndex: obj.positionObstacleY
		};
		const obstacleStyle = {
			position: "absolute",
			width: "100%",
			margin: "auto",
			filter: filter
		};

		return (
			<div>
				<div style={obstacleZone}>
					<img src={image} style={obstacleStyle} alt="Barrel" />
				</div>
			</div>
		);
	});

	return <div>{obstacles}</div>;
}
export default Obstacle;
