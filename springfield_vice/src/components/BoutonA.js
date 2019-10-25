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
	return (
		//console.log(this.props.donutCount)
		<div>
			<button style={boutonA} onClick={props.throwingDonut}>
				A
			</button>
		</div>
	);
}

export default BoutonA;
