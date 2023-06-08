import React from "react";
import axios from "axios";

import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: "",
    };
    this.fetchAdvice = this.fetchAdvice.bind(this);
  }
  componentDidMount() {
    this.fetchAdvice();
  }

  async fetchAdvice() {
    let url = "https://api.adviceslip.com/advice";
    try {
      let response = await axios.get(url);
      let { advice } = response.data.slip;
      this.setState({ advice: advice });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
