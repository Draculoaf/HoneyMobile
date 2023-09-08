import { View, Text } from "react-native";
import React from "react";
import Home from "./Home";
import Groceries from "./Groceries";
import Recipes from "./Recipes";
import Skills from "./Skills";

export { Home, Groceries, Skills, Recipes };
export default function index() {
  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
