import React from "react";
import donut from "./img/donutblue_pxl.png"

function BoutonA(props) {
	const boutonA = {
		backgroundColor: "transparent",
		border: "none",
		padding: "20px",
		borderRadius: "50%",
		color: "black",
		position: "absolute",
		bottom: "30px",
		right: "30px", 
		fontSize: "20px", 
		width: "70px",
		height: "70px",
		outline: "none", 
		zIndex: "500"
	};

	// const pstyle ={
	// 	position: "absolute",
	// 	top: "0px",
	// 	left: "15px"
	// }
	const donutstyle ={
		position: "absolute",
		top: "-2px",
		left: "-2px",
		width: "70px",
		height: "70px",
	}

	
	const buttonStyle = {
		display: !props.displayButtonA ? "block" : "none",
	}

	return (
		//console.log(this.props.donutCount)
		
		<div id="button_A" style={buttonStyle}>
			<button style={boutonA} onPointerDown={props.throwingDonut} onPointerUp={props.stopThrowingDonut}>
				<img src={donut} style={donutstyle}/>
				{/* <p style={pstyle}>shoot</p> */}
			</button>
		</div>
	);
}

export default BoutonA;
