import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import "./bart.css";

class Bart extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
    const bartZone= {
			width: "30px",
			height: "30px",
			backgroundColor: "",
			borderRadius: "50%",
			position: "absolute",
			left: this.props.positionBartX,
			top: this.props.positionBartY,
			transform: "scale(" + this.props.positionBartY * config.bart.scale + ")",
			transition: '0.8s',
        };
        
        const styleBart = {
			width: "43px",
			height: "50px",
			position: "absolute",
			left: "-20px",
			top: "-20px",
			margin: 0,
            padding: 0,
        };
		
		return (
			<div>
				<div id="Bart" style={bartZone}>
					<div className="bartRun" style={styleBart} />
				</div>
			</div>
		);
	}
}

export default Bart;
