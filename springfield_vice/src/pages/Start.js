import React, { Component } from "react";
import Game from './Game';
import config from "../components/configSpringfieldVice.json";
import "./start.css";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      firstScreen: config.start.firstScreen
    })
  }
  result = "";
  startingGame = () => {
    this.setState({firstScreen: false});
    this.result = <Game />;
  }

  render() {

    return(
      <div id="init_div">
        <div className="start_div show" style={this.state.firstScreen === true ? {display: 'block'} :  {display: 'none'}} >
          <img className="left_img" src="logo512.png" alt="Springfield Vice" />
          <img className="home_screen" src='bart-ass.png' alt='The Simpsons' />
          <button id="start" className="right_button" onClick={() => this.startingGame()}>
            <span className="text">Catch me...<br />if you can !</span>
            <span className="logo">&#9654;</span>
          </button>
        </div>
        <div className={this.state.firstScreen === false ? 'game_div show' : 'game_div hide'} >
          {this.result}
        </div>
      </div>
    )
  }

}


export default Start;