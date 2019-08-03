import React from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (<div className="navbar-fixed">
      <nav className="blue">
        <div className="container">
          <div className=" nav-wrapper ">
            <h1 className="brand-logo left">
              <Link to="/">MyNote</Link>
            </h1>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/new" className="btn">New Note</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>);
  }
}
