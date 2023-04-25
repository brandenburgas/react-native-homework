import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import ScreenContainer from "../components/Containers/ScreenContainer";
import { MyText } from "../utils/Typography";

const Loading = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Offers");
  }, 3000);

  return (
    <ScreenContainer>
      <Header header="Ieškome geriausių draudimo pasiūlymų" />
    </ScreenContainer>
  );
};

export default Loading;
