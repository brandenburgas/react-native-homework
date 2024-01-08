import { StyleSheet, View } from "react-native";
import React from "react";

const InputContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default InputContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    height: 80,
    width: "100%",
    borderRadius: 8,
    padding: 16,
    gap: 8,
    marginBottom: 4,
  },
});
