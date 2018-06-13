import React, { Component } from "react";
import AppNavigation from "../navigation/AppNavigation";

export default class Wrapper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AppNavigation />;
  }
}
