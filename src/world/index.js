import React, { useState, useEffect } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from "react-native";
import { GameLoop } from "react-native-game-engine";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { WIDTH, HEIGHT } from `../constants`;

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
    width: 30,
    height: 30,
    borderRadius: 50
  },
  player: {
    height: 200,
    width: 200
  }
});

function World(props) {
  const params = props.navigation.state.params || {};

    // TODO: Determine persistent data management solution
  const [playerExperience, addExperience] = useState(0);
  const [playerLevel, setPlayerLevel] = useState(1);

  useEffect(() => {
    if (params.XP) {
      addExperience(playerExperience + params.XP);
      // TODO: Create level up modal
      setPlayerLevel(LEVELING.findIndex(cap => cap >= playerExperience) + 1);
    }
  }, [params.battleId]);

  const [touchX, setTouchX] = useState(WIDTH / 2 - 50);
  const [touchY, setTouchY] = useState(HEIGHT / 2 - 50);

  updateHandler = ({ touches, screen, time }) => {
    let touch = touches.find(x => x.type === "press");
    if (touch) {
      setTouchX(touch.event.locationX);
      setTouchY(touch.event.locationY);
    }
  };

  return (
      <View style={[styles.touch, { left: touchX, top: touchY }]} />

      <Player
        style={styles.player}
        playerLevel={playerLevel}
        playerExperience={playerExperience}
      />

      {/* TODO: Build basic stats UI */}
      {/* TODO: Add monster procedural generation */}
      <Monster />
  );
}

export default World;
