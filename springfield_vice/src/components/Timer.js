import React, { Component } from "react";
import config from "./configSpringfieldVice.json";

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
                seconds: config.timer.seconds,
                paused: false,
        }
        this.tick = this.tick.bind(this);
        this.interval = undefined;
    }
    
    tick = () => {
        let {seconds} = this.state;
        this.setState({seconds: (seconds) -1})


    if (seconds === 0) {
        this.setState({seconds: 0});
        alert('GAME OVER');
        clearInterval(this.interval);
        }
        console.log(seconds)
    }

    componentDidMount = () => {
        this.interval = setInterval(() => this.tick(),
            1000);
    }

    pauseTimer = () => {
        if (this.state.paused === false) {
            clearInterval(this.interval);
        }
        else {
            this.componentDidMount();
            // insérer modal pause
        }
    }

    pauseGame = () => {
        this.setState({ paused: !this.state.paused });
        this.pauseTimer();
    }

    render() {

        const timerStyle= {
            position: "absolute",
            right: "20px",
            top: "0px",
            color: "white",
            backgroundColor: "black",
            borderRadius: "15px",
            border: "solid 2px white",
            padding: "10px",
            fontSize: "10pt"
        }

        const pauseStyle= {
            position: "absolute",
            right: "20px",
            top: "70px"
        }
        
        return (
            <div>
                <h3 style={timerStyle} >Timer: {this.state.seconds} seconds</h3>
                <button style={pauseStyle} onClick={this.pauseGame}>PAUSE</button>
            </div>
        )
    }
}



export default Timer;