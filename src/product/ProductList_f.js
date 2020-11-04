import React, { useState, useEffect } from "react";
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import * as FirebaseCore from 'expo-firebase-core';


import {
  FlatList,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Button,
  ActivityIndicator,
  isLoading,
  YellowBox
} from "react-native";

import styles from "../style";
import ProductAdd from "./ProductAdd";
import { Icon, Fab } from "native-base";


// const data =[

//   {name:"iPhone 7", price:12000},

//   {name:"iPhone 8", price:10000},

//   {name:"iPhone X", price:20000},

// ]

export default function ProductList_f() {
  YellowBox.ignoreWarnings(['Setting a timer']);

  const [modalVisible, setModalVisible] = useState(false);

  const [selected, setSelected] = useState(null);
  // const [products, setProducts] = useState([

  //   {desc:"iPad", price:20000},

  //   {desc:"iPhone X", price:30000}

  //   ]);
  // const [camera, setCamera] = useState([
  //   { desc: "Canon", price: 20000 },

  //   { desc: "Nikon", price: 87000 },
  // ]);
  const [products, setProducts] = useState([]);



  const renderItem = ({ item, index }) => {
    const backgroundColor = index === selected ? "white" : "pink";

    return (
      <TouchableOpacity
        onPress={() => setSelected(index)}
        style={[styles.item, { backgroundColor }]}
      >
        <Text style={styles.title}>{item.desc}</Text>

        <Text>{item.price}</Text>

        <Text>/{index}</Text>
      </TouchableOpacity>
    );
  };


  if (!firebase.apps.length) {

    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);

  }

  

  const db = firebase.firestore();



  async function readData(){
    const newProducts=[];

    try {

      const querySnapshot = await db.collection("product").get();

      querySnapshot.forEach((doc) => {
        const newProduct = {

          desc:doc.data().name,

          price:doc.data().price

        }

        newProducts.push(newProduct);

      });//foreach

      setProducts(newProducts);

    }//try

  catch(e){console.log(e);}

  }//readData

  

  useEffect(()=>{

    readData();}

    ,[modalVisible]

  );

  function update(newProduct){

    setModalVisible(false);

  };
  function hide(){
    setModalVisible(false);

  }

  return (
    <View style={styles.container}>
      {!isLoading ?
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      ></FlatList>
      :
      <View style={styles.loading}>
        <ActivityIndicator color="red" size="large" animating={isLoading} />
      </View>
      }
      


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <ProductAdd update={update} />
            <Button style={styles.closeButton} onPress={() => setModalVisible(!modalVisible)} title="close" />


          </View>
        </View>
        
      </Modal>
      
      <Fab
        onPress={() => setModalVisible(true)}
        modalVisible={modalVisible}
        style={styles.openButton}
      >
        <Icon ios="ios-add" android="md-add" />
      </Fab>
    </View>
  );
}
