import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Modal from '../components/Modal';
import config from "../components/configSpringfieldVice.json";
import "./start.css";

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      firstScreen: config.start.firstScreen
    })
  }

  startingGame = () => {
    this.setState({ 
		  firstScreen: false
    });
  }

  render() {
    // Modal
    let params = new URLSearchParams(this.props.location.search);

    return(
      <div id="init_div">
 	     <div className="start_div" style={{display: this.state.firstScreen ? "block" : "none" }}>
        <img className="left_img" src="logo512.png" alt="Springfield Vice" />
        <img className="home_screen" src='bart-ass.png' alt='Bart Simpsons' />
        <Link to={{ pathname: "/", search: "?modal=true" }}>
        <button className="right_doh">
          <img src='homer-doh.png' alt='Homer d`oh' />
          <span className="text">Options</span>
        </button>
        </Link>
        <Link to="/game">
        <button id="start" className="right_button" onClick={() => this.startingGame()}>
          <span className="text">Catch me...<br />if you can !</span>
          <span className="logo">&#9654;</span>
        </button>
        </Link>
      </div>

      {params.get("modal") && (
				<Modal 
          close={() => {this.props.history.push(this.props.location.pathname);}}
					modal={this.props.location.search}
          origin={"start"}
        />
      )}
			{/* <audio
					ref="audio_tag"
					src="http://www.allard-jacquin.com/simpsons.mp3"
					controls
					autoPlay
					type="audio/mp3"
				/> */}

      </div>
    )
  }
}

export default Start;
