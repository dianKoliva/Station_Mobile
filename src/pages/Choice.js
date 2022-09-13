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
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { add_modes, add_prices, add_products, logout } from "../store/reducers";
import { fonts } from "../utils/fonts";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getModes, getproducts, getPrice } from "../functions/requests";

const Choice = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.app);

  useEffect(() => {
    getproducts(token)
      .then((res) => {
        let __prod = res.map((p) => {
          let obj = { label: p.nom, value: p.id };
          return obj;
        });
        dispatch(add_products(__prod));
      })
      .catch((err) => console.log(err));

    getPrice(token)
      .then((res) => {
        let __pri = res.map((p) => {
          let obj = { prod: p.produit, usd: p.usd, cdf: p.cdf };
          return obj;
        });
        dispatch(add_prices(__pri));
      })
      .catch((err) => console.log(err));

    getModes(token)
      .then((res) => {
        let __modes = Object.entries(res);
        __modes = __modes.map((m) => {
          let _obj = { label: m[0], value: m[1] };
          return _obj;
        });
        dispatch(add_modes(__modes));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView className="bg-white flex-1 " style={{ paddingTop: "20%" }}>
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
        <Image source={require("../images/logo.png")} />
      </View>

      <View className="" style={{ marginTop: "10%" }}>
        <Pressable
          onPress={() => navigation.navigate("Detail")}
          className="flex flex-row   rounded-lg shadow-xl justify-between items-center"
          style={{
            marginHorizontal: "8%",
            marginTop: "10%",
            paddingHorizontal: "8%",
            paddingVertical: "6%",
            shadowColor: "#171717",
            elevation: 5,
            marginHorizontal: "8%",
            marginTop: "10%",
            paddingHorizontal: "8%",
            paddingVertical: "6%",
          }}
        >
          <Text
            className=" text-lg"
            style={[
              { marginTop: "2%", marginRight: "14%" },
              fonts.dmSansRegular,
            ]}
          >
            Vente au détail
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail")}
            style={{
              paddingVertical: "4%",
              paddingHorizontal: "3.5%",
              marginTop: "1%",
              marginLeft: "4%",
              backgroundColor: "#2941CA",
              borderRadius: 10,
            }}
            className=" flex justify-center items-center"
          >
            <Entypo name="chevron-thin-right" size={18} color="white" />
          </TouchableOpacity>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Gros")}
          className="flex flex-row  rounded-lg shadow-xl justify-between items-center"
          style={{
            marginHorizontal: "8%",
            marginTop: "10%",
            paddingHorizontal: "8%",
            paddingVertical: "6%",
            shadowColor: "#171717",
            elevation: 5,
          }}
        >
          <Text
            className=" text-lg"
            style={[
              { marginTop: "2%", marginRight: "14%" },
              fonts.dmSansRegular,
            ]}
          >
            Vente au gros
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Gros")}
            style={{
              paddingVertical: "4%",
              paddingHorizontal: "3.5%",
              marginTop: "1%",
              marginLeft: "4%",
              backgroundColor: "#2941CA",
              borderRadius: 10,
            }}
            className=" flex justify-center items-center"
          >
            <Entypo name="chevron-thin-right" size={18} color="white" />
          </TouchableOpacity>
        </Pressable>

        <Pressable
          className="flex flex-row  rounded-lg shadow-xl justify-between items-center"
          style={{
            marginHorizontal: "8%",
            marginTop: "10%",
            paddingHorizontal: "8%",
            paddingVertical: "6%",
            shadowColor: "#171717",
            elevation: 5,
          }}
        >
          <Text
            className=" text-lg"
            style={[
              { marginTop: "2%", marginRight: "14%" },
              fonts.dmSansRegular,
            ]}
          >
            Rapport
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Report")}
            style={{
              paddingVertical: "4%",
              paddingHorizontal: "3.5%",
              marginTop: "1%",
              marginLeft: "4%",
              backgroundColor: "#2941CA",
              borderRadius: 10,
            }}
            className=" flex justify-center items-center"
          >
            <Entypo name="chevron-thin-right" size={18} color="white" />
          </TouchableOpacity>
        </Pressable>

        <Pressable
          className="flex flex-row  rounded-lg shadow-xl justify-between items-center"
          style={{
            marginHorizontal: "8%",
            marginTop: "10%",
            paddingHorizontal: "8%",
            paddingVertical: "6%",
            shadowColor: "#171717",
            elevation: 5,
          }}
        >
          <Text
            className=" text-lg"
            style={[
              { marginTop: "2%", marginRight: "14%" },
              fonts.dmSansRegular,
            ]}
          >
            Se déconnecter
          </Text>

          <TouchableOpacity
            onPress={() => dispatch(logout())}
            style={{
              paddingVertical: "4%",
              paddingHorizontal: "3.5%",
              marginTop: "1%",
              marginLeft: "4%",
              backgroundColor: "#2941CA",
              borderRadius: 10,
            }}
            className=" flex justify-center items-center"
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
