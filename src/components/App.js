import React, { Component } from "react";
import Search from "./Search/Search"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    }
}

  render() {
    return (
      <div >
        <Search
        />
      </div>
    );
  }
}
