import React, { Component } from "react";

class PadTouch extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<table>
					<tr>
						<td>&nbsp;</td>
						<td>
							<button onClick={this.props.toTheTop}> U </button>
						</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>
							<button onClick={this.props.toTheLeft}> L </button>
						</td>
						<td>&nbsp;</td>
						<td>
							<button onClick={this.props.toTheRight}> R</button>
						</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td>
							<button onClick={this.props.toTheBottom}> D </button>
						</td>
						<td></td>
					</tr>
				</table>
			</div>
		);
	}
}
export default PadTouch;
