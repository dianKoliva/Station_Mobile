import { StyleSheet, Text, View } from 'react-native'
import { DataTable } from 'react-native-paper';
import BackButton from "../navigation/BackButton";
import React from 'react'
import {  getReports} from "../functions/requests";
import { useEffect } from 'react';
import { useState } from 'react';

const Report = () => {
    const [report,setReport]=useState([]);

    useEffect(() => {
        getReports(token)
     .then((res) => {
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
         <  BackButton  />
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Produit</DataTable.Title>
          <DataTable.Title>USD</DataTable.Title>
          <DataTable.Title numeric>CDF</DataTable.Title>
        </DataTable.Header>
       
            <DataTable.Row>
            <DataTable.Cell>heeloo</DataTable.Cell>
            <DataTable.Cell>koko</DataTable.Cell>
            <DataTable.Cell numeric>80</DataTable.Cell>
          </DataTable.Row>
       
      </DataTable>
    </View>
  )
}

export default Report

const styles = StyleSheet.create({})