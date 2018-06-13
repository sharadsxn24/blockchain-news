import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import moment from "moment";

import { SourceColors } from "../config/constants";

import styles from "./styles/NewsItem";

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { data } = this.props;
    return (
      <View style={styles.itemRow}>
        <View style={styles.itemRowHeader}>
          <Text style={styles.itemPubDate}>
            {moment(data.item.pubDate).format("MMM Do, h:mm a")}
          </Text>
          <Text
            style={[
              styles.itemSource,
              {
                backgroundColor: SourceColors[data.item.source.title.toLowerCase()] || "gray"
              }
            ]}
          >
            {data.item.source.title}
          </Text>
        </View>
        <TouchableOpacity onPress={this.handleClick}>
          <View>
            <Text style={styles.itemTitle}>{data.item.title}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.badgeRow}>
          {data.item.categories.map((category, index) => (
            <Text key={index} style={styles.badge}>
              {category}
            </Text>
          ))}
        </View>
      </View>
    );
  }

  handleClick() {
    const { data, onClick } = this.props;
    onClick ? onClick(data.item) : null;
  }
}
