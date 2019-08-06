import React from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
	render() {
		return (<div className="navbar-fixed">
			<nav className="blue">
				<div className="container">
					<div className=" nav-wrapper ">
						<Link to="/">i-Note</Link>
						<ul id="nav-mobile" className="right">
							<li>
								<Link to="/new" className="btn green pulse">
									Create note
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>);
	}
}
