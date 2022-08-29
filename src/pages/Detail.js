import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'


const Detail = () => {
  return (
    <View>
      {/* <Text>Detail</Text> */}
      <StatusBar barStyle="dark-content" backgroundColor ="white"  translucent = {false}/>
 
 <View>
 <TextInput
    className="h-14  ml-4 mr-4 p-4 mt-8 rounded-lg" 
        style={{ backgroundColor:"#F5F6F9"}}
        // onChangeText={pass=>setPassword(pass)}
        value=""
        placeholder="Produit"
   
      />
 <TextInput
    className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg" 
        style={{ backgroundColor:"#F5F6F9"}}
        // onChangeText={pass=>setPassword(pass)}
        value=""
        placeholder="plaque"
   
      />
      <View style={{flexDirection:"row"}}>
                <TextInput
                className="h-14 w-7/12 ml-4 mr-4 p-4 mt-4 rounded-lg" 
                    style={{ backgroundColor:"#F5F6F9"}}
                    // onChangeText={pass=>setPassword(pass)}
                    value=""
                    placeholder="Prix"
            
                />
                <TextInput
                className="h-14    p-4 mt-4 rounded-lg" 
                    style={{ backgroundColor:"#F5F6F9"}}
                    // onChangeText={pass=>setPassword(pass)}
                    value=""
                    placeholder="Devise"
            
                />
      </View>
      <TextInput
    className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg" 
        style={{ backgroundColor:"#F5F6F9"}}
        // onChangeText={pass=>setPassword(pass)}
        value=""
        placeholder="Quantité"
   
      />
       <TextInput
    className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg" 
        style={{ backgroundColor:"#F5F6F9"}}
        // onChangeText={pass=>setPassword(pass)}
        value=""
        placeholder="USD"
   
      />
       <TextInput
    className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg" 
        style={{ backgroundColor:"#F5F6F9"}}
        // onChangeText={pass=>setPassword(pass)}
        value=""
        placeholder="FC"
   
      />
       <TextInput
    className="h-14  ml-4 mr-4 p-4 mt-4 rounded-lg" 
        style={{ backgroundColor:"#F5F6F9"}}
        // onChangeText={pass=>setPassword(pass)}
        value=""
        placeholder="Tank"
   
      />
      

      <TouchableOpacity onPress={()=>{} } className="h-14 ml-4 mr-4 p-4 mt-8 rounded-lg " style={{backgroundColor:"#2941CA",alignItems:"center",alignContent:"center"}}>

<Text className="mt-1 text-white ">Enregistrer</Text>

      </TouchableOpacity>
    
 </View>
<View>

</View>

    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})