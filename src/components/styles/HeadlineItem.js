import { StyleSheet } from "react-native";
import { windowWidth } from "../../styles/metrics";

export default StyleSheet.create({
  item: {
    borderRadius: 6,
    overflow: "hidden",
    position: "relative",
    width: windowWidth * 0.8,
    height: windowWidth * 0.8 * 0.7
  },
  itemImage: {
    flex: 1,
    backgroundColor: "#dddddd"
  },
  itemShade: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  itemContent: {
    flexDirection: "column",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20
  },
  itemTitle: {
    color: "white",
    fontSize:14,
    lineHeight: 20
  },
  itemSource: {
    backgroundColor: "#F9A511",
    color: "#ffffff",
    fontSize: 12,
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginBottom: 10,
    alignSelf: 'flex-start'
  }
});
