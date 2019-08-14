import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const monsterX = randomBetween(100, WIDTH - 100);
const monsterY = randomBetween(100, HEIGHT - 100);

const MONSTER_INFO = {
  NAME: `snake`,
  LEVEL: 2,
  HEALTH: 10,
  ATTACK: 3,
  DEFENSE: 1,
  XP: 8,
  SPEED: 2,
  MAP_POSITION: [monsterX, monsterY]
};

function Monster(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState(``);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        // TODO: Set text to be dynamic based on generated monster
        setModalText(`${MONSTER_INFO.NAME} - Lv. ${MONSTER_INFO.LEVEL}`);
        setModalVisible(true);
      }}
      style={[
        styles.monster,
        {
          left: MONSTER_INFO.MAP_POSITION[0],
          top: MONSTER_INFO.MAP_POSITION[1]
        }
      ]}
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <View
            style={[
              styles.monsterModalView,
              { width: props.screenWidth, height: props.screenHeight }
            ]}
          >
            {/* TODO: Make image dynamic based on generated monster */}
            <Image source={require(`./img/snake.png`)} />
            <Text style={styles.monsterModalText}>{modalText}</Text>
            <TouchableHighlight
              onPress={() => setModalVisible(false)}
              style={{
                alignItems: "center",
                padding: 10
              }}
            >
              <Text style={styles.monsterModalText}>Ignore</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(false);
                props.navigation.navigate(`fight`, MONSTER_INFO);
              }}
              style={styles.fightButton}
            >
              <Text style={styles.monsterModalText}>Fight</Text>
            </TouchableHighlight>
          </View>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  monster: {
    position: "absolute",
    backgroundColor: "black",
    width: 30,
    height: 30
  },
  monsterModalView: {
    backgroundColor: `rgba(47, 47, 47, 0.6)`,
    alignItems: `center`,
    justifyContent: `center`,
    padding: 20
  },
  monsterModalText: { color: `white`, fontSize: 20 },
  fightButton: {
    alignItems: `center`,
    backgroundColor: `darkgreen`,
    padding: 10
  }
});

export default withNavigation(Monster);
