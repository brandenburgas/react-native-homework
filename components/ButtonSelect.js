import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { MyText } from "../utils/Typography";

const ButtonSelect = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <MyText bold white>
        Pasirinkti
      </MyText>
    </TouchableOpacity>
  );
};

export default ButtonSelect;

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#00ADEE",
  },
});
