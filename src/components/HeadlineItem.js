import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles/HeadlineItem";
import { SourceColors } from "../config/constants";

export default class HeadlineItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, thumbnail, source } = this.props.data.item;
    return (
      <View style={styles.item}>
        <Image
          source={{ uri: thumbnail }}
          resizeMode={"cover"}
          borderRadius={6}
          style={styles.itemImage}
        />
        <LinearGradient
          colors={["#ff000000", "#000000"]}
          style={styles.itemShade}
        />
        <View style={styles.itemContent}>
          <Text
            style={[
              styles.itemSource,
              {
                backgroundColor:
                  SourceColors[source.title.replace('.com News','').toLowerCase()] || "gray"
              }
            ]}
          >
            {source.title.replace('.com News','')}
          </Text>
          <Text style={styles.itemTitle}>{title}</Text>
        </View>
      </View>
    );
  }
}
