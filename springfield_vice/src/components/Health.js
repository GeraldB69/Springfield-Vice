import React, { Component } from "react";
import duff from './img/duff.jpg';

class Health extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        const {compteurBiere, compteurObst} = this.props;
        console.log({compteurBiere})
        let diff = this.props.compteurBiere - this.props.compteurObst;
        return (
        <p>{compteurBiere},{compteurObst}, result : {diff}</p>
        
        )
    }
}

export default Health;
