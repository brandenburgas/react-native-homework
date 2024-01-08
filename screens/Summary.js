import { StyleSheet, View } from "react-native";

import SummaryContainer from "../components/Containers/SummaryContainer";
import ScreenContainer from "../components/Containers/ScreenContainer";
import useInsuranceOffers from "../store/insurance-offers";
import HorizontalLine from "../components/HorizontalLine";
import SummaryTextContainer from "../components/Containers/SummaryTextContainer";
import { MyText } from "../utils/Typography";

import { durationCalculation } from "../utils/FormatDate";
import { formatAmount } from "../utils/FormatAmount";

const Summary = () => {
  const { offers, selectedOffer, userInfo } = useInsuranceOffers(
    (state) => state
  );
  const confirmedOrder = offers.find(
    (offer) => offer.insurer.id === selectedOffer
  );
  return (
    <ScreenContainer style={{ justifyContent: "flex-start" }}>
      <SummaryContainer>
        <MyText bold>Privalomasis draudimas</MyText>
        <HorizontalLine />
        <SummaryTextContainer
          contentHeader="Draudimo bendrovė"
          content={durationCalculation(
            userInfo.startDate,
            userInfo.durationMonths
          )}
        />
        <SummaryTextContainer
          contentHeader="Draudimo laikotarpis"
          content={confirmedOrder.insurer.name}
        />
        <SummaryTextContainer
          contentHeader="Naudojimo paskirtis"
          content={
            confirmedOrder.riskProfile === "standard"
              ? "Standartinė rizika"
              : "Padidinta rizika"
          }
        />
        <HorizontalLine />
        <View style={styles.priceContainer}>
          <MyText regular gray>
            Draudimo įmoka
          </MyText>
          <MyText blue header xbold>
            {formatAmount(confirmedOrder.price.amount)}
          </MyText>
        </View>
      </SummaryContainer>
    </ScreenContainer>
  );
};

export default Summary;

const styles = StyleSheet.create({
  priceContainer: {
    height: 56,
  },
});
