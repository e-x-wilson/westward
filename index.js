import React, { PureComponent, useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  View,
  YellowBox
} from "react-native";
import { GameLoop } from "react-native-game-engine";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

// THIS DISABLES EVERY YELLOW WARNING ----
console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  player: {
    position: "absolute",
    backgroundColor: "pink",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  }
});

function Westward() {
  const [playerX, setPlayerX] = useState(WIDTH / 2 - RADIUS);
  const [playerY, setPlayerY] = useState(HEIGHT / 2 - RADIUS);

  updateHandler = ({ touches, screen, time }) => {
    let move = touches.find(x => x.type === "move");
    if (move) {
      setPlayerX(playerX + move.delta.pageX);
      setPlayerY(playerY + move.delta.pageY);
    }
  };

  return (
    <GameLoop style={styles.container} onUpdate={this.updateHandler}>
      <View style={[styles.player, { left: playerX, top: playerY }]} />
    </GameLoop>
  );
}

AppRegistry.registerComponent("westernRPG", () => Westward);
