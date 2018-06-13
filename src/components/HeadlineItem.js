import React, { Component } from "react";
import { View, Image, Text, TouchableHighlight } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles/HeadlineItem";
import { SourceColors } from "../config/constants";

export default class HeadlineItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { data } = this.props;
    console.log('data.item.thumbnail',data.item.thumbnail);
    return (
      <View style={styles.item}>
        <TouchableHighlight onPress={this.handleClick} style={{flex:1}}>
          <View style={{flex:1}}>
            <Image
              source={{ uri: data.item.thumbnail }}
              resizeMode={"cover"}
              borderRadius={6}
              style={styles.itemImage}
            />
            <LinearGradient
              colors={["#ff000000", "#000000"]}
              style={styles.itemShade}
            />
            <View style={styles.itemContent}>
              <Text style={[styles.itemSource,{backgroundColor:SourceColors[data.item.source.title.replace(".com News", "").toLowerCase()] || "gray"}]}>
                {data.item.source.title.replace(".com News", "")}
              </Text>
              <Text style={styles.itemTitle}>{data.item.title}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  handleClick() {
    const { data, onClick } = this.props;
    onClick ? onClick(data.item) : null;
  }
}
