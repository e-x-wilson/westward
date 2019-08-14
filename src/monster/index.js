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

const MONSTER_INFO = {
  NAME: `Snake`,
  LEVEL: 2,
  HEALTH: 10,
  ATTACK: 3,
  DEFENSE: 1,
  XP: 8,
  SPEED: 2
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
      style={[styles.monster, { left: props.monsterX, top: props.monsterY }]}
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
                props.navigation.navigate(`fight`, MONSTER_INFO);
                setModalVisible(false);
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
    width: 50,
    height: 50
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
