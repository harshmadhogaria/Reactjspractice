import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header"
import { Home } from "./components/Home"

class App extends React.Component {
onGreet() {
	alert("greet");
}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header homeLink="Home"/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"Harsh"} age="21" greet={this.onGreet} />
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>, window.document.getElementById("app"));
