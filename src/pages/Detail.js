import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { fonts } from "../utils/fonts";
import BackButton from "../navigation/BackButton";
import RNPickerSelect from "react-native-picker-select/src";
import { DataTable } from "react-native-paper";
import { saveRetail, getproducts, getPrice } from "../functions/requests";
import { useSelector } from "react-redux";

const Detail = () => {
  const [hey, setHey] = useState("hello");
  const [plaque, setPlaque] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [usd, setUsd] = useState(0);
  const [fc, setFc] = useState(0);
  const [ibiciro, setIbiciro] = useState([]);

  const { token, user } = useSelector((state) => state.app);

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
    };
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
    }
  };

  useEffect(() => {
    getproducts(token)
      .then((res) => {
        let __prod = res.map((p) => {
          let obj = { label: p.nom, value: p.id };
          return obj;
        });
        setProducts(__prod);
      })
      .catch((err) => console.log(err));

    getPrice(token)
      .then((res) => {
       
        let __pri = res.map((p) => {
          let obj = { prod: p.produit, usd: p.usd, cdf: p.cdf };
          return obj;
        });
        setIbiciro(__pri);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <View
      className="bg-white flex-1 "
      style={{ paddingHorizontal: "5%", flex: 1 }}
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
        {ibiciro.map((d, index) => {
          return (
            <DataTable.Row key={index}>
              <DataTable.Cell>{d.prod}</DataTable.Cell>
              <DataTable.Cell>{d.usd}</DataTable.Cell>
              <DataTable.Cell numeric>{d.cdf}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
      <TextInput
        className=" rounded"
        style={{
          backgroundColor: "#F5F6F9",
          height: "7%",
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
          height: "7%",
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
      <TextInput
        className=" rounded"
        style={{
          backgroundColor: "#F5F6F9",
          height: "7%",
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
          height: "7%",
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
          height: "7%",
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
          height: "6%",
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
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
