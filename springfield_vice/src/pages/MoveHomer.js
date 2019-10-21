import React from 'react';

class MoveHomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionX: 100,
            positionY: 100,
        }


    }

    move = (stepX,stepY) => {
        const { positionX, positionY} = this.state;
        this.setState({ 
            positionX: positionX+stepX, 
            positionY: positionY+stepY,
        });
        this.timeOut = setTimeout(() => this.move(stepX, stepY), 1); //1ms
    }

    stopMove = () => {
        clearTimeout(this.timeOut);
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
                
                <button onPointerDown={() => this.move(0,-5)} onPointerUp={this.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "70vh",
                            left: "10vw",
                        }}>up
                </button>
                <button onPointerDown={() => this.move(5,0)} onPointerUp={this.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "75vh",
                            left: "15vw",
                        }}>right
                </button>
                <button onPointerDown={() => this.move(0,5)} onPointerUp={this.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "80vh",
                            left: "10vw",
                        }}>down
                </button>
                <button onPointerDown={() => this.move(-5,0)} onPointerUp={this.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "75vh",
                            left: "5vw",
                        }}>left
                </button>
                <button onPointerDown={() => this.move(5,5)} onPointerUp={this.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "85vh",
                            left: "15vw",
                        }}>right and down
                </button>
                <button onPointerDown={() => this.move(5,-5)} onPointerUp={this.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "65vh",
                            left: "15vw",
                        }}>right and up
                </button>
                <button onPointerDown={() => this.move(-5,5)} onPointerUp={this.stopMove} style={
                        {
                            ...buttonStyleMain,
                            top: "85vh",
                            left: "5vw",
                        }}>left and down
                </button>
                <button onPointerDown={() => this.move(-5,-5)} onPointerUp={this.stopMove} style={
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