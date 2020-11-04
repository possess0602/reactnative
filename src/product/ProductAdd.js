import React, { useState } from "react";

import { Button, TextInput, View } from "react-native";
import * as firebase from 'firebase';

import firestore from 'firebase/firestore';

import * as FirebaseCore from 'expo-firebase-core';


export default function ProductAdd(props) {
  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  if (!firebase.apps.length) {

    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);

  } 

  const db = firebase.firestore();



  async function update(){

    try {

      const docRef = await db.collection("product").add({

        name: name,

        price: parseInt(price)

      });

      console.log(docRef.id);

      setName("");

      setPrice("");

      props.update();

    }

    catch(error) {

      console.error("Error adding document: ", error);

    }

  }
  function cancel(){

    setName("");

    setPrice("");

    props.update();

  }



  return (
    <View>
      <TextInput
        placeholder="產品說明"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        placeholder="價格"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />

      <Button onPress={update} title="新增" />
      <Button onPress={cancel} title="取消" />

    </View>
  );
}
