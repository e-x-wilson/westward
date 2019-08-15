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

import { WIDTH, HEIGHT, MONSTER_INFO } from "../constants.js";

const styles = StyleSheet.create({
  sprite: {
    width: 40,
    height: 40
  },
  modal: {
    backgroundColor: `rgba(47, 47, 47, 0.8)`,
    alignItems: `center`,
    justifyContent: `center`,
    width: WIDTH,
    height: HEIGHT
  },
  menu: {
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    alignContent: `space-around`,
    margin: 20
  },
  text: { color: `white`, fontSize: 20 },
  button: {
    backgroundColor: `darkgreen`,
    padding: 10,
    width: 100,
    height: 50,
    alignItems: `center`
  },
  opacity: {
    padding: 10,
    width: 100,
    height: 50,
    alignItems: `center`
  }
});

function Monster(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState(``);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        // TODO: Set text to be dynamic based on generated monster
        setModalText(`${MONSTER_INFO.NAME} - lv. ${MONSTER_INFO.LEVEL}`);
        setModalVisible(true);
      }}
      style={{
        position: `absolute`,
        left: MONSTER_INFO.MAP_POSITION[0],
        top: MONSTER_INFO.MAP_POSITION[1]
      }}
    >
      <Image style={styles.sprite} source={require(`./img/snake.png`)} />
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
          <View style={styles.modal}>
            {/* TODO: Make image dynamic based on generated monster */}
            <Image source={require(`./img/snake.png`)} />
            <Text style={styles.text}>{modalText}</Text>
            <View style={styles.menu}>
              <TouchableHighlight
                onPress={() => setModalVisible(false)}
                style={styles.opacity}
              >
                <Text style={styles.text}>Ignore</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(false);
                  props.navigation.navigate(`Fight`, MONSTER_INFO);
                }}
                style={styles.button}
              >
                <Text style={styles.text}>Fight</Text>
              </TouchableHighlight>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
}

export default withNavigation(Monster);
