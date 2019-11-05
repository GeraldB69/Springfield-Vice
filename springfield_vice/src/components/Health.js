import React, { Component } from "react";
import duffPleine from './img/duffPleine.jpg'

class Health extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let count = 0;
        if(this.props.collisionBiere ===  true){
            count++;
        };
        if(this.props.collisionObstacle === true){
            count--;
        }
        console.log(count);
        const styleBiere = { width: "60px",
                             height: "auto"}
        const biere= <img src={duffPleine} alt="duff beer" style={styleBiere}/>;
        switch(count){
          case 10:
            return (<div>
                    {biere},
                    {biere},
                    {biere},
                    {biere},
                    {biere}
                    </div>);
          case 8:
            return (<div>{biere},
                    {biere},
                    {biere},
                    {biere}
                    </div>);
          case 6:
            return (<div>{biere},
                    {biere},
                    {biere}
                    </div>);
          case 4:
            return (<div>{biere},
                    {biere}
                    </div>);
          case 1:
          case 2:
            return (<div>{biere}</div>);
          default:
            return ("")
        }
      
    }
}

export default Health;
