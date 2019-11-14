import React, { Component } from "react";
import { Link } from 'react-router-dom';
import disquette from "./img/disquette.png"

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const timerStyle = {
			position: "absolute",
			top: "-30px",
			fontSize: "36px",
			fontFamily: "VT323",
			fontWeight: "bold",
			color: "white",
			textShadow: "2px 2px 3px #FF00E6",
		};

		const pauseStyle = {
			position: "absolute",
			width: "50px",
			height: "50px",
			right: "10px",
			top: "0px",
			fontFamily: "VT323",
			fontSize: "25px",
			border: "none",
			borderRadius: "0px",
			backgroundImage: `url(${disquette})`,
			backgroundColor: "transparent",
			backgroundSize: "cover",
			outline: "none", 
			boxShadow: "1px 1px 5px #000000 "
		};

		const timerContainer = {
			position: "absolute",
			// border: "2px solid red",
			height: "50px",
			width: "100vw",
			top: "0px",
			right: "100px",
			display: "flex",
			justifyContent: "flex-end",
		};
		
		return (
			<div>
				<div style={timerContainer}>
					<h3 style={timerStyle}>Time : {this.props.seconds}</h3>

				</div>
					<Link to={{ pathname: "/game", search: "?modal=true" }}>
						<button style={pauseStyle}  onPointerDown={() => {
							this.props.pauseGame(); 
						}}>
							
						</button>
					</Link>
			</div>
		);
	}
}

export default Timer;
