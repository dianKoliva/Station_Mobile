// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Choice from './src/pages/Choice';

import Login from './src/pages/Login';


export default function App() {
  return (
    <TailwindProvider>
     
     
    {/* <View >
      <Text className="font-bold text-red-500">Open up App.js to start working on your app!</Text>
   
    </View> */}
  <Choice></Choice>
  
    </TailwindProvider>
  );
}

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
// });
