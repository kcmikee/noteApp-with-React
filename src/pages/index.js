import React from "react";

import NoteList from '../components/notelist';
export default class IndexPage extends React.Component{
  render(){
    return(
      <div className="container">
      <ul className="collection">
        <li className="collection-item center">
          <h4>Notes</h4>
        </li>
        <li className="collection-item">
          <NoteList notes= {this.props.notes}/>
        </li>
      </ul>
      </div>
    )
  }
}
