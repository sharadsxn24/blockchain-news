import { createStackNavigator } from "react-navigation";
import HomeScreen from "../containers/HomeScreen";
import NewsScreen from "../containers/NewsScreen";

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
    News: { screen: NewsScreen }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#293D4E",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        paddingVertical: 10,
        fontWeight: "bold",
        textAlign: "center"
      }
    }
  }
);
