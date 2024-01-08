import React, { useState } from "react";
import { View, Pressable, StyleSheet, Image } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useForm, Controller } from "react-hook-form";

import { MyText } from "../utils/Typography";
import DurationSelection from "../components/DurationSelection";
import ButtonNext from "../components/ButtonNext";
import Header from "../components/Header";
import ScreenContainer from "../components/Containers/ScreenContainer";
import InputContainer from "../components/InputContainer";
import useFetchData from "../hooks/useFetchData";

import { formatDate } from "../utils/FormatDate";

const Details = ({ navigation }) => {
  const { mutate } = useFetchData();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedId, setSelectedId] = useState();
  const selectId = (id) => {
    setSelectedId(id);
  };

  const [durationError, setDurationError] = useState(false);
  const isErrorRegPlate = errors.regPlate;
  const isErrorPersCode = errors.personalCode;

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const selectDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowPicker(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  const sendUserDetails = (data) => {
    if (!selectedId) {
      setDurationError(true);
      return;
    }
    mutate({
      regPlate: data.regPlate.split(" ").join(""),
      personalCode: data.personalCode,
      startDate: date.toISOString().slice(0, 10),
      durationMonths: selectedId,
    });
    navigation.navigate("Loading");
  };

  return (
    <ScreenContainer>
      <Header
        header="Automobilio draudimas"
        headerSubtext="Įveskite savo duomenis ir gaukite geriausią draudimo pasiūlymą."
      />
      <View style={styles.formContainer}>
        <InputContainer>
          <Pressable onPress={showDatepicker}>
            <MyText small gray>
              Draudimo įsigaliojimo laikas
            </MyText>
            <View style={styles.dateInputContainer}>
              <Controller
                control={control}
                rules={{
                  required: false,
                }}
                render={({ field: { value, onChange } }) => (
                  <MyText
                    bold
                    onChangeText={(value) => onChange(value)}
                    value={value}
                  >
                    {formatDate(date)}
                  </MyText>
                )}
                name="startDate"
              />
              <Image
                source={require("../assets/calendar.png")}
                style={styles.calendar}
              />
            </View>
            {showPicker && (
              <DateTimePicker
                minimumDate={new Date()}
                value={date}
                onChange={selectDate}
              />
            )}
          </Pressable>
        </InputContainer>
        <InputContainer>
          <MyText small gray error={isErrorRegPlate}>
            Valstybinis numeris
          </MyText>
          <Controller
            name="regPlate"
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Z]{3}\s\d{3}$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MyText
                type="input"
                bold
                error={isErrorRegPlate}
                style={styles.input}
                autoCapitalize="characters"
                placeholder="AAA 000"
                placeholderTextColor={"#CCCCCC"}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </InputContainer>
        <InputContainer>
          <MyText small gray error={isErrorPersCode}>
            Asmens kodas
          </MyText>
          <Controller
            name="personalCode"
            control={control}
            rules={{
              required: true,
              maxLength: 11,
              minLength: 11,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MyText
                type="input"
                bold
                error={isErrorPersCode}
                style={styles.input}
                placeholder="30000000000"
                placeholderTextColor={"#CCCCCC"}
                keyboardType="phone-pad"
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </InputContainer>
      </View>
      <DurationSelection
        selectedId={selectedId}
        setId={selectId}
        setDurationError={setDurationError}
      />
      {durationError && <MyText error>Pasirinkite draudimo trukmę</MyText>}
      <ButtonNext handlePress={handleSubmit(sendUserDetails)} />
    </ScreenContainer>
  );
};

export default Details;

const styles = StyleSheet.create({
  // formContainer: {
  //   marginBottom: 24,
  // },
  dateInputContainer: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "space-between",
  },
  calendar: {
    marginTop: 2,
  },
});
