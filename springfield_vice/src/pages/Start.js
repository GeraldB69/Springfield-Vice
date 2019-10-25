import React, { Component } from "react";
import Game from './Game';
//import Modal from '../components/Modal';
import config from "../components/configSpringfieldVice.json";
import "./start.css";
import music from "../components/sounds/simpsons.mp3";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      firstScreen: config.start.firstScreen,
      modal: false
    })
    this.url = {music};
    this.audio = new Audio(this.url);
  }
  result = "";
  startingGame = () => {
    this.setState({firstScreen: false});
    this.result = <Game />;
  }
  callOptions() {
    // this.setState({modal: true});
    // this.result = <Modal />;
  }

  // componentDidMount = () => {
	// 	this.audio.play();
	// };

  render() {

    return(
      <div id="init_div">
        <div className="start_div show" style={this.state.firstScreen === true ? {display: 'block'} :  {display: 'none'}} >
          <img className="left_img" src="logo512.png" alt="Springfield Vice" />
          <img className="home_screen" src='bart-ass.png' alt='Bart Simpsons' />
          <button className="right_doh" onClick={() => this.callOptions()}>
            <img src='homer-doh.png' alt='Homer d`oh' />
            <span className="text">Options</span>
          </button>
          <button id="start" className="right_button" onClick={() => this.startingGame()}>
            <span className="text">Catch me...<br />if you can!</span>
            <span className="logo">&#9654;</span>
          </button>
        </div>
        <div className={this.state.firstScreen === false || this.state.modal === true ? 'game_div show' : 'game_div hide'} >
          {this.result}
        </div>
        <div>
          <audio ref="audio_tag" src="https://cf-media.sndcdn.com/3wlfMJhYArRz?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vM3dsZk1KaFlBclJ6IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNTcxOTkyNjQ0fX19XX0_&Signature=adlnju7mS1VfDIQUTr0EWVks68FxgbW-za8PfeqDKJ3HDaA4FpxPbOaoldQz3YNlu5rbgr-wsb80fcIhc1XmiUJ4NiyBMp7zp-Y-Q0LbKxv1GG51mSEyhT3usaJf36ypUJc-WaW06hSh9DK7z2qbuphajzSptJ5DdGGXp3qRGleVRvB7w74NxDzziSQCLtTg2VMcgeNjR3eMpk4Iza3UVY8s6Oy~iVM2HKYOyRWk8A2BB7mT6SsdW~kCLNKIbqyRlafg5r5IeYxO~5b3Xgim2mNUrnTidQ173F4yJzguoXvIu2nmH3DkHZxfGwjZkYXSdSg~dfdvbXqTYo5cfww8Uw__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ" controls autoPlay type="audio/mp3"/>  
        </div>
      </div>
    )
  }

}




export default Start;