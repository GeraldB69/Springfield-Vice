import React from 'react';
import config from "./configSpringfieldVice.json";

class MoveHomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render = () => {
        const buttonStyleMain = {
            position: "absolute",
            height: "50px",
            width: "50px",
            textAlign: "center",
            borderRadius: "50%",
            fontSize: "0.5em",
        }

        return (
            <div>
                
                <button onPointerDown={() => this.props.move(config.homerSpeed.x,-config.homerSpeed.y)} onPointerUp={this.props.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "70vh",
                            left: "10vw",
                        }}>up
                </button>
                <button onPointerDown={() => this.props.move(config.homerSpeed.x,0)} onPointerUp={this.props.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "75vh",
                            left: "15vw",
                        }}>right
                </button>
                <button onPointerDown={() => this.props.move(0,config.homerSpeed.y)} onPointerUp={this.props.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "80vh",
                            left: "10vw",
                        }}>down
                </button>
                <button onPointerDown={() => this.props.move(-config.homerSpeed.x,0)} onPointerUp={this.props.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "75vh",
                            left: "5vw",
                        }}>left
                </button>
                <button onPointerDown={() => this.props.move(config.homerSpeed.x,config.homerSpeed.y)} onPointerUp={this.props.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "85vh",
                            left: "15vw",
                        }}>right and down
                </button>
                <button onPointerDown={() => this.props.move(config.homerSpeed.x,-config.homerSpeed.y)} onPointerUp={this.props.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "65vh",
                            left: "15vw",
                        }}>right and up
                </button>
                <button onPointerDown={() => this.props.move(-config.homerSpeed.x,config.homerSpeed.y)} onPointerUp={this.props.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "85vh",
                            left: "5vw",
                        }}>left and down
                </button>
                <button onPointerDown={() => this.props.move(-config.homerSpeed.x,-config.homerSpeed.y)} onPointerUp={this.props.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "65vh",
                            left: "5vw",
                        }}>right and up
                </button>
            </div >
        )
    }
}

export default MoveHomer;