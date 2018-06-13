import React, { Component } from "react";
import { Text, View, WebView, ActivityIndicator } from "react-native";

import { windowWidth, windowHeight } from "../styles/metrics";
import styles from "./styles/ContainerStyles";

export default class NewsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const item = navigation.getParam("item", null);
    return {
      title: item ? item.title : ""
    };
  };

  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.showSpinner = this.showSpinner.bind(this);
    this.hideSpinner = this.hideSpinner.bind(this);
  }
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item", null);

    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={{
            position: "absolute",
            top: 40,
            borderRadius: 40,
            left: windowWidth / 2 - 16
          }}
          size="large"
        />
        {item ? (
          <WebView
            source={{ uri: item.link }}
            style={{ flex: 1, backgroundColor: "transparent" }}
            onLoadStart={this.showSpinner}
            onLoad={this.hideSpinner}
          />
        ) : null}
        {/* {this.state.loading && (
          <ActivityIndicator
            style={{
              backgroundColor: '#ffffff',
              position: "absolute",
              top: 40,
              borderRadius: 40,
              padding:10,
              left: windowWidth / 2 - 16
            }}
            size="large"
          />
        )} */}
      </View>
    );
  }

  showSpinner() {
    console.log("Show Spinner");
    this.setState({ loading: true });
  }

  hideSpinner() {
    console.log("Hide Spinner");
    this.setState({ loading: false });
  }
}
