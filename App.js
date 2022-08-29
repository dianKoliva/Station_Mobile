// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Choice from './src/pages/Choice';
import Detail from './src/pages/Detail';
import Gros from './src/pages/Gros';
import Login from './src/pages/Login';
import { AppContext } from './src/context/context';
import { useState } from 'react';


export default function App() {
  const [auth,setAuth]=useState("");
  return (
    <AppContext.Provider value={{auth,setAuth}}>
    <TailwindProvider>
     
  <Gros></Gros>
  
    </TailwindProvider>
    </AppContext.Provider>
  );
}

