import React, {useState,useContext} from 'react';
import {Button, View, Text, TextInput,Alert  } from 'react-native';
import * as firebase from 'firebase';
import * as FirebaseCore from 'expo-firebase-core';

import styles from '../style';
import {AuthContext} from '../account/AuthContext';


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [UserStatus,SetUserStatus]= useState("");
  const authContext = useContext(AuthContext);


  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
  }
  async function signIn(){
    try {
      const res= firebase.auth()
        .signInWithEmailAndPassword(email, password);
      console.log('User login successfully!');
      checkUserStatus();
      setEmail('');
      setPassword('');
      setMessage('');
      authContext.setStatus(true);


    }
    catch(error){
      setMessage(error.message);
    } 
   };


   async function signOut(){

    try{

      await firebase.auth().signOut();

      console.log('User signed out successfully!');

    }

    catch(error){

      setMessage(error.message);

    }

  };
   async function checkUserStatus(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            SetUserStatus(true);
            Alert.alert(
                "",
                "已登入",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed"),style: "cancel" }
                ],
                { cancelable: false }
              );
          
        } else {
          // No user is signed in.
        }
      });
   }
   
  return(
    <View style={styles.form}>  
      <TextInput
        style={styles.inputStyle}
        placeholder="電子信箱"
        value={email}
        onChangeText={text=>setEmail(text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="密碼"
        value={password}
        onChangeText={text=>setPassword(text)}
        maxLength={15}
        secureTextEntry={true}
      />   
      
      <Button
        title="登入"
        onPress={signIn}
        style={styles.button_sign}
      />
    <Button title="登出"
    color="#f194ff"
    onPress={signOut}
    style={styles.button_sign}/>

      <Text>{message}</Text>
      <Text>
        尚未註冊，我要註冊
      </Text>

    </View>
  )
}