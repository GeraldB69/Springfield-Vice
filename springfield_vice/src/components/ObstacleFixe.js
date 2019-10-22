import React, { Component } from "react";

class ObstacleFixe extends Component {
	constructor(props) {
		super(props);
		this.state = { };
	}


	render() {
		const topLimit = 110; //<<------------------------------------- HAUTEUR LIMITE HAUTE DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionY < topLimit) this.setState({ positionY: topLimit });

		const bottomLimit = 200; //<<------------------------------------- HAUTEUR LIMITE BAsse DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionY > bottomLimit) this.setState({ positionY: bottomLimit });

		const rigtLimit = 600; //<<------------------------------------- HAUTEUR LIMITE DROITE DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionX > rigtLimit) this.setState({ positionX: rigtLimit });

		const leftLimit = 100; //<<------------------------------------- HAUTEUR LIMITE DROITE DEPLACEMENT HOMER <<--------------------------
		if (this.state.positionX < leftLimit) this.setState({ positionX: leftLimit });


		const obstacleFixeStyle = {
			padding: "0px",
			margin: "0px",
			height: "auto",
			position: "absolute",
			left: `700px`,
			top: `250px`,
			width: "40px",
			height:"40px",
			borderRadius:"50%",
			backgroundColor:"red"

		};

		return (
			<div style={obstacleFixeStyle}>
			</div>
		);
	}
}

export default ObstacleFixe;
