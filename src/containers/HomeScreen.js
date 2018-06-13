import React, { Component } from "react";
import { Text, View, SectionList } from "react-native";
import HeadlineSlider from "../components/HeadlineSlider";
import NewsItem from "../components/NewsItem";
import { fetchNewsFeed, fetchHeadlines } from "../services/feed";

import styles from "./styles/ContainerStyles";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Blockchain News"
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.handleNewsItemClick = this.handleNewsItemClick.bind(this);
  }

  componentWillMount() {
    fetchHeadlines().then(headlines => {
      console.log("headlines", headlines);
      this.setState({ headlines });
    });
    fetchNewsFeed().then(feed => {
      console.log("feed", feed);
      this.setState({ feed });
    });
  }

  handleNewsItemClick(item) {
    this.props.navigation.navigate("News", { item: item });
  }

  render() {
    const { feed, headlines } = this.state;
    return (
      <View style={styles.container}>
        {feed ? (
          <SectionList
            renderSectionHeader={({ section: { title } }) =>
              this.renderSectionHeader(title)
            }
            sections={[{ title: "headlines", data: feed }]}
            keyExtractor={item => "feed-" + item.guid}
            renderItem={item => (
              <NewsItem data={item} onClick={this.handleNewsItemClick} />
            )}
          />
        ) : null}
      </View>
    );
  }

  renderSectionHeader(title) {
    const { headlines } = this.state;
    return title === "headlines" && headlines ? (
      <HeadlineSlider data={headlines} onClick={this.handleNewsItemClick} />
    ) : null;
  }
}
