import React from "react"

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.age
    };
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
      </div>
    );
  }
}

// Home.propTypes = {
//   name : React.propTypes.string,
//   age : React.propTypes.number,
//   user : React.propTypes.object
// };
