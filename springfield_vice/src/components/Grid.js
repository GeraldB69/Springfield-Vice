import React, { Component } from "react";
import "./Grid.css";
// import config from "./configSpringfieldVice.json";
// import wheel from "./img/wheel.png"


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

        const style2 = {
            position: "relative",
            top: "175px",
            width: "100vw",
            // border: "2px solid yellow",
            height: "1000px", 
            overflow: "hidden",
        }

        const wheelcontainer = {
            position: "relative",
            top: "-850px",
            height: "1000px",
            width: "1000px",
            opacity: "0.3",
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
        }
        // const rotate = () => {
        //     document.getElementById('divToRotate').style.animation = "rotatingRight 8s linear infinite"
        // }

        // const rotateRight = {
        //     transformOrigin: "50% 50%",
        //     animationName: "rotatingRight",
        //     animationDuration: "8s",
        //     animationTimingFunction: "linear",
        //     animationIterationCount: "infinite",
        // }

        
        
        const isHomerRunningLeft = this.props.isHomerRunningLeft ? "rotateLeft" : "rotateRight";
		const isRunning = this.props.isRunning ? isHomerRunningLeft : "";
        
        
		return (
			<div>
                {/* <img src={wheel} className="wheel"/> */}
                {/* <div className="wheel"></div> */}
                
                
                <div style={{...style, height: "0.5px",top:"190px"}}></div>
                <div style={{...style, height: "0.5px", top:"240px"}}></div>
                <div style={{...style, height: "0.5px", top:"290px"}}></div>
                <div style={{...style, height: "0.5px", top:"340px"}}></div>
                <div style={style2}>
                    <div id="divToRotate" style={wheelcontainer} className={isRunning}>
                        <div style={{...verticalstyle, transform: "rotate(0deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(15deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(30deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(45deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(60deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(75deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(90deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(105deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(120deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(135deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(150deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(165deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(180deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(195deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(210deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(225deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(240deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(255deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(270deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(285deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(300deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(315deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(330deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(345deg)"}}></div>
                        <div style={{...verticalstyle, transform: "rotate(360deg)"}}></div>

                    </div>
                </div>
                {/* <div className="spr"></div> */}
                
				
			</div>
		);
	}
}

export default Grid;
