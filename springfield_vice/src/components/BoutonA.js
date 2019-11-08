import React from "react";

function BoutonA(props) {
	const boutonA = {
		backgroundColor: "yellow",
		padding: "20px",
		borderRadius: "50%",
		color: "black",
		position: "absolute",
		bottom: "30px",
		right: "30px"
	};

	
	const buttonStyle = {
		display: !props.displayButtonA ? "block" : "none",
	}

	return (
		//console.log(this.props.donutCount)
		
		<div id="button_A" style={buttonStyle}>
			<button style={boutonA} onPointerDown={props.throwingDonut} onPointerUp={props.stopThrowingDonut}>
				A
			</button>
		</div>
	);
}

export default BoutonA;
