import { StyleSheet, Text, View ,StatusBar,Button, TouchableOpacity} from 'react-native'
import { DataTable } from 'react-native-paper';
import BackButton from "../navigation/BackButton";
import React from 'react'
import {  getReports} from "../functions/requests";
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Report = () => {
    const [report,setReport]=useState([]);
    const { token, user } = useSelector((state) => state.app);
   const [start,setStart]=useState("");
   const [end,setEnd]=useState("")

 
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [second,setSecond]=useState(false);

    const showSecond=()=>{
      setSecond(true);
    }
    const hideSecond=()=>{
      setSecond(false);
    }
    const handleSec=(dt)=>{
      let d=dt.getFullYear()+'-' + (dt.getMonth()+1) + '-'+dt.getDate();
setEnd(d);
hideSecond();
submit();

   
    }

    function submit(){
      getReports(token,start,end)
      .then((res) => {
       let __prod = res.map((p) => {
         let obj = { name: p.name, littres: p.littres,usd:p.usd,fc:p.fc };
         return obj;
       });
       setReport(__prod);
      })
      .catch((err) => console.log(err));
    }


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    
    let d=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();
  setStart(d);
    hideDatePicker();
  };
  return (
    <View>
    
         <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
          translucent={false}
        />

        
<View>

  <TouchableOpacity onPress={showDatePicker} className="rounded-md"  style={{marginTop:"40%",marginHorizontal:"10%", backgroundColor: "#2941CA",alignItems:"center" ,paddingVertical:"3%"}}>
    <Text className="text-white  ">Start date</Text>
  </TouchableOpacity>
    
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
<View>

  <TouchableOpacity onPress={showSecond} className="rounded-md"  style={{marginTop:"10%",marginHorizontal:"10%", backgroundColor: "#2941CA",alignItems:"center" ,paddingVertical:"3%"}}>
    <Text className="text-white  ">End date</Text>
  </TouchableOpacity>
    
      <DateTimePickerModal
        isVisible={second}
        mode="date"
        onConfirm={handleSec}
        onCancel={hideSecond}
      />
    </View>

      
      <DataTable style={{marginTop:"30%",paddingHorizontal:"10%"}}>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title >Littres</DataTable.Title>
          <DataTable.Title >USD</DataTable.Title>
          <DataTable.Title >FC</DataTable.Title>
        </DataTable.Header>
       {report.map((d,i)=>{
        return(
            <DataTable.Row key={i}>
            <DataTable.Cell>{d.name}</DataTable.Cell>
            <DataTable.Cell>{d.littres}</DataTable.Cell>
            <DataTable.Cell >{d.usd}</DataTable.Cell>
            <DataTable.Cell >{d.fc}</DataTable.Cell>
          </DataTable.Row>    
        )
       })}
        
       
      </DataTable>
    </View>
  )
}

export default Report

const styles = StyleSheet.create({})