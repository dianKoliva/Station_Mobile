import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Alert
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { signIn } from "../functions/requests";
import { fonts } from "../utils/fonts";
import { useDispatch } from "react-redux";
import { authenticate } from "../store/reducers";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {height,weight}=Dimensions.get("window");

  const handleLogin = () => {
    signIn(name, password)
      .then((res) => {
        if(res.success){
          dispatch(authenticate({ token: res.token, user: res.user }));
        }
        else{
          Alert.alert(
            "Station",
            "Invalid Credentials",
            [
              {
                text: "OK",
              },
            ],
            { cancelable: false }
          );
        }
      
      })
      .catch((err) => console.log(err));
  };
  return (
    <ScrollView className=" px-2" style={{ backgroundColor: "white",height:"100%" ,flex:1}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />

      <View
        className="flex "
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop:"20%"
        }}
      >
        <Image source={require("../images/logo.png")} />
      </View>

      <View className="" style={{ alignItems: "center" ,marginTop:"22%" }}>
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
          className="  p-4  rounded-lg"
          style={[{ backgroundColor: "#F5F6F9",marginLeft:"4%" ,marginRight:"4%",height:"18%",marginTop:"10%"}, fonts.dmSansRegular]}
          onChangeText={(name) => setName(name)}
          value={name}
          placeholder="Numéro de téléphone"
        />
        <TextInput
          className=" p-4  rounded-lg"
          style={[{ backgroundColor: "#F5F6F9",marginLeft:"4%" ,marginRight:"4%",height:"18%",marginTop:"4%"}, fonts.dmSansRegular]}
          onChangeText={(pass) => setPassword(pass)}
          value={password}
          placeholder="Mot de passe"
        />

        <TouchableOpacity
          onPress={handleLogin}
          className=" p-4  mb-4 rounded-lg "
          style={{
            backgroundColor: "#2941CA",
            marginLeft:"4%" ,marginRight:"4%",marginTop:"10%",marginBottom:"4%",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text className="text-white text-sm " style={fonts.dmSansMedium}>
            Connexion
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({});
