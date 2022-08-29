import { View, Text } from "react-native";
import React from "react";
import Detail from "../pages/Detail";
import Gros from "../pages/Gros";
import Choice from "../pages/Choice";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const UsageStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Choice">
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Gros" component={Gros} />
      <Stack.Screen name="Choice" component={Choice} />
    </Stack.Navigator>
  );
};

export default UsageStack;
