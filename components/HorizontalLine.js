import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HorizontalLine = () => {
  return <View style={styles.separator}></View>;
};

export default HorizontalLine;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#00ADEE",
    opacity: 0.15,
  },
});
