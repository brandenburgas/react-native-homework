import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OfferContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default OfferContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 320,
    width: 240,
    padding: 16,
    marginRight: 14,
    borderRadius: 16,
    gap: 8,
    backgroundColor: "#FFF",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 16,
  },
});
