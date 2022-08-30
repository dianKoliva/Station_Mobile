import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { fonts } from "../utils/fonts";

const Gros = () => {
  return (
    <View className="bg-white flex-1 pt-20">
      <Text
        className="ml-4 text-2xl"
        style={[fonts.dmSansBold, { color: "#2941CA" }]}
      >
        Gros
      </Text>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />

      <View>
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg"
          style={{ backgroundColor: "#F5F6F9" }}
          // onChangeText={pass=>setPassword(pass)}
          value=""
          placeholder="Produit"
        />
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg"
          style={{ backgroundColor: "#F5F6F9" }}
          // onChangeText={pass=>setPassword(pass)}
          value=""
          placeholder="plaque"
        />
        <View style={{ flexDirection: "row" }} className="mr-4">
          <TextInput
            className="h-14 w-7/12 ml-4 mr-4 p-4 mt-4 rounded-lg"
            style={{ backgroundColor: "#F5F6F9" }}
            // onChangeText={pass=>setPassword(pass)}
            value=""
            placeholder="Prix"
          />
          <TextInput
            className="h-14 w-4/12     p-4 mt-4 rounded-lg"
            style={{ backgroundColor: "#F5F6F9" }}
            // onChangeText={pass=>setPassword(pass)}
            value=""
            placeholder="Devise"
          />
        </View>
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg"
          style={{ backgroundColor: "#F5F6F9" }}
          // onChangeText={pass=>setPassword(pass)}
          value=""
          placeholder="Quantité"
        />
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg"
          style={{ backgroundColor: "#F5F6F9" }}
          // onChangeText={pass=>setPassword(pass)}
          value=""
          placeholder="USD"
        />
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg"
          style={{ backgroundColor: "#F5F6F9" }}
          // onChangeText={pass=>setPassword(pass)}
          value=""
          placeholder="FC"
        />
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg"
          style={{ backgroundColor: "#F5F6F9" }}
          // onChangeText={pass=>setPassword(pass)}
          value=""
          placeholder="Tank"
        />

        <TouchableOpacity
          onPress={() => {}}
          className="h-14 ml-4 mr-4 p-4 mt-8 rounded-lg flex-row justify-center items-center "
          style={{
            backgroundColor: "#2941CA",
          }}
        >
          <Text className="text-lg text-white" style={fonts.dmSansMedium}>
            Enregistrer
          </Text>
        </TouchableOpacity>
      </View>
      <View></View>
    </View>
  );
};

export default Gros;

const styles = StyleSheet.create({});
