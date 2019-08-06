import React from "react";
import {Link} from 'react-router-dom';

export default class Notelist extends React.Component {
	renderNotes() {
		const notes = Object.values(this.props.notes);
		return notes.map((n) => <li className="collection-item">
			<Link to={`/notes/${n._id}`} className="collection-item">
				{n.title}
			</Link>

		</li>);
	}

	render() {
		return (<div>{this.renderNotes()}
		</div>)
	}
}
