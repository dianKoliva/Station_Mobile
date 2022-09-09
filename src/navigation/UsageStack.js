import React from "react";
import Detail from "../pages/Detail";
import Gros from "../pages/Gros";
import Choice from "../pages/Choice";
import Report from "../pages/Report";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

const UsageStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Choice">
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Gros"
        component={Gros}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Choice"
        component={Choice}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Report"
        component={Report}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default UsageStack;
