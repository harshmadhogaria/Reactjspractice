import React from "react"

export class Home extends React.Component {
  render() {
    console.log(this.props);
    let content = "";
    if(true)
      content = "HEY";
    return(
      <div>
        <p>In a new Component!</p>
        <p>My name is {this.props.name}</p>
        <p>My age is {this.props.age}</p>
        <p>User object => Nmae : {this.props.user.name}</p>
        <div>
          <h4>Hobbies</h4>
          <ul>
           {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
          </ul>
          <hr/>
            {this.props.children}
        </div>
      </div>
    );
  }
}

// Home.propTypes = {
//   name : React.propTypes.string,
//   age : React.propTypes.number,
//   user : React.propTypes.object
// };
