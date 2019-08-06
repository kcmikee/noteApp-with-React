import React from "react";

import NoteList from '../components/notelist';
export default class IndexPage extends React.Component{
  render(){
    return(
      <div className="container">
      <div className="row">

        <div className="col s8">
          <ul className="collection">
            <li className="collection-item center blue white-text">
              <h4>Notes <i className="material-icons">book</i> </h4>
            </li>
            <li className="collection-item">
              <NoteList notes= {this.props.notes}/>
            </li>
          </ul>
        </div>

        <div className="col s4">
          <ul className="collection">
            <li className="collection-item center blue white-text">
              <h4>Notes <i className="material-icons">book</i> </h4>
            </li>
            <li className="collection-item">
              <NoteList notes= {this.props.notes}/>
            </li>
          </ul>
        </div>
      </div>
      </div>
    )
  }
}
