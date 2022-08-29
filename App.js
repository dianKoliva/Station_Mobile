// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import UsageStack from './src/navigation/UsageStack';
import { NavigationContainer } from '@react-navigation/native';
// import { AppContext } from './src/context/context';
import { useState } from 'react';


export default function App() {
  // const [auth,setAuth]=useState("");
  return (
    <NavigationContainer>
    <TailwindProvider>
     

  <UsageStack></UsageStack>
    </TailwindProvider>
    </NavigationContainer>
  );
}

