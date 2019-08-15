import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { withNavigation } from "react-navigation";

function Victory(props) {
  // Params will be NULL if not found.
  const { NAME, LEVEL, XP, SPEED } = props.navigation.state.params;

  // TODO: Set initial turn by comparing player speed to monster speed
  const [playerTurn, setPlayerTurn] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: `bold`, fontSize: 30 }}>VICTORY</Text>

      <Text>NAME: {NAME}</Text>
      <Text>LVL: {LEVEL}</Text>
      <Text>XP: {XP}</Text>

      <TouchableHighlight
        activeOpacity={0}
        onPress={() =>
          props.navigation.navigate("world", {
            // TODO: Implement fighting parties and calculate total XP and kills
            XP,
            kills: 1,
            // TODO: Generate random number for battle id to change or use actual
            // state management to handle updating root reducer for player info
            battleId: Math.random()
          })
        }
        style={styles.worldButton}
      >
        <Text>Back to Map</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  worldButton: {
    alignItems: "center",
    padding: 10,
    margin: 30
  }
});

export default withNavigation(Victory);
