import React, {Component} from "react";
import hum from "./sounds/hum.mp3";
import boire from "./sounds/boire.mp3";
import noproblemo from "./sounds/noproblemo.wav";
import etranglement from "./sounds/etranglement.mp3";
import suspens from "./sounds/suspens.mp3";
import rireBart from "./sounds/rireBart.wav";
import gunSound from "./sounds/gunSound.mp3";
import doh from "./sounds/doh.mp3";



class Sound extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                {this.props.donutSound === true && this.props.soundsPlay === true ? <audio
                    ref="audio_tag"
                    src={hum}
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""} 

                {this.props.obstSound === true && this.props.soundsPlay === true ? <audio
                    ref="audio_tag"
                    src={noproblemo}
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""}

                {this.props.beerSound === true && this.props.soundsPlay === true ? <audio
                    ref="audio_tag"
                    src={boire}
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""}

                {this.props.gunSound === true && this.props.soundsPlay === true ? <audio
                    ref="audio_tag"
                    src={gunSound}
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""}

                {this.props.opponentSound === true && this.props.soundsPlay === true ? <audio
                    ref="audio_tag"
                    src={doh}
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""} 
                
                {this.props.musicPlay === true && this.props.musicPlay === true ? <audio
                    ref="audio_tag"
					src="http://www.allard-jacquin.com/simpsons2.mp3"
					controls
					autoPlay
					type="audio/mp3"
				/> : ""}
                {this.props.bartSound === true && this.props.bartSound === true ? <audio
                    ref="audio_tag"
					src={rireBart}
					controls
					autoPlay
					type="audio/mp3"
				/> : ""}    
                {this.props.soundsPlayStrangling ? <audio
                    ref="audio_tag"
					src={etranglement}
					controls
					autoPlay
					type="audio/mp3"
				/> : ""}
                {this.props.soundsSuspens ? <audio
                    ref="audio_tag"
					src={suspens}
					controls
					autoPlay
					type="audio/mp3"
				/> : ""}  

            </div>
        )
    }


}




export default Sound;
