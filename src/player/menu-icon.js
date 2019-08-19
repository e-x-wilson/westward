import React from "react";
import { Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

function MenuIcon(props) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        if (props.icon !== `Close` && props.icon !== `Stats`) {
          Alert.alert(`${props.icon} screen...`);
        }

        props.closeModal();

        if (props.icon === `Stats`) {
          props.navigation.navigate(props.icon);
        }
        // TODO: Create stats screen
        // props.navigation.navigate(props.icon);
      }}
      // TODO: Add styling for individual icons if needed
      style={styles.icon}
    >
      {/* TODO: Add icons for player menu systems */}
      <Text style={styles.iconText}>{props.icon}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    flex: 1
  },
  iconText: {
    color: `white`,
    fontSize: 20
  }
});

export default withNavigation(MenuIcon);
