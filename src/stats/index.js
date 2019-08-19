import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ToastAndroid,
  Alert,
  ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";
import { WIDTH, HEIGHT, PLAYER_INFO } from "../constants.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`
  },
  heading: {
    fontWeight: `bold`,
    fontSize: 20,
    marginTop: 10
  },
  statLine: {
    display: `flex`,
    flexDirection: `row`,
    width: WIDTH / 2,
    alignItems: `center`,
    justifyContent: `space-between`,
    marginTop: 5
  },
  options: {
    display: `flex`,
    flexDirection: `row`,
    width: WIDTH,
    alignItems: `center`,
    justifyContent: `space-around`,
    marginTop: 10
  },
  button: {
    backgroundColor: `black`,
    padding: 10,
    marginTop: 10,
    width: 90
  },
  save: {
    backgroundColor: `lightblue`,
    padding: 10,
    marginTop: 10,
    width: 90
  },
  plus: {
    backgroundColor: `black`,
    padding: 5,
    marginLeft: 15
  },
  text: {
    color: `white`
  }
});

function Stats(props) {
  const [availableStatPoints, setStatPoints] = useState(10);
  const [statChanges, updateStatChanges] = useState(
    Object.keys(PLAYER_INFO.STATS).reduce(
      (acc, stat) => ({ ...acc, [stat]: 0 }),
      {}
    )
  );

  const activeChanges = Object.values(statChanges).reduce(
    (acc, change) => acc + change,
    0
  );

  const updateStat = statName => {
    if (availableStatPoints >= 1) {
      updateStatChanges({
        ...statChanges,
        [statName]: statChanges[statName] + 1
      });
      setStatPoints(availableStatPoints - 1);
      return;
    }

    Alert.alert(`No stat points available`);
    // Possible Android specific alert option
    // ToastAndroid.show(`No stat points available`, ToastAndroid.SHORT);
  };

  const saveStatChanges = () => {
    Alert.alert(`Stat points saved`);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>STATS</Text>
        <Text style={styles.heading}>Available: {availableStatPoints}</Text>
        {Object.entries(PLAYER_INFO.STATS).map(([stat, value]) => (
          <View style={styles.statLine}>
            <Text>
              {stat}: {value + statChanges[stat]}
            </Text>
            <TouchableHighlight
              activeOpacity={0}
              onPress={() => updateStat(stat)}
              style={styles.plus}
            >
              <Text style={styles.text}>+</Text>
            </TouchableHighlight>
          </View>
        ))}

        <View style={styles.options}>
          <TouchableHighlight
            activeOpacity={0}
            disabled={!activeChanges}
            onPress={() => saveStatChanges()}
            style={styles.save}
          >
            <Text style={styles.text}>Save</Text>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={0}
            onPress={() =>
              props.navigation.navigate(`World`, { menuOpen: true })
            }
            style={styles.button}
          >
            <Text style={styles.text}>Menu</Text>
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={0}
            onPress={() => props.navigation.navigate(`World`)}
            style={styles.button}
          >
            <Text style={styles.text}>Map</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
}

export default withNavigation(Stats);
