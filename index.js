import React from "react";
import { AppRegistry } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import World from "./src/world";
import Fight from "./src/fight";
import Victory from "./src/victory";

// DISABLE EVERY YELLOW WARNING ----
console.disableYellowBox = true;

// TODO: Determine best sub-navigation stacks.
// For example: World would be related to menus
// Battle would only be related to battle menu
const AppNavigator = createStackNavigator(
  {
    World,
    Victory,
    Fight
  },
  {
    initialRouteName: "World",
    headerMode: "none"
  }
);

AppRegistry.registerComponent("westward", () =>
  createAppContainer(AppNavigator)
);
