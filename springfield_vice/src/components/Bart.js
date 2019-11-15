import React, { Component } from "react";
import config from "./configSpringfieldVice.json";
import "./bart.css";
import "./homer.css";

class Bart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeBart: "bartRun", 
      blinking: ""
    };
  }

  componentDidUpdate = () => {
    this.shootBart();
  }

  shootBart = () => {
    if (this.props.status === "hit1" && this.state.blinking === "") {
      this.setState({blinking: "blink .5s 3"});
      setTimeout(() => {
        console.log(this.state.blinking)
        this.setState({blinking: ""});
        }, 700);
    }
    else if (this.props.status === "hit2" && this.state.blinking === "") {
      this.setState({blinking: "blink .5s 3"});
      setTimeout(() => {
        console.log(this.state.blinking)
        this.setState({blinking: ""});
        }, 700);
    }
    else if (this.props.status === "ground" && this.state.animeBart === "bartRun") {
      this.setState({animeBart: "bartstand"});
    }
  }

  render() {
    let rotation = "hue-rotate(0deg)";
    // let blinking = "";
    let display = "block";
    let transition = "0s"
    let leftPosition = this.props.positionBartX + this.props.defilement;
    let topPosition = this.props.positionBartY;
    let widthDivBart = "55px";
    let heightDivBart = "50px";

    // let classBart = "bartRun";

    if (this.props.status === "hit1bis" && this.state.blinking === "") {
      // rotation = "rotate(90deg)";
      transition = "0.5s";
      leftPosition = this.props.positionBartX + this.props.defilement;
      topPosition = this.props.positionBartY;
      // console.log(this.state.blinking);
      // classBart = "";
      // setTimeout(() => { document.getElementById("Grandpa").setAttribute("style", "display:none") }, 3000);
    }

    if (this.props.status === "hit2bis" && this.state.blinking === "") {
      // rotation = "rotate(90deg)";
      transition = "0.5s";
      leftPosition = this.props.positionBartX + this.props.defilement;
      topPosition = this.props.positionBartY;
      // console.log(this.state.blinking);
      // classBart = "";
      // setTimeout(() => { document.getElementById("Grandpa").setAttribute("style", "display:none") }, 3000);
    }

    if (this.props.status === "ground") {
      rotation = "rotate(90deg)";
      transition = "0.5s";
      leftPosition = this.props.positionBartX + this.props.defilement;
      topPosition = this.props.positionBartY;
      widthDivBart = "50px";
      heightDivBart= "70px";
      // console.log(this.state.blinking);
      // classBart = "";
      // setTimeout(() => { document.getElementById("Grandpa").setAttribute("style", "display:none") }, 3000);
    }

    const bartZone = {
      width: widthDivBart,
      height: heightDivBart,
      backgroundColor: "",
      borderRadius: "50%",
      position: "absolute",
      left: this.props.positionBartX + this.props.defilement,
      top: this.props.positionBartY,
      transform: "scale(" + this.props.positionBartY * config.bart.scale + ")",
    };

    const styleBart = {
      width: widthDivBart,
      height: heightDivBart,
      position: "absolute",
      left: "-20px",
      top: "-20px",
      margin: 0,
      padding: 0,
      display: display,
      transform: rotation,
      animation: this.state.blinking,
      animationDelay: transition,
      transitionDelay: transition,
      transitionProperty: "all",
      transition: this.transitionDelay,
    };

    const bartSeBarreZone = {
      width: "30px",
      height: "30px",
      backgroundColor: "",
      borderRadius: "50%",
      position: "absolute",
      left: this.props.bartSeBarreX,
      top: this.props.bartSeBarreY,
      transform: "scale(" + this.props.bartSeBarreY * config.bart.scale + ")",
      transition: "10s"
    };

    const styleStrangling = {
      backgroundColor: "transparent",
      position:"absolute",
      transform:
        "scale(" + this.props.positionBartY * config.stranglingBart.scale + ")",
    }

    return (
      <div>
        <div id="Bart" style={bartZone}>
          {(this.props.strangling) ? <div style={styleStrangling} className="stranglingBart2"></div> : <div className={this.state.animeBart} style={styleBart} />}
        </div>
        <div id="Bart2" style={bartSeBarreZone}>
          <div className="bartSeBarre" style={styleBart} />
        </div>
      </div>
    );
  }
}

export default Bart;
