import React, {Component} from 'react';
import './App.css';
import IndexPage from './pages/index';

class App extends Component {
  state = {
    notes:{
      1:{
        _id:1,
        title: "Hello world",
        body: "This is the body of my Note",
        updatedAt: new Date()
      }
    }
  }
  render(){
  return (
    <div className="App">
      <IndexPage notes = {this.state.notes}/>
    </div>
  );
}
}
export default App;
