import { StyleSheet, TouchableOpacity } from "react-native";
import { MyText } from "../utils/Typography";

const ButtonNext = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <MyText bold white>
        Toliau
      </MyText>
    </TouchableOpacity>
  );
};

export default ButtonNext;

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#333333",
  },
});
