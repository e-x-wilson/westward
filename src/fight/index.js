import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

function Fight(props) {
  const MONSTER_INFO = props.navigation.state.params;

  return (
    <View style={styles.screen}>
      <TouchableHighlight
        onPress={() => {
          props.navigation.navigate(`victory`, MONSTER_INFO);
        }}
      >
        {/* TODO: Create turn based fighting */}
        <Text style={styles.text}>PRESS HERE TO PUNCH THEM IN THE FACE</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`
  },
  text: {
    fontSize: 20
  }
});

export default withNavigation(Fight);
