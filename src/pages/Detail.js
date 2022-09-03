import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { fonts } from "../utils/fonts";
import BackButton from "../navigation/BackButton";
import { getTanks, saveRetail } from "../functions/requests";
import RNPickerSelect from "react-native-picker-select/src";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Detail = () => {
  const { token, user } = useSelector((state) => state.app);
  const navigation = useNavigation();

  const [tanks, setTanks] = useState([]);

  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [plaque, setPlaque] = useState("");
  const [devise, setDevise] = useState("");
  const [quantity, setQuantity] = useState("");
  const [usd, setUsd] = useState("");
  const [fc, setFc] = useState("");
  const [tank, setTank] = useState("");

  const enregistrer = () => {
    let data = {
      user,
      station: 1,
      plaque,
      product,
      quantite: quantity,
      prix: price,
      currency: devise,
      usd,
      cdf: fc,
      tank: parseInt(tank),
    };
    saveRetail(token, data)
      .then((res) => {
        Alert.alert(
          "Station",
          "Detail saved!",
          [
            {
              text: "OK",
              onPress: navigation.goBack(),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTanks(token)
      .then((res) => {
        let __tanks = res.map((t) => {
          let obj = { label: t.nom, value: t.id };
          return obj;
        });
        setTanks(__tanks);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView className="bg-white flex-1 px-1">
      <BackButton />
      <Text
        className="ml-4 text-2xl "
        style={[fonts.dmSansBold, { color: "#2941CA" }]}
      >
        Detail
      </Text>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />

      <View>
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded"
          style={{ backgroundColor: "#F5F6F9" }}
          value={product}
          onChangeText={(text) => setProduct(text)}
          placeholder="Produit"
        />
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded"
          style={{ backgroundColor: "#F5F6F9" }}
          value={plaque}
          onChangeText={(text) => setPlaque(text)}
          placeholder="Plaque"
        />
        <View style={{ flexDirection: "row" }} className="mr-4">
          <TextInput
            className="h-14 w-7/12 ml-4 mr-4 p-4 mt-4 rounded"
            style={{ backgroundColor: "#F5F6F9" }}
            value={price}
            onChangeText={(text) => setPrice(text)}
            placeholder="Prix"
            keyboardType="numeric"
          />
          <TextInput
            className="h-14 w-4/12     p-4 mt-4 rounded"
            style={{ backgroundColor: "#F5F6F9" }}
            value={devise}
            onChangeText={(text) => setDevise(text)}
            placeholder="Devise"
          />
        </View>
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded"
          style={{ backgroundColor: "#F5F6F9" }}
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
          placeholder="Quantité"
          keyboardType="numeric"
        />
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded"
          style={{ backgroundColor: "#F5F6F9" }}
          value={usd}
          onChangeText={(text) => setUsd(text)}
          placeholder="USD"
          keyboardType="numeric"
        />
        <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded"
          style={{ backgroundColor: "#F5F6F9" }}
          value={fc}
          onChangeText={(text) => setFc(text)}
          placeholder="FC"
          keyboardType="numeric"
        />
        <View className="px-2">
          <RNPickerSelect
            placeholder={{
              label: "Tank",
              value: null,
            }}
            onValueChange={(value) => setTank(value)}
            items={tanks}
          />
        </View>

        <TouchableOpacity
          onPress={enregistrer}
          className="h-14 ml-4 mr-4 p-4 mt-6 rounded flex-row justify-center items-center mb-2"
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
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
