import React, { useState } from "react";

import {
  FlatList,
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Button
} from "react-native";

import styles from "../style";
import ProductAdd from "./ProductAdd";
import { Icon, Fab } from "native-base";

// const data =[

//   {name:"iPhone 7", price:12000},

//   {name:"iPhone 8", price:10000},

//   {name:"iPhone X", price:20000},

// ]

export default function ProductList() {
  const [modalVisible, setModalVisible] = useState(false);

  const [selected, setSelected] = useState(null);
  // const [products, setProducts] = useState([

  //   {desc:"iPad", price:20000},

  //   {desc:"iPhone X", price:30000}

  //   ]);
  const [camera, setCamera] = useState([
    { desc: "Canon", price: 20000 },

    { desc: "Nikon", price: 87000 },
  ]);

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

  function update(newProduct) {
    setCamera((oldProducts) => [...oldProducts, newProduct]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={camera}
        renderItem={renderItem}
        keyExtractor={(item) => item.desc}
      ></FlatList>
      <Fab
        onPress={() => setModalVisible(true)}
        modalVisible={modalVisible}
        style={styles.openButton}
      >
        <Icon ios="ios-add" android="md-add" />
      </Fab>
      
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
    </View>
  );
}
