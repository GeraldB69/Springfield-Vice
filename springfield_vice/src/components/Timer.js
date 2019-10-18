import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
                seconds: 3,
            
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

    component

    render() {
        
        return (
            <div>
                <h3>Timer: {this.state.seconds} seconds</h3>
                <button onClick={this.props}>PAUSE</button>
                
            </div>
        )
    }
}



export default Timer;