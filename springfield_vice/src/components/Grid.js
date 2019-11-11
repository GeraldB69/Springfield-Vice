import React, { Component } from "react";
import "./Grid.css";
import config from "./configSpringfieldVice.json";
import wheel from "./img/wheel.png"


class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {

        const style = {
            position: "absolute",
            width: "100vw",
            backgroundColor: "white",
            opacity: "0.3"
        }

        const wheelcontainer = {
            position: "relative",
            top: "-650px",
            height: "1000px",
            width: "1000px",
            opacity: "0.3"
            // border: "3px solid yellow",
            // overflow: "hidden", 
        }
		
        const verticalstyle = {
            position: "absolute",
            top: "500px",
            left: "-580px",
            width: "2000px",
            height: "1px",
            backgroundColor: "white",
            overflow: "hidden",
        }
        
        const isHomerRunningLeft = this.props.isHomerRunningLeft ? "rotateLeft" : "rotateRight";
		const isRunning = this.props.isRunning ? isHomerRunningLeft : "";
        
        
		return (
			<div>
                {/* <img src={wheel} className="wheel"/> */}
                {/* <div className="wheel"></div> */}
                
                
                <div style={{...style, height: "0.5px",top:"190px"}} className="neon-effect"></div>
                <div style={{...style, height: "0.5px", top:"240px"}} className="neon-effect"></div>
                <div style={{...style, height: "0.5px", top:"290px"}} className="neon-effect"></div>
                <div style={{...style, height: "0.5px", top:"340px"}} className="neon-effect"></div>
                <div style={wheelcontainer} className={isRunning}>
                    <div style={{...verticalstyle, transform: "rotate(0deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(15deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(30deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(45deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(60deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(75deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(90deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(105deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(120deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(135deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(150deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(165deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(180deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(195deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(210deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(225deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(240deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(255deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(270deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(285deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(300deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(315deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(330deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(345deg)"}} className="neon-effect"></div>
                    <div style={{...verticalstyle, transform: "rotate(360deg)"}} className="neon-effect"></div>

                </div>
                <div className="spr"></div>
                
				
			</div>
		);
	}
}

export default Grid;
