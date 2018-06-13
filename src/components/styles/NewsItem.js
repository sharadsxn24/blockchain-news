import {StyleSheet} from "react-native";

export default StyleSheet.create({
  itemRow: {
    padding: 20,
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 8
  },
  itemRowHeader: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 10
  },
  itemPubDate: {
    color: "#aaaaaa",
    fontSize: 12
  },
  itemSource: {
    backgroundColor: "#F9A511",
    color: "#ffffff",
    fontSize: 12,
    paddingHorizontal: 5
  },
  itemTitle: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 10
  },
  badgeRow: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    marginHorizontal: -2
  },
  badge: {
    color: "#aaaaaa",
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginHorizontal: 2,
    fontSize: 11,
    borderRadius: 4,
    marginVertical: 2,
    borderColor: "#f0f0f0",
    borderWidth: 1
  }
});
