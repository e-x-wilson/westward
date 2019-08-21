import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Alert,
  ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";
import { WIDTH, HEIGHT, PLAYER_INFO } from "../constants.js";
import { find } from "lodash/fp";

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
  inventoryItem: {
    display: `flex`,
    flexDirection: `row`,
    width: WIDTH / 2,
    alignItems: `center`,
    justifyContent: `space-between`,
    marginTop: 5,
    borderBottomColor: `black`,
    borderBottomWidth: 2
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
  plus: {
    backgroundColor: `black`,
    padding: 5,
    marginLeft: 15
  },
  text: {
    color: `white`
  }
});

const TEST_INVENTORY = [`Apple`, `Pistol`, `Beer`, `Apple`];

const ITEM_TYPES = {
  FOOD: `Food`,
  WEAPON: `Weapons`,
  DRINK: `Drink`
};

const ALL_ITEMS = [
  {
    id: `Apple`,
    type: ITEM_TYPES.FOOD,
    // TODO: Implement system where `effect` properly applies to system
    // based on item `type`
    effect: 5,
    description: `An apple just not rotten enough to still be consumed.`,
    weight: 1
  },
  {
    id: `Pistol`,
    type: ITEM_TYPES.WEAPON,
    effect: 4,
    description: `An old, rusty handgun that looks to have passed through many hands.`,
    weight: 3
  },
  {
    id: `Beer`,
    type: ITEM_TYPES.DRINK,
    effect: 5,
    description: `A locally brewed lager that tastes exactly how you like.`,
    weight: 2
  }
];

function Inventory(props) {
  const [inventory, updateInventory] = useState(TEST_INVENTORY);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>INVENTORY</Text>
        {inventory.map(item => {
          const details = find({ id: item }, ALL_ITEMS);
          return (
            // TODO: Build modal to bring up further item details and
            // options to use/delete/etc.
            <TouchableHighlight
              activeOpacity={1}
              // TODO: This alert is crashing the app...replace it soon please
              onPress={() => Alert.alert(details.id)}
              style={styles.inventoryItem}
            >
              <Text>{`${details.id} - Weight: ${details.weight}`}</Text>
            </TouchableHighlight>
          );
        })}

        <View style={styles.options}>
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

export default withNavigation(Inventory);
