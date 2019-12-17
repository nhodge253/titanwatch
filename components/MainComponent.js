import React, { Component } from "react";
import Leaders from "./LeadersComponent";
import { LEADERS } from "../shared/leaders";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: LEADERS
    };
  }
  render() {
    return <Leaders leaders={this.state.leaders} />;
  }
}

export default Main;
