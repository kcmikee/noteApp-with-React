import React from 'react';

export default class ShowPage extends React.Component {
	render() {
		const {note} = this.props;

		return (<div className="container">
			<h1 className="center card-panel">{note.title}</h1>
			<div className="card-panel">
				{note.body}
			</div>
		</div>);
	}
}
