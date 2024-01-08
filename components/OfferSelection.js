import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import OfferContainer from "./Containers/OfferContainer";
import HorizontalLine from "./HorizontalLine";
import ButtonSelect from "./ButtonSelect";
import useInsuranceOffers from "../store/insurance-offers";

import { MyText } from "../utils/Typography";
import { formatAmount } from "../utils/FormatAmount";

const logos = [
  {
    name: "lietuvos-draudimas",
    src: require("../assets/lietuvos-draudimas.png"),
  },
  {
    name: "ergo",
    src: require("../assets/ergo.png"),
  },
  {
    name: "compensa",
    src: require("../assets/compensa.png"),
  },
];

const OfferSelection = ({ navigation }) => {
  const { offers, selectOffer } = useInsuranceOffers((state) => state);

  const completeOrder = (id) => {
    selectOffer(id);
    navigation.navigate("Summary");
  };

  const renderItem = (item) => {
    const logo = logos.find((image) => image.name === item.insurer.id);
    return (
      <OfferContainer key={item.insurer.id}>
        <View style={styles.logoContainer}>
          <Image source={logo.src} />
        </View>
        <HorizontalLine />
        <View style={styles.priceContainer}>
          <MyText blue header xbold>
            {formatAmount(item.price.amount, item.price.currency)}
          </MyText>
          <TouchableOpacity>
            <Image
              source={require("../assets/info.png")}
              style={styles.imageInfo}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.featureContainer}>
          <Image
            source={require("../assets/black-check.png")}
            style={styles.imageFeature}
          />
          <MyText small style={styles.featureText}>
            Transportavimas sumaišius degalus
          </MyText>
        </View>
        <ButtonSelect handlePress={() => completeOrder(item.insurer.id)} />
      </OfferContainer>
    );
  };

  return (
    <ScrollView
      horizontal
      overScrollMode="never"
      data={offers}
      renderItem={renderItem}
      snapToInterval={190}
      decelerationRate={0}
      showsHorizontalScrollIndicator={false}
      style={{ overflow: "visible" }}
    >
      {offers.map((item) => renderItem(item))}
    </ScrollView>
  );
};

export default OfferSelection;

const styles = StyleSheet.create({
  logoContainer: {
    height: 139,
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    height: 36,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featureContainer: {
    minHeight: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  imageFeature: {
    height: 28,
    width: 28,
  },
  featureText: {
    width: 164,
    lineHeight: 16,
  },
  imageInfo: {
    height: 36,
    width: 36,
  },
});
