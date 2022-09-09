import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import { DataTable } from 'react-native-paper';
import BackButton from "../navigation/BackButton";
import React from 'react'
import {  getReports} from "../functions/requests";
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from "react-redux";

const Report = () => {
    const [report,setReport]=useState([]);
    const { token, user } = useSelector((state) => state.app);

    useEffect(() => {
        getReports(token)
     .then((res) => {
        console.log(res);
      let __prod = res.map((p) => {
        let obj = { name: p.name, littres: p.littres,usd:p.usd,fc:p.fc };
        return obj;
      });
      setReport(__prod);
    })
    .catch((err) => console.log(err));
        
   
        
    }, []);
  return (
    <View>
    
         <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
          translucent={false}
        />
      
      <DataTable style={{marginTop:"50%",paddingHorizontal:"10%"}}>
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