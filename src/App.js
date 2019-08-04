import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import IndexPage from './pages/index';
import ShowPage from './pages/show';
import Navbar from './components/navbar';
import './materialize.css';
import './material-icons.css';
import './MaterialIcons-Regular.eot';

class App extends Component {
  state = {
    notes:{
      1:{
        _id:1,
        title: "Hello world",
        body: "This is the body of my Note",
        updatedAt: new Date()
      },
      2:{
        _id:2,
        title: "Hello world again",
        body: "This is the body of my second Note. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        updatedAt: new Date()
      }
    }
    }
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={(props)=><IndexPage {...props} notes={ this.state.notes} />} />
      <Route exact path="/notes/:id" component={(props)=><ShowPage {...props} note={ this.state.notes[props.match.params.id]} />} />
    </div>
    </BrowserRouter>
  );
}
}
export default App;
