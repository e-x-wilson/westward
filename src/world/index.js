import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { GameLoop } from "react-native-game-engine";

import { WIDTH, HEIGHT, LEVELING } from "../constants.js";
import Monster from "../monster";
import Player from "../player";

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
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

  const [touchX, setTouchX] = useState(null);
  const [touchY, setTouchY] = useState(null);

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
    // TODO: Add MapBox basic map to replace background image
    <ImageBackground
      source={require("./img/desert.png")}
      style={styles.background}
    >
      <GameLoop style={styles.container} onUpdate={this.updateHandler}>
        <View style={[styles.touch, { left: touchX, top: touchY }]} />
        {/* TODO: Build basic stats UI */}

        <Player
          screenWidth={WIDTH}
          screenHeight={HEIGHT}
          style={styles.player}
          playerLevel={playerLevel}
          playerExperience={playerExperience}
          menuOpen={params.menuOpen}
        />

        {/* TODO: Add monster procedural generation */}
        <Monster screenWidth={WIDTH} screenHeight={HEIGHT} />
      </GameLoop>
    </ImageBackground>
  );
}

export default World;
