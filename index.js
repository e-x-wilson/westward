import React, { useState, useEffect } from "react";
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  View,
  YellowBox,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from "react-native";
import { GameLoop } from "react-native-game-engine";
import { createStackNavigator, createAppContainer } from "react-navigation";

// THIS DISABLES EVERY YELLOW WARNING ----
console.disableYellowBox = true;
// ---------------------------------------

import Monster from "./src/monster";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const monsterX = randomBetween(100, WIDTH - 100);
const monsterY = randomBetween(100, HEIGHT - 100);

const LEVELING = [1, 30, 90, 150];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  touch: {
    position: "absolute",
    backgroundColor: "blue",
    width: 50,
    height: 50,
    borderRadius: 50
  }
});

function Westward(props) {
  const params = props.navigation.state.params || {};

  const [touchX, setTouchX] = useState(WIDTH / 2 - 50);
  const [touchY, setTouchY] = useState(HEIGHT / 2 - 50);

  // TODO: Determine persistent data management solution
  const [playerExperience, addExperience] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);

  useEffect(() => {
    if (params.monsterExperience) {
      addExperience(playerExperience + params.monsterExperience);
      setPlayerLevel(LEVELING.findIndex(cap => cap >= playerExperience) + 1);
    }
  }, [params.battleId]);

  updateHandler = ({ touches, screen, time }) => {
    let touch = touches.find(x => x.type === "press");
    if (touch) {
      setTouchX(touch.event.locationX);
      setTouchY(touch.event.locationY);
    }
  };

  return (
    <GameLoop style={styles.container} onUpdate={this.updateHandler}>
      {/* TODO: Add Player component linked to player menu screen */}
      <View style={[styles.touch, { left: touchX, top: touchY }]} />

      {/* TODO: Replace this info with basic stats UI */}
      <Text>PLAYER LVL: {playerLevel}</Text>
      <Text>PLAYER XP: {playerExperience}</Text>

      <Monster
        monsterX={monsterX}
        monsterY={monsterY}
        screenWidth={WIDTH}
        screenHeight={HEIGHT}
      />
    </GameLoop>
  );
}

function Fight(props) {
  const monsterName = props.navigation.getParam("NAME", "???");
  const monsterLevel = props.navigation.getParam("LEVEL", "???");
  const monsterExperience = props.navigation.getParam("XP", "???");

  // The following can be used if fallbacks are not desired for params.
  // Params will be NULL if not found.
  // const {NAME, LEVEL, EXP} = this.props.navigation.state.params

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>NAME: {monsterName}</Text>
      <Text>LVL: {monsterLevel}</Text>
      <Text>XP: {monsterExperience}</Text>

      <TouchableHighlight
        activeOpacity={0}
        onPress={() =>
          props.navigation.navigate("home", {
            // TODO: Implement fighting parties and calculate total XP and kills
            monsterExperience,
            kills: 1,
            // TODO: Generate random number for battle id to change or use actual
            // state management to handle updating root reducer for player info
            battleId: Math.random()
          })
        }
        style={{
          alignItems: "center",
          padding: 10,
          margin: 30
        }}
      >
        <Text>Back to Map</Text>
      </TouchableHighlight>
    </View>
  );
}

const AppNavigator = createStackNavigator(
  {
    home: Westward,
    fight: Fight
  },
  {
    initialRouteName: "home"
  }
);

AppRegistry.registerComponent("westernRPG", () =>
  createAppContainer(AppNavigator)
);
