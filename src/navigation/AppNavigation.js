import { createStackNavigator } from "react-navigation";
import HomeScreen from "../containers/HomeScreen";
import NewsScreen from "../containers/NewsScreen";

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
    News: { screen: NewsScreen }
  },
  {
    initialRouteName: "Home"
  }
);
