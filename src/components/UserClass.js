import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 1,
    };

    console.log("In constructor!");
    console.log(props);
  }
  componentDidMount() {
    console.log("In componentDidMount");
  }
  componentDidCatch() {
    console.log("In componentDidCatch");
  }

  componentDidUpdate() {
    console.log("In componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("In componentUnmount!");
  }

  render() {
    console.log("component rendered");
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Location: {this.props.location}</h2>
        <h3>Count1: {this.state.count1}</h3>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase count1
        </button>
        <h3>Count2: {this.state.count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase count2
        </button>
      </div>
    );
  }
}

export default UserClass;
