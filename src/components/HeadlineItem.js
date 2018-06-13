import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { Demo1 } from "../images";
import { windowWidth } from "../styles/metrics";
import LinearGradient from "react-native-linear-gradient";

export default class HeadlineItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, thumbnail } = this.props.data.item;
    return (
      <View
        style={{
          borderRadius: 6,
          overflow: "hidden",
          position: "relative",
          width: windowWidth * 0.8,
          height: windowWidth * 0.8 * 0.7
        }}
      >
        <Image
          source={{ uri: thumbnail }}
          resizeMode={"cover"}
          borderRadius={6}
          style={{
            flex: 1,
            backgroundColor: "#dddddd"
          }}
        />
        {/* <LinearGradient
          locations={[0.5, 1]}
          colors={["#00000000", "#ff000000"]}
          style={{ position: "absolute", flex: 1 }}
        /> */}
        <Text
          style={{
            color: "white",
            position: "absolute",
            bottom: 20,
            left: 20,
            right: 20
          }}
        >
          {title}
        </Text>
      </View>
    );
  }
}
