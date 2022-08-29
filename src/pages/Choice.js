import { StyleSheet, Text, TouchableOpacity, View,Pressable } from 'react-native'
import { StatusBar } from 'react-native'
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import React from 'react'

const Choice = () => {
  return (
    <View>
          <StatusBar barStyle="dark-content" backgroundColor ="white"  translucent = {false}/>
          <View className="flex mt-12" style={{flexDirection:'row',alignItems:"center",alignSelf:"center"}}>
    <Fontisto name="blood-drop" size={54} color="#2941CA" />
    <Text className="ml-3  font-bold text-2xl" style={{color:"#2941CA"}}>Petro</Text>
    </View>


<View className="mt-16">

<Pressable className=" mx-12 mt-10 p-5 rounded-lg  shadow-xl" 
style={{flexDirection:'row',   shadowColor: '#171717',  
elevation: 5,     
   }}>
        <Text className="mt-3 ml-6 mr-14">Vente au détail</Text>
        <TouchableOpacity  style={{backgroundColor:"#2941CA"}}  className="p-2 mt-1 rounded-lg ml-4">
        <AntDesign name="right" size={20} color="white" />
        </TouchableOpacity>
    </Pressable>
<Pressable className=" mx-12 mt-10 p-5 rounded-lg  shadow-xl" 
style={{flexDirection:'row',   shadowColor: '#171717',  
elevation: 5,     
   }}>
        <Text className="mt-3 ml-6 mr-14">Vente au détail</Text>
        <TouchableOpacity  style={{backgroundColor:"#2941CA"}}  className="p-2 mt-1 rounded-lg ml-4">
        <AntDesign name="right" size={20} color="white" />
        </TouchableOpacity>
    </Pressable>
<Pressable className=" mx-12 mt-10 p-5 rounded-lg  shadow-xl" 
style={{flexDirection:'row',   shadowColor: '#171717',  
elevation: 5,     
   }}>
        <Text className="mt-3 ml-6 mr-14">Vente au détail</Text>
        <TouchableOpacity  style={{backgroundColor:"#2941CA"}}  className="p-2 mt-1 rounded-lg ml-4">
        <AntDesign name="right" size={20} color="white" />
        </TouchableOpacity>
    </Pressable>






</View>

    </View>
  )
}

export default Choice

const styles = StyleSheet.create({})