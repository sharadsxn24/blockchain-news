import React, { Component } from "react";
import { View, Image, FlatList } from "react-native";
import HeadlineItem from "./HeadlineItem";
import NewsFeed from "../stubs/NewsFeed";

export default class HeadlineSlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { items } = this.props.data;
    console.log(items);
    return (
      <View>
        <FlatList
          contentContainerStyle={{ padding: 20 }}
          ItemSeparatorComponent={() => (
            <View style={{ width: 10, height: "100%" }} />
          )}
          keyExtractor={item => "headline-" + item.guid.split("/").pop()}
          data={items}
          renderItem={item => <HeadlineItem data={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
