import React, { Component } from "react";
import './modal.css';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {

  const showStyleMain = {
    transform: 'translateY(0vh)'
  }
  const hideStyleMain = {
    transform: 'translateY(-100vh)'
  }

    return (
      <div className="modal" style={this.props.show ? showStyleMain: hideStyleMain}>
        <div className="modal-wrapper">
          <div className="modal-header">
            {this.props.start ? <h3> </h3> : <h3>PAUSE</h3>}
          </div>
          <div className="modal-body">
            <p>
              Do you need a break or are you giving up?
              {this.props.children}
            </p>
          </div>
          <div>
            <div className='center'>
            {this.props.start ? null : <button>RESTART</button>}
              <button>RESTART</button>
              <button>END GAME</button>
              <button>SETTINGS</button>
              <button onClick={() => {this.props.pauseGame(); this.props.hideModal()}}>RESUME</button>
            </div>
          </div>
        </div>
      </div>
    );
	}
}

export default Modal;