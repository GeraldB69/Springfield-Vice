import React, { Component } from "react";

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const timerStyle = {
			position: "absolute",
			right: "20px",
			top: "0px",
			color: "white",
			backgroundColor: "black",
			borderRadius: "15px",
			border: "solid 2px #ebdb34",
			padding: "10px",
			fontSize: "12pt",
			fontFamily: 'Mansalva',

		};

		const pauseStyle = {
			position: "absolute",
			right: "20px",
			top: "70px",
			fontFamily: 'Mansalva',
		};
		
		return (
			<div>
				<h3 style={timerStyle}>Timer: {this.props.seconds} seconds</h3>
				<button style={pauseStyle} onPointerDown={() => {this.props.pauseGame(); this.props.showModal()}}>
					PAUSE
				</button>
			</div>
		);
	}
}

export default Timer;
