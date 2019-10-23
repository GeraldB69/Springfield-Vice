import React, { Component } from "react";

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div>
				<div className="modal-wrapper"
                    style={{
                        transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                        background: this.props.show ? "white" : "",
                        border: this.props.show ? "1px solid #d0cccc" : "",
                        transition: this.props.show ? "all .8s" : ""
                    }}>
                <div className="modal-header">
                    <h3>PAUSE</h3>
                </div>
                <div className="modal-body">
                    <p>
                        Paused game
                        {this.props.children}
                    </p>
                </div>
                <div>
                    <button>RESTART</button>
                    <button>SETTINGS</button>
                    <button onClick={() => {this.props.pauseGame(); this.props.hideModal()}}>RESUME</button>
                </div>
            </div>
			</div>
		);
	}
}

export default Modal;