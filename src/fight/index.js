import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  scene: {
    flex: 3,
    justifyContent: `center`
  },
  menu: {
    flex: 1
  },
  button: {
    backgroundColor: `black`,
    padding: 20,
    margin: 30
  },
  text: {
    color: `white`,
    fontSize: 20
  }
});

function Fight(props) {
  const MONSTER_INFO = props.navigation.state.params;

  return (
    <View style={styles.screen}>
      <View style={styles.scene}>
        {/* TODO: Create actual visual fight scene */}
        <Text style={{ padding: 20, fontStyle: `italic`, fontSize: 20 }}>
          {`* oh no a ${MONSTER_INFO.NAME} appears!`}
        </Text>
        <Text style={{ padding: 20, fontStyle: `italic`, fontSize: 20 }}>
          {`** and it has  ${MONSTER_INFO.ATTACK} attack!`}
        </Text>
        <Text style={{ padding: 20, fontStyle: `italic`, fontSize: 20 }}>
          {`*** PUNCH IT!!!`}
        </Text>
      </View>

      <View style={styles.menu}>
        <TouchableHighlight
          onPress={() => {
            props.navigation.navigate(`Victory`, MONSTER_INFO);
          }}
          style={styles.button}
        >
          {/* TODO: Create turn based fighting */}
          <Text style={styles.text}>PRESS TO PUNCH</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default withNavigation(Fight);
