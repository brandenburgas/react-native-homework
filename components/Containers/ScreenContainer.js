import { StyleSheet, View } from "react-native";

const ScreenContainer = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingHorizontal: 24,
  },
});
