import React, { useState, useEffect } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  YellowBox,
  Text,
  TouchableOpacity
} from "react-native";
import { GameLoop } from "react-native-game-engine";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Monster from "./src/monster";
import Player from "./src/player";
import Fight from "./src/fight";
import Victory from "./src/victory";
import { WIDTH, HEIGHT, LEVELING } from "./src/constants.js";

// DISABLE EVERY YELLOW WARNING ----
console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  touch: {
    position: "absolute",
    backgroundColor: "blue",
    width: 20,
    height: 20,
    borderRadius: 50
  },
  player: {
    height: 200,
    width: 200
  }
});

// TODO: Create loading/auth screen as entryway to app
function World(props) {
  const params = props.navigation.state.params || {};

  useEffect(() => {
    if (params.monsterExperience) {
      addExperience(playerExperience + params.monsterExperience);
      // TODO: Create level up modal
      setPlayerLevel(LEVELING.findIndex(cap => cap >= playerExperience) + 1);
    }
  }, [params.battleId]);

  const [touchX, setTouchX] = useState(WIDTH / 2);
  const [touchY, setTouchY] = useState(HEIGHT / 2);

  // TODO: Determine persistent data management solution
  const [playerExperience, addExperience] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);

  updateHandler = ({ touches, screen, time }) => {
    let touch = touches.find(x => x.type === "press");
    if (touch) {
      setTouchX(touch.event.locationX - 12);
      setTouchY(touch.event.locationY - 12);
    }
  };

  return (
    // TODO: Add MapBox basic map for background to main screen
    <GameLoop style={styles.container} onUpdate={this.updateHandler}>
      <View style={[styles.touch, { left: touchX, top: touchY }]} />
      {/* TODO: Build basic stats UI */}

      <Player
        screenWidth={WIDTH}
        screenHeight={HEIGHT}
        style={styles.player}
        playerLevel={playerLevel}
        playerExperience={playerExperience}
      />

      {/* TODO: Add monster procedural generation */}
      <Monster screenWidth={WIDTH} screenHeight={HEIGHT} />
    </GameLoop>
  );
}

// TODO: Determine best sub-navigation stacks.
// For example: World would be related to menus
// Battle would only be related to battle menu
const AppNavigator = createStackNavigator(
  {
    world: World,
    victory: Victory,
    fight: Fight
  },
  {
    initialRouteName: "world",
    headerMode: "none"
  }
);

AppRegistry.registerComponent("westward", () =>
  createAppContainer(AppNavigator)
);
