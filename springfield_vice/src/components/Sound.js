import React, {Component} from "react";
import hum from "./sounds/hum.mp3";
import boire from "./sounds/boire.mp3";
import noproblemo from "./sounds/noproblemo.wav";
import ouverture_biere from "./sounds/ouverture_biere.mp3";

class Sound extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
{/* 
                {this.props.donut ? <audio
                    ref="audio_tag"
                    src={hum}
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""} */}

                {this.props.obst ? <audio
                    ref="audio_tag"
                    src={noproblemo}
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""}

                {this.props.beer ? <audio
                    ref="audio_tag"
                    src={boire}
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""}
                
            </div>
        )
    }


}




export default Sound;
