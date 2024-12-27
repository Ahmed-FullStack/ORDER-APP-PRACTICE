import React from 'react'

export default class Class extends React.Component {
	constructor() {
		super()
		this.state = { name: `ahmed` }
	}
	handleState() {
		this.setState(prev => ({ name: prev.name + `2` }))
	}
	render() {
		return (
			<>
				<h1 onClick={this.handleState.bind(this)}>{this.state.name}</h1>
				<h1>{this.props.now}</h1>
			</>
		)
	}
}
