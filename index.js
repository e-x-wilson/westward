import React, { useState } from "react";
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

// THIS DISABLES EVERY YELLOW WARNING ----
console.disableYellowBox = true;
// ---------------------------------------

import Monster from "./src/monster";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const monsterX = randomBetween(20, WIDTH);
const monsterY = randomBetween(20, HEIGHT);

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

function Westward() {
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
    <GameLoop style={styles.container} onUpdate={this.updateHandler}>
      <View style={[styles.touch, { left: touchX, top: touchY }]} />

      <Monster
        monsterX={monsterX}
        monsterY={monsterY}
        screenWidth={WIDTH}
        screenHeight={HEIGHT}
      />
    </GameLoop>
  );
}

AppRegistry.registerComponent("westernRPG", () => Westward);
