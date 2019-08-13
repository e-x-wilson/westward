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

const styles = StyleSheet.create({
  monster: {
    position: "absolute",
    backgroundColor: "black",
    width: 50,
    height: 50
  }
});

function Monster(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState(``);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        setModalVisible(true);
        // TODO: Set text to be dynamic based on generated monster
        setModalText(`Snake - Lv. 2`);
      }}
      style={[styles.monster, { left: props.monsterX, top: props.monsterY }]}
    >
      {/* TODO: Set text to be dynamic based on generated monster */}
      <Text>Rattlesnake</Text>
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
            style={{
              backgroundColor: `rgba(47, 47, 47, 0.6)`,
              alignItems: `center`,
              width: props.screenWidth,
              height: props.screenHeight,
              justifyContent: `center`,
              padding: 20
            }}
          >
            {/* TODO: Make image dynamic based on generated monster */}
            <Image source={require(`./img/snake.png`)} />
            <Text style={{ color: `white`, fontSize: 20 }}>{modalText}</Text>
            <TouchableHighlight
              onPress={() => setModalVisible(false)}
              style={{
                alignItems: "center",
                padding: 10
              }}
            >
              <Text style={{ color: `white`, fontSize: 20 }}>Ignore</Text>
            </TouchableHighlight>
            <TouchableHighlight
              // TODO: Navigate to FIGHT screen from here passing along monster data
              onPress={() => Alert.alert("Navigate to fight...")}
              style={{
                alignItems: "center",
                backgroundColor: "darkgreen",
                padding: 10
              }}
            >
              <Text style={{ color: `white`, fontSize: 20 }}>Fight</Text>
            </TouchableHighlight>
          </View>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
}

export default Monster;
