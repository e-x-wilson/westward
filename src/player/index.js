import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";

import MenuIcon from "./menu-icon";
import { WIDTH, HEIGHT, PLAYER_INFO, MENU_ICONS } from "../constants.js";

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60
  },
  sprite: {
    width: 60,
    height: 60
  },
  playerMenu: {
    backgroundColor: `rgba(47, 47, 47, 0.8)`,
    alignItems: `flex-end`,
    justifyContent: `flex-end`,
    padding: 60,
    width: WIDTH,
    height: HEIGHT
  }
});

function Player(props) {
  const [modalVisible, setModalVisible] = useState(
    props.menuOpen ? true : false
  );

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        setModalVisible(true);
      }}
      style={styles.container}
    >
      <Image style={styles.sprite} source={require(`./img/doctor.png`)} />
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
          <View style={styles.playerMenu}>
            {/* TODO: Make image dynamic based on player class */}
            {MENU_ICONS.map(option => (
              <MenuIcon
                icon={option}
                closeModal={() => setModalVisible(false)}
              />
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
}

export default withNavigation(Player);
