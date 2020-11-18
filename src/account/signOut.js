import React, {useState,useContext} from 'react';

import {Button, View, Text } from 'react-native';

import * as firebase from 'firebase';

import * as FirebaseCore from 'expo-firebase-core';

import styles from '../style';

import {AuthContext} from '../account/AuthContext';


export default function SignOut() {

  if (!firebase.apps.length) {

    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);

  }

  

  const [message, setMessage] = useState("");

  

  async function signOut(){

    try{

      await firebase.auth().signOut();
      authContext.setStatus(false);

      console.log('User signed out successfully!');

    }

    catch(error){

      setMessage(error.message);

    }

  };



  return(

    <View style={styles.form}>  

      <Text>{message}</Text>      

      <Button

        title="登出"

        onPress={signOut}

      />

      <Text>{message}</Text>

      <Text>

        我要登入

      </Text>                          

    </View>

  )

}