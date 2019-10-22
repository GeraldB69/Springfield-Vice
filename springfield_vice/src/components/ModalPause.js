import React, { Component } from "react";

class ModalPause extends Component {
    constructor(props) {
        super(props)
        this.modal = this.modal.bind(this);
    }

    modal = ({ handleClose, show }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none'
        return (
            <div className={showHideClassName}>
                <section className='modal-main'>
                    <button onClick={this.handleClose}>
                    Close
                    </button>
                </section>
            </div>
            )
    }
}

export default ModalPause;