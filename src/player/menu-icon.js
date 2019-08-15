import React from "react";
import { Text, TouchableHighlight, Alert, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

function MenuIcon(props) {
  return (
    <TouchableHighlight
      onPress={() => {
        if (props.icon !== `close`) {
          Alert.alert(`${props.icon} screen...`);
        }
        props.closeModal();
        // TODO: Create stats screen
        // props.navigation.navigate(props.icon);
      }}
      // TODO: Add styling for individual icons if needed
      style={styles.icon}
    >
      {/* TODO: Add icons for player menu systems */}
      <Text style={styles.iconText}>{props.icon}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  icon: {
    flex: 1,
  },
  iconText: {
    color: `white`,
    fontSize: 20
  }
});

export default withNavigation(MenuIcon);
