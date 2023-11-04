import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import TextsScreen from "./src/screens/TextScreen";
import BoxesScreen from "./src/screens/BoxesScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Lists: ListScreen,
    Components: ComponentScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    Squares: SquareScreen,
    Texts: TextsScreen,
    Boxes: BoxesScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
