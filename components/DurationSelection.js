import { StyleSheet, View, Pressable, ScrollView } from "react-native";
import { MyText } from "../utils/Typography";

const POLICY_DURATION = [
  { id: 1, durationMonths: 1 },
  { id: 3, durationMonths: 3 },
  { id: 6, durationMonths: 6 },
  { id: 12, durationMonths: 12 },
];

const DurationSelection = ({ selectedId, setId, setDurationError }) => {
  const renderItem = ({ id, durationMonths }) => {
    const isSelected = id === selectedId;
    const selectDuration = () => {
      setId(id);
      setDurationError(false);
    };

    const selectedItemStyle = [
      styles.selectionContainer,
      selectedId === id && styles.selectedItemBackground,
    ];

    return (
      <Pressable style={selectedItemStyle} onPress={selectDuration} key={id}>
        <MyText bold blue={!isSelected} white={isSelected}>
          {`${durationMonths} `}
          {durationMonths % 10 === 1 && durationMonths !== 11
            ? "mėnuo"
            : (durationMonths >= 2 && durationMonths <= 9) ||
              (durationMonths % 10 > 1 && durationMonths > 20)
            ? "mėnėsiai"
            : "mėnesių"}
        </MyText>
      </Pressable>
    );
  };

  return (
    <View>
      <MyText regular white>
        Draudimo trukmė
      </MyText>
      <ScrollView
        horizontal
        overScrollMode="never"
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={{ overflow: "visible" }}
      >
        {POLICY_DURATION.map((item) => renderItem(item))}
      </ScrollView>
    </View>
  );
};

export default DurationSelection;

const styles = StyleSheet.create({
  selectionContainer: {
    backgroundColor: "#ffffff",
    marginTop: 16,
    marginRight: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
  },

  selectedItemBackground: {
    backgroundColor: "#333333",
  },
});
