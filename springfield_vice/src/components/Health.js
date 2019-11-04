import React, { Component } from "react";
import duffPleine from './img/duffPleine.jpg'
import { isAbsolute } from "path";

class Health extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        
        return (
           {collisionBiere === true && <img src={duffPleine}/>}
        )
    }
}

export default Health;
