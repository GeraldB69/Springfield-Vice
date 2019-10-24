import React, { Component } from "react";

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {

        const showStyleMain = {
            transform: 'translateY(0vh)',
            opacity: '0.9',
            background: 'white',
            border: '5px solid #ebdb34',
            transition: 'transform .8s',
            width: '90vw',
            marginLeft: '5vw',
            height: '70%',
            fontFamily: 'Mansalva',
            zindex: '999'
        }

        const hideStyleMain = {
            transform: 'translateY(-100vh)',
            opacity: '0.9',
            background: 'white',
            border: '5px solid #ebdb34',
            transition: 'transform .8s',
            width: '90vw',
            marginLeft: '5vw',
            height: '70%',
            fontFamily: 'Mansalva',
            zindex: '999'
        }

        const modalHeaderStyle = {
            background: '#263238',
            height: '75%',
            lineHeight: '40px',
            textAlign: 'center',
            color: "#ebdb34",
            top: "50%",
        }

        const modalButtonStyle = {
            border: "none",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            outline: "none",
            margin: "15px"
        }

        return (
            <div style={this.props.show ? showStyleMain: hideStyleMain}>
				<div className="modal-wrapper" style={modalHeaderStyle}>
                    <div className="modal-header">
                        <h3 style={{fontSize: '26pt'}}>PAUSE</h3>
                    </div>
                    <div className="modal-body">
                        <p>
                            Do you need a break or are you giving up?
                            {this.props.children}
                        </p>
                    </div>
                    <div> 
                        <button style={modalButtonStyle}>RESTART</button>
                        <button style={modalButtonStyle}>END GAME</button>
                        <button style={modalButtonStyle}>SETTINGS</button>
                        <button style={modalButtonStyle} onClick={() => {this.props.pauseGame(); this.props.hideModal()}}>RESUME</button>
                    </div>
                    <div></div>
                </div>
			</div>
		);
	}
}

export default Modal;