import React, {Component} from "react";
import hum from "./sounds/hum.mp3";
import ouverture_biere from "./sounds/ouverture_biere.mp3";

class Sound extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>

                {this.props.donuts ? <audio
                    ref="audio_tag"
                    src={hum}
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""}

                {this.props.obst ? <audio
                    ref="audio_tag"
                    src="http://www.allard-jacquin.com/simpsons.mp3"
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""}

                {this.props.beer ? <audio
                    ref="audio_tag"
                    src={ouverture_biere}
                    controls
                    autoPlay
                    type="audio/mp3"
                /> : ""}
                
            </div>
        )
    }


}




export default Sound;
