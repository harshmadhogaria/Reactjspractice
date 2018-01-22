import React from "react"

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.age,
      homeLink: props.homeLink
    };
  }
  onInputChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }
  onLinkChange() {
    console.log(this.state.homeLink);
    this.props.linkChange(this.state.homeLink);
  }
  onMakeOlder() {
    this.setState({
      age: Number(this.state.age) + 3
    });
    console.log(this.state.age);
  }
  render() {
    console.log(this.props);
    return(
      <div>
        <p>My name is {this.props.name}</p>
        <p>My age is {this.state.age}</p>
        <hr/>
        <button className="btn btn-primary" onClick={this.onMakeOlder.bind(this)}>Make me older</button>
        <br/>
        <button className="btn btn-primary" onClick={this.props.greet}>GREET</button>
        <input value={this.state.homeLink} onChange={this.onInputChange.bind(this)}/>
        <button className="btn btn-primary" onClick={this.onLinkChange.bind(this)}>Chnagelink</button>
      </div>
    );
  }
}

// Home.propTypes = {
//   name : React.propTypes.string,
//   age : React.propTypes.number,
//   user : React.propTypes.object
// };
