import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Wrapper from "./src/containers/Wrapper";

export default class App extends Component {
  render() {
    return <Wrapper />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
