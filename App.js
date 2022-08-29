// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Choice from './src/pages/Choice';
import Detail from './src/pages/Detail';
import Gros from './src/pages/Gros';
import Login from './src/pages/Login';


export default function App() {
  return (
    <TailwindProvider>
     
     
    {/* <View >
      <Text className="font-bold text-red-500">Open up App.js to start working on your app!</Text>
   
    </View> */}
  <Gros></Gros>
  
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
