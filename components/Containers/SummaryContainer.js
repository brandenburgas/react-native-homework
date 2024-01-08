import { StyleSheet, Text, View } from "react-native";

const SummaryContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default SummaryContainer;

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 370,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 16,
    backgroundColor: "#FFFFFF",
  },
});
