import {
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import { useState } from "react";
import { fonts } from "../utils/fonts";
import RNPickerSelect from "react-native-picker-select/src";
import { DataTable } from "react-native-paper";
import { saveRetail } from "../functions/requests";
import { useSelector } from "react-redux";

const Detail = ({ navigation }) => {
  const [plaque, setPlaque] = useState("");
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [usd, setUsd] = useState(0);
  const [fc, setFc] = useState(0);
  const [devise, setDevise] = useState("USD");
  const [mode, setMode] = useState([]);

  const { token, user, prices, products, modes } = useSelector(
    (state) => state.app
  );

  const enregistrer = () => {
    let data = {
      user,
      plaque,
      produit: product,
      quantite: quantity,
      prix: price,
      currency: devise,
      usd,
      cdf: "0",
      payment_mode: mode,
    };
    console.log(token);
    if (plaque == "" || quantity == "" || price == "") {
      Alert.alert(
        "Station",
        "No input should be left empty",
        [
          {
            text: "OK",
          },
        ],
        { cancelable: false }
      );
    } else {
      saveRetail(token, data)
        .then((res) => {
          Alert.alert(
            "Station",
            "Enregistré!",
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
    }
  };

  return (
    <ScrollView
      className="bg-white flex-1"
      contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: "5%" }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />

      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Produit</DataTable.Title>
          <DataTable.Title>USD</DataTable.Title>
          <DataTable.Title numeric>CDF</DataTable.Title>
        </DataTable.Header>
        {prices.map((d, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{d.prod}</DataTable.Cell>
              <DataTable.Cell>{d.usd}</DataTable.Cell>
              <DataTable.Cell numeric>{d.cdf}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
      <View
        className="rounded"
        style={{
          backgroundColor: "#F5F6F9",
          height: 50,
          marginLeft: "4%",
          marginRight: "4%",
          marginTop: "4%",
        }}
      >
        <RNPickerSelect
          placeholder={{
            label: "Product",
            value: null,
          }}
          onValueChange={(value) => setProduct(value)}
          items={products}
        />
      </View>
      <TextInput
        className=" rounded"
        style={{
          backgroundColor: "#F5F6F9",
          height: 45,
          marginLeft: "4%",
          marginRight: "4%",
          padding: "2%",
          marginTop: "4%",
        }}
        value={plaque}
        onChangeText={(text) => setPlaque(text)}
        placeholder="Plaque"
      />
      <TextInput
        className="  rounded"
        style={{
          backgroundColor: "#F5F6F9",
          height: 45,
          marginLeft: "4%",
          marginRight: "4%",
          padding: "2%",
          marginTop: "4%",
        }}
        value={price}
        onChangeText={(text) => setPrice(text)}
        placeholder="Prix"
        keyboardType="numeric"
      />

      <View
        className="rounded"
        style={{
          backgroundColor: "#F5F6F9",
          height: 50,
          marginLeft: "4%",
          marginRight: "4%",
          marginTop: "4%",
        }}
      >
        <RNPickerSelect
          placeholder={{
            label: "Devise",
            value: null,
          }}
          onValueChange={(value) => setDevise(value)}
          items={[
            { label: "USD", value: "USD" },
            { label: "FC", value: "FC" },
          ]}
        />
      </View>

      <View
        className="rounded"
        style={{
          backgroundColor: "#F5F6F9",
          height: 50,
          marginLeft: "4%",
          marginRight: "4%",
          marginTop: "4%",
        }}
      >
        <RNPickerSelect
          placeholder={{
            label: "Mode de paiement",
            value: null,
          }}
          onValueChange={(value) => setMode(value)}
          items={modes}
        />
      </View>

      <TextInput
        className=" rounded"
        style={{
          backgroundColor: "#F5F6F9",
          height: 45,
          marginLeft: "4%",
          marginRight: "4%",
          padding: "2%",
          marginTop: "4%",
        }}
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
        placeholder="Quantité"
        keyboardType="numeric"
      />
      <TextInput
        className=" rounded"
        style={{
          backgroundColor: "#F5F6F9",
          height: 45,
          marginLeft: "4%",
          marginRight: "4%",
          padding: "2%",
          marginTop: "4%",
        }}
        value={usd}
        onChangeText={(text) => setUsd(text)}
        placeholder="USD"
        keyboardType="numeric"
      />
      <TextInput
        className=" rounded"
        style={{
          backgroundColor: "#F5F6F9",
          height: 45,
          marginLeft: "4%",
          marginRight: "4%",
          padding: "2%",
          marginTop: "4%",
        }}
        value={fc}
        onChangeText={(text) => setFc(text)}
        placeholder="FC"
        keyboardType="numeric"
      />

      <TouchableOpacity
        onPress={enregistrer}
        className=" rounded flex-row justify-center items-center "
        style={{
          height: 45,
          marginLeft: "4%",
          marginRight: "4%",
          padding: "0%",
          marginTop: "4%",
          marginBottom: "2%",
          backgroundColor: "#2941CA",
        }}
      >
        <Text className="text-lg text-white" style={fonts.dmSansMedium}>
          Enregistrer
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Detail;
