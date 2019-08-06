import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";

import "./App.css";
import "./1.jpg";
import "./materialize.css";
import "./material-icons.css";
import "./MaterialIcons-Regular.eot";

import IndexPage from "./pages/index";
import ShowPage from "./pages/show";
import NewPage from "./pages/new";

import Navbar from "./components/navbar";
import DB from './db';

class App extends Component {
	state = {
		db: new DB(),
		notes: {}
	}

	async componentDidMount() {
		const notes = await this.state.db.getAllNotes();

		this.setState({notes});
	}

	handleSave = async (note) => {
		/*
const ids = Object.keys(this.state.notes);
		const id = Math.max(...ids) + 1;

		note['_id'] = id;*/
		let {id} = await this.state.db.createNote(note);

		const {notes} = this.state;

		this.setState({
			notes: {
				...notes,
				[id]: note
			}
		});
		return id;
	}
	render() {
		return (<BrowserRouter>
			<div className="App">
				<Navbar/>
				<Route exact="exact" path="/" component={props => (<IndexPage {...props} notes={this.state.notes}/>)}/>
				<Route exact="exact" path="/notes/:id" component={props => (<ShowPage {...props} note={this.state.notes[props.match.params.id]}/>)}/>
				<Route exact="exact" path="/new" component={props => (<NewPage {...props} onSave={this.handleSave}/>)}/>
			</div>
		</BrowserRouter>);
	}
}
export default App;
