import React from "react";

export default class IndexPage extends React.Component{
  render(){
    const notes = Object.values(this.props.notes);
    return(
      <div>
        <h1> Notes</h1>
        <h2>{notes[0].title}</h2>
      </div>
    )
  }
}
