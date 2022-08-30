import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { signin } from "../functions/requests";
import { fonts } from "../utils/fonts";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState("");
  let validate = () => {
    let valid = signin(name, password);
  };
  return (
    <View className="h-full px-2" style={{ backgroundColor: "white" }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />

      <View
        className="flex mt-32"
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Fontisto name="blood-drop" size={54} color="#2941CA" />
        <Text className="ml-3  font-bold text-2xl" style={{ color: "#2941CA" }}>
          Petro
        </Text>
      </View>

      <View className="mt-28" style={{ alignItems: "center" }}>
        <Text
          className="text-5xl font-bold"
          style={{ color: "#2941CA", fontFamily: "Poppins_600SemiBold" }}
        >
          Salut !
        </Text>
        <Text
          style={[{ color: "#888888" }, fonts.dmSansRegular]}
          className="text-lg"
        >
          Bienvenue à nouveau
        </Text>
      </View>

      <View className="mt-4">
        <TextInput
          className="h-16  ml-4 mr-4 p-4 mt-8 rounded-lg"
          style={[{ backgroundColor: "#F5F6F9" }, fonts.dmSansRegular]}
          onChangeText={(name) => setName(name)}
          value={name}
          placeholder="Numéro de téléphone"
        />
        <TextInput
          className="h-16  ml-4 mr-4 p-4 mt-8 rounded-lg"
          style={[{ backgroundColor: "#F5F6F9" }, fonts.dmSansRegular]}
          onChangeText={(pass) => setPassword(pass)}
          value={password}
          placeholder="Mot de passe"
        />

        <TouchableOpacity
          onPress={() => {
            validate();
          }}
          className="h-16 ml-4 mr-4 p-4 mt-8 rounded-lg "
          style={{
            backgroundColor: "#2941CA",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text className="text-white text-lg " style={fonts.dmSansMedium}>
            Connexion
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
