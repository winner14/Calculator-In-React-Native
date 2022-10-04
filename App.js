import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./screens/Calculator";

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "rgb(181, 227, 245)",
    // alignItems: "center",
    // justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
