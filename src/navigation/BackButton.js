import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      className="mt-10 mb-8 ml-2"
    >
      <Entypo name="chevron-left" size={30} color="black" />
    </TouchableOpacity>
  );
}
