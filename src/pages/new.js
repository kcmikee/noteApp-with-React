import React from "react";
import {Link} from 'react-router-dom';

export default class NewPage extends React.Component {
	state = {
		note: {
			title: '',
			body: '',
			createdAt: undefined,
			updatedAt: undefined
		}
	}
	updateValue = (e) => {
		const {note} = this.state;

		this.setState({
			note: {
				...note,
				[e.target.name]: e.target.value
			}
		});
	}

	handleSave = async (e) => {
		e.preventDefault();

		const id = await this.props.onSave(this.state.note);
		this.props.history.replace(`/notes/${id}`);
	}
	render() {
		const {note} = this.state;

		return (<div className="container">
			<h1 className="center card-panel">New Note</h1>
			<form onSubmit={this.handleSave} className="card-panel">
				<div className="input-field">
					<input type="text" name="title" value={note.title} onChange={this.updateValue}/>
					<label for="name" className="active">
						Title
					</label>
				</div>
				<div className="input-field">
					<textarea type="text" name="body" className="materialize-textarea" value={note.body} onChange={this.updateValue}/>
					<label for="name" className="active">
						Write a note
					</label>
				</div>
				<div className="center">
					<button className="btn btn-floating btn-large green" style={{
							marginRight: 2 + 'em'
						}}>
						<i className="material-icons">add</i>
					</button>
					<button className="btn btn-floating btn-large red darken-3">
						<Link to="/">
							<i className="material-icons">cancel</i>
						</Link>
					</button>
				</div>
			</form>
		</div>);
	}
}
