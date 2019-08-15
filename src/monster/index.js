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
  monsterSprite: {
    width: 40,
    height: 40
  },
  monsterModalView: {
    backgroundColor: `rgba(47, 47, 47, 0.6)`,
    alignItems: `center` ,
    justifyContent: `center`,
    width: WIDTH,
    height: HEIGHT
  },
  monsterModalText: { color: `white`, fontSize: 20 },
  fightButton: {
    backgroundColor: `darkgreen`,
    padding: 10
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
      <Image style={styles.monsterSprite} source={require(`./img/snake.png`)} />
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
          <View style={styles.monsterModalView}>
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
                // TODO: Add fight scene turn based combat
                props.navigation.navigate(`fight`, MONSTER_INFO);
                // props.navigation.navigate(`victory`, MONSTER_INFO);
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

export default withNavigation(Monster);
