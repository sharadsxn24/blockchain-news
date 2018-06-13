import React, { Component } from "react";
import { View, Text } from "react-native";
import moment from "moment";

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, categories, pubDate } = this.props.data.item;
    console.log(categories);
    return (
      <View
        style={{
          padding: 20,
          borderBottomColor: "#f0f0f0",
          borderBottomWidth: 5
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between",
            marginBottom: 10
          }}
        >
          <Text style={{ color: "#aaaaaa", fontSize: 12 }}>
            {moment(pubDate).format("MMM Do, h:mm a")}
          </Text>
          <Text
            style={{
              backgroundColor: "#EB443B",
              color: "#ffffff",
              fontSize: 12,
              paddingHorizontal: 5
            }}
          >
            CNN
          </Text>
        </View>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            flexWrap: "wrap",
            marginHorizontal: -2
          }}
        >
          {categories.map(c => {
            return (
              <Text
                style={{
                  color: "#aaaaaa",
                  paddingVertical: 2,
                  paddingHorizontal: 4,
                  marginHorizontal: 2,
                  fontSize: 11,
                  borderRadius: 4,
                  marginVertical: 2,
                  borderColor: "#f0f0f0",
                  borderWidth: 1
                }}
              >
                {c}
              </Text>
            );
          })}
        </View>
      </View>
    );
  }
}
