import React, {Component} from "react";
import doubidoudou from "./sounds/doubidoudou.mp3";
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
                {this.props.donutSound === true && this.props.soundsPlay === true? <audio
                    ref="audio_tag"
                    src={doubidoudou}
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
                
            </div>
        )
    }


}




export default Sound;
