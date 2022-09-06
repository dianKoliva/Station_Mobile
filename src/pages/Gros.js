import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar ,Alert} from "react-native";
import { fonts } from "../utils/fonts";
import BackButton from "../navigation/BackButton";
import { getTanks, saveRetail ,getStations,getproducts, saveGros} from "../functions/requests";
import RNPickerSelect from "react-native-picker-select/src";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const Gros = () => {
  const { token, user } = useSelector((state) => state.app);
  const navigation = useNavigation();

  const [tanks, setTanks] = useState([]);

  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [plaque, setPlaque] = useState("");
  const [devise, setDevise] = useState("");
  const [quantity, setQuantity] = useState("");
  const [usd, setUsd] = useState(0);
  const [fc, setFc] = useState(0);
  const [tank, setTank] = useState("");
  const [stations,setStations]=useState([]);
  const [station,setStation]=useState("");

  const [nom,setNom]=useState("");
  const [tel,setTel]=useState("");
  const [products,setProducts]=useState([]);
  const [currency,setCurrency]=useState([{label:"USD",value:"USD"},{label:"FRC",value:"FRC"}]);
 

  const enregistrer = () => {
    let data = {
      nom_client:nom,
      telephone:tel,
      user,
      station,
      plaque,
      produit:product,
      quantite: quantity,
      prix: price,
      currency: devise,
      usd,
      cdf: "0",
      tank: parseInt(tank),
    };
    console.log(data);
    if(plaque==""||quantity==""||prix==""||nom==""||tel==""){
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
    
    }else{
      saveGros(token, data)
      .then((res) => {
        Alert.alert(
          "Station",
          "Gros saved!",
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
    getTanks(token)
      .then((res) => {
        let __tanks = res.map((t) => {
          let obj = { label: t.nom, value: t.id };
          return obj;
        });
        setTanks(__tanks);
      })
      .catch((err) => console.log(err));

      getStations(token)
      .then((res) => {
        let __Stations = res.map((st) => {
          let obj = { label: st.nom, value: st.id };
          return obj;
        });
        setStations(__Stations);
      })
      .catch((err) => console.log(err));

      getproducts(token)
   .then((res) => {
    let __prod = res.map((p) => {
      let obj = { label: p.nom, value: p.id };
      return obj;
    });
    setProducts(__prod);
  })
  .catch((err) => console.log(err));
      
  }, []);

  return (
    <ScrollView className="bg-white flex-1 px-1">
      <  BackButton />
      <Text
        className="ml-4 text-2xl "
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
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded"
          style={{ backgroundColor: "#F5F6F9" }}
          value={nom}
          onChangeText={(text) => setNom(text)}
          placeholder="Nom_client"
        />
           <TextInput
          className="h-14  ml-4 mr-4 p-4 mt-4 rounded"
          style={{ backgroundColor: "#F5F6F9" }}
          value={tel}
          onChangeText={(text) => setTel(text)}
          placeholder="Telephone"
        />
      <RNPickerSelect
            placeholder={{
              label: "Produit",
              value: null,
            }}
            onValueChange={(value) => setProduct(value)}
            items={products}
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
        
         
        </View>
        <View>
          <RNPickerSelect
           style={{marginLeft:"2px"}}
            placeholder={{
              label: "Devise",
              value: null,
            }}
            onValueChange={(value) => setDevise(value)}
            items={currency}
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
         <View className="px-2"  style={{ backgroundColor: "#F5F6F9" }}>
          <RNPickerSelect
            placeholder={{
              label: "Station",
              value: null,
            }}
            onValueChange={(value) => setStation(value)}
            items={stations}
          />
        </View>
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

export default Gros;

const styles = StyleSheet.create({});
