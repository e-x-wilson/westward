import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import { withNavigation } from "react-navigation";

import MenuIcon from "./menu-icon";

const PLAYER_CLASSES = {
  BANDIT: `Bandit`,
  GUNSLINGER: `Gunslinger`,
  DOCTOR: `Doctor`,
  BARTENDER: `Bartender`,
  PASTOR: `Pastor`
};

const PLAYER_INFO = {
  NAME: `Eri of Rilson`,
  CLASS: PLAYER_CLASSES.BANDIT,
  LEVEL: 2,
  HEALTH: 10,
  ATTACK: 5,
  DEFENSE: 1,
  SPEED: 4
};

const MENU_ICONS = [
  `inventory`,
  `stats`,
  `skills`,
  `party`,
  `story`,
  `achievements`,
  `close`
];

function Player(props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        setModalVisible(true);
      }}
      style={{
        left: props.screenWidth / 2.35,
        top: props.screenHeight / 3,
        height: 100,
        width: 100
      }}
    >
      <Image style={styles.playerSprite} source={require(`./img/bandit.png`)} />
      <Text style={{ top: 65, left: -5 }}>{PLAYER_INFO.NAME}</Text>
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
              styles.playerMenu,
              { width: props.screenWidth, height: props.screenHeight }
            ]}
          >
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

const styles = StyleSheet.create({
  playerSprite: {
    position: "absolute",
    width: 60,
    height: 60
  },
  playerMenu: {
    backgroundColor: `rgba(47, 47, 47, 0.9)`,
    alignItems: `center`,
    justifyContent: `center`,
    padding: 20
  }
});

export default withNavigation(Player);
