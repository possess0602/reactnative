import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

import { Alert, Button, StyleSheet, Text, View } from "react-native";

import Click from "./src/Click";
import ProductList from "./src/product/ProductList";

export default function App() {
  const [count, setCount] = useState(10);

  let countString = "count in App:" + count;

  function updateCount(newCount) {
    setCount(newCount);
  }

  // useEffect(() => {

  //   Alert.alert("count in App:" + count);
  // });

  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello</Text>

      {/* <Button title={countString} onPress={() => setCount(count + 1)} /> */}

      {/* <Click count={count} update={updateCount} /> */}
      <ProductList style={styles.button_data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "powderblue",

    alignItems: "center",

    justifyContent: "center",
  },
  hello: {
    flex: 0.5,
    marginTop: 100,
  },
});
