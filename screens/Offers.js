import ScreenContainer from "../components/Containers/ScreenContainer";
import Header from "../components/Header";
import OfferSelection from "../components/OfferSelection";

const Offers = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Header
        header="Privalomojo draudimo pasiūlymai"
        headerSubtext="Išsirinkite geriausiai jūsų poreikius atitinkantį draudimo pasiūlymą"
      />
      <OfferSelection navigation={navigation} />
    </ScreenContainer>
  );
};

export default Offers;
