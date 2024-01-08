import { StyleSheet, View } from "react-native";

import { MyText } from "../../utils/Typography";

const SummaryTextContainer = ({ contentHeader, content }) => {
  return (
    <View style={styles.container}>
      <MyText regular gray>
        {contentHeader}
      </MyText>
      <MyText regular>{content}</MyText>
    </View>
  );
};

export default SummaryTextContainer;

const styles = StyleSheet.create({
  container: {
    maxHeight: 48,
  },
});
