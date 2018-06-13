import React, { Component } from "react";
import { Text, View, SectionList } from "react-native";
import HeadlineSlider from "../components/HeadlineSlider";
import NewsFeed from "../stubs/NewsFeed";
import NewsFeed2 from "../stubs/NewsFeed2";
import NewsItem from "../components/NewsItem";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Blockchain News",
    headerStyle: {
      backgroundColor: "#4A6FC6"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center"
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <SectionList
          renderSectionHeader={({ section: { title } }) =>
            this.renderSectionHeader(title)
          }
          sections={[{ title: "headlines", data: NewsFeed2.items }]}
          keyExtractor={item => item.guid}
          renderItem={item => <NewsItem data={item} />}
        />
      </View>
    );
  }

  renderSectionHeader(title) {
    return title === "headlines" ? <HeadlineSlider data={NewsFeed} /> : null;
  }
}
