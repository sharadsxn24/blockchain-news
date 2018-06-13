import { API } from "../config/constants";
import moment from "moment";

export async function fetchHeadlines() {
  return fetchAPIs(API.headline);
}

export async function fetchNewsFeed() {
  return fetchAPIs(API.feed);
}

async function fetchAPIs(urls) {
  let results = await Promise.all(urls.map(api => fetchAPI(api)));
  return results.reduce((items, r) => items.concat(r), []).sort((a, b) => {
    // console.log(a.pubDate, b.pubDate, moment(a.pubDate).unix(), moment(b.pubDate).unix())
    return (
      parseInt(moment(b.pubDate).unix()) - parseInt(moment(a.pubDate).unix())
    );
  });
}

async function fetchAPI(url) {
  let res = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  res = await res.json();
  res = res.items.map(item => {
    return {
      ...item,
      source: res.feed
    };
  });
  return res;
}
