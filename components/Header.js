import { StyleSheet, Text, View } from "react-native";

import { MyText } from "../utils/Typography";

const Header = ({ header, headerSubtext }) => {
  return (
    <View style={styles.container}>
      <MyText header white style={styles.header}>
        {header}
      </MyText>
      <MyText regular white style={styles.headerSubtext}>
        {headerSubtext}
      </MyText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 32,
  },
  header: {
    textAlign: "center",
    marginBottom: 8,
  },
  headerSubtext: {
    textAlign: "center",
  },
});
