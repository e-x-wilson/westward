import React, { PureComponent, useState } from "react";
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
// Example for move code ----
// let move = touches.find(x => x.type === "move");
// if (move) {
//   setTouchX(touchX + move.delta.pageX);
//   setTouchY(touchY + move.delta.pageY);
// }

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const monsterX = randomBetween(20, WIDTH);
const monsterY = randomBetween(20, HEIGHT);

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
  },
  monster: {
    position: "absolute",
    backgroundColor: "black",
    width: RADIUS * 2,
    height: RADIUS * 2
  }
});

function Westward() {
  const [touchX, setTouchX] = useState(WIDTH / 2 - RADIUS);
  const [touchY, setTouchY] = useState(HEIGHT / 2 - RADIUS);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState(``);

  updateHandler = ({ touches, screen, time }) => {
    let touch = touches.find(x => x.type === "press");

    if (touch) {
      setTouchX(touch.event.locationX);
      setTouchY(touch.event.locationY);
    }
  };

  return (
    <GameLoop style={styles.container} onUpdate={this.updateHandler}>
      <View style={[styles.player, { left: touchX, top: touchY }]} />

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setModalVisible(!modalVisible);
          setModalText(`Rattlesnake - Lv. 2`);
        }}
        style={[styles.monster, { left: monsterX, top: monsterY }]}
      >
        <Text>Rattlesnake</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              backgroundColor: `rgba(47, 47, 47, 0.6)`,
              alignItems: `center`,
              width: WIDTH,
              height: HEIGHT,
              justifyContent: `center`,
              padding: 20
            }}
          >
            <Text style={{ color: `white` }}>{`${modalText}`}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </GameLoop>
  );
}

AppRegistry.registerComponent("westernRPG", () => Westward);
