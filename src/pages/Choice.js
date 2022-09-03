import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../store/reducers";
import { fonts } from "../utils/fonts";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

const Choice = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <ScrollView className="bg-white flex-1 pt-20">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />
      <View
        className="flex"
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        {/* <Fontisto name="blood-drop" size={54} color="#2941CA" />
        <Text className="ml-3 font-bold text-2xl" style={{ color: "#2941CA" }}>
          Petro
        </Text> */}
        <Image source={require("../images/logo.png")} />
      </View>

      <View className="mt-10">
        <Pressable
          className="flex flex-row mx-8 mt-10 px-8 py-6 rounded-lg shadow-xl justify-between items-center"
          style={{ shadowColor: "#171717", elevation: 5 }}
        >
          <Text className="mt-2 mr-14 text-lg" style={fonts.dmSansRegular}>
            Vente au détail
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail")}
            style={{ backgroundColor: "#2941CA", borderRadius: 10 }}
            className="py-3 px-3.5 mt-1 ml-4 flex justify-center items-center"
          >
            <Entypo name="chevron-thin-right" size={18} color="white" />
          </TouchableOpacity>
        </Pressable>
        <Pressable
          className="flex flex-row mx-8 mt-6 px-8 py-6 rounded-lg shadow-xl justify-between items-center"
          style={{ shadowColor: "#171717", elevation: 5 }}
        >
          <Text className="mt-2 mr-14 text-lg" style={fonts.dmSansRegular}>
            Vente au gros
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Gros")}
            style={{ backgroundColor: "#2941CA", borderRadius: 10 }}
            className="py-3 px-3.5 mt-1 ml-4 flex justify-center items-center"
          >
            <Entypo name="chevron-thin-right" size={18} color="white" />
          </TouchableOpacity>
        </Pressable>
        <Pressable
          className="flex flex-row mx-8 mt-6 px-8 py-6 rounded-lg shadow-xl justify-between items-center"
          style={{ shadowColor: "#171717", elevation: 5 }}
        >
          <Text className="mt-2 mr-14 text-lg" style={fonts.dmSansRegular}>
            Se déconnecter
          </Text>
          <TouchableOpacity
            onPress={() => dispatch(logout())}
            style={{ backgroundColor: "#2941CA", borderRadius: 10 }}
            className="py-3 px-3.5 mt-1 ml-4 flex justify-center items-center"
          >
            <Entypo name="chevron-thin-right" size={18} color="white" />
          </TouchableOpacity>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Choice;

const styles = StyleSheet.create({});
