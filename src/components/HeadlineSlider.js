import React, { Component } from "react";
import { View, FlatList } from "react-native";
import HeadlineItem from "./HeadlineItem";

export default class HeadlineSlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;

    return (
      <View>
        <FlatList
          contentContainerStyle={{
            padding:20,
            marginTop:10
          }}
          ItemSeparatorComponent={() => (
            <View style={{ width: 10, height: "100%" }} />
          )}
          keyExtractor={item => "headline-" + item.guid.split("/").pop()}
          data={data}
          renderItem={item => <HeadlineItem data={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
