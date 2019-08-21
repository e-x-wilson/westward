import { React } from "react";
import { Dimensions } from "react-native";

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;

export const randomX = () => randomBetween(150, WIDTH - 150);
export const randomY = () => randomBetween(150, HEIGHT - 150);

export const PLAYER_CLASSES = {
  BANDIT: `Bandit`,
  GUNSLINGER: `Gunslinger`,
  DOCTOR: `Doctor`,
  BARTENDER: `Bartender`,
  PASTOR: `Pastor`
};

export const PLAYER_INFO = {
  NAME: `Eri of Rilson`,
  CLASS: PLAYER_CLASSES.BANDIT,
  LEVEL: 2,
  HEALTH: 10,
  ENERGY: 10,
  STATS: {
    POWER: 5,
    GRIT: 2,
    SPEED: 6,
    LOGIC: 5,
    CHARISMA: 3,
    MEDICINE: 1,
    AIM: 7,
    FAITH: 3,
    SURVIVAL: 8,
    CHEMISTRY: 3,
    COURAGE: 6,
    AUTHORITY: 0,
    CREATIVITY: 5,
    INTIMIDATION: 7
  },
  SKILL: []
};

export const LEVELING = [1, 30, 90, 150];

export const MONSTER_INFO = {
  NAME: `snake`,
  LEVEL: 2,
  HEALTH: 10,
  ATTACK: 3,
  DEFENSE: 1,
  XP: 8,
  SPEED: 2,
  MAP_POSITION: [randomX(), randomY()]
};

export const MENU_ICONS = [
  `Inventory`,
  `Stats`,
  `Skills`,
  `Party`,
  `Story`,
  `Achievements`,
  `Close`
];
