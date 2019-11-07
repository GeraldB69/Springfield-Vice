import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import './seymour.css';

class Seymour extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const seymourZone = {
			width: "30px",
			height: "30px",
			backgroundColor: "",
			borderRadius: "50%",
			position: "absolute",
			left: this.props.positionSeymourX,
			top: this.props.positionSeymourY,
			transform: "scale(" + this.props.positionSeymourY * config.seymour.scale + ")",
			transition: '0.8s',
		};
		console.log(this.props.positionSeymourX, this.props.positionSeymourY)

		const styleSeymour = {
			width: "40px",
			height: "70px",
			position: "absolute",
			left: "-20px",
			top: "-20px",
			margin: 0,
			padding: 0,
			
        };

		return (
			<div>
				<div id="Seymour" style={seymourZone}>
					<div className="seymourWalk" style={styleSeymour} />
				</div>
			</div>
		);
	}
}

export default Seymour;
