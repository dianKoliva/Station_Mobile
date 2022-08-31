import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authenticate } from "./store/reducers";
import AuthStack from "./navigation/AuthStack";
import UsageStack from "./navigation/UsageStack";
import { TailwindProvider } from "tailwindcss-react-native";

export default function Main() {
  const { isAuth } = useSelector((state) => state.app);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@station_token");
      if (value) {
        console.log("Logged In");
        //   let decoded = jwt_decode(value);
        //   authenticate({ token: value, user: decoded });
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <NavigationContainer>
      <TailwindProvider>
        {isAuth ? <AuthStack /> : <UsageStack />}
      </TailwindProvider>
    </NavigationContainer>
  );
}
