import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {
constructor()
{
	super();
	this.state = {
	 homeLink: "Home"
	};
}
onHomeLinkChange(newName) {
	this.setState( {
		homeLink: newName
	});
}
onGreet() {
	alert("greet");
}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink={this.state.homeLink}/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home
							name={"Harsh"}
							age="21"
							greet={this.onGreet}
							linkChange={this.onHomeLinkChange.bind(this)}
							homeLink = {this.state.homeLink}
						/>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));
