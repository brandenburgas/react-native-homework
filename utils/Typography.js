import { StyleSheet, Text, TextInput } from "react-native";

const styles = StyleSheet.create({
  regularText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  headerText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 24,
  },
  boldText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  extraBold: {
    fontFamily: "Poppins-Bold",
  },
  smallText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    lineHeight: 16,
  },
  white: {
    color: "#FFFFFF",
  },
  gray: {
    color: "#A0A0A0",
  },
  blue: {
    color: "#00ADEE",
  },
  error: {
    color: "#FF0000",
  },
});

export function MyText(props) {
  const {
    type,
    style,
    regular,
    bold,
    xbold,
    header,
    small,
    blue,
    white,
    gray,
    error,
    ...rest
  } = props;

  const textStyle = [style];

  if (regular) {
    textStyle.push(styles.regularText);
  }

  if (bold) {
    textStyle.push(styles.boldText);
  }

  if (header) {
    textStyle.push(styles.headerText);
  }

  if (small) {
    textStyle.push(styles.smallText);
  }

  if (white) {
    textStyle.push(styles.white);
  }
  if (gray) {
    textStyle.push(styles.gray);
  }

  if (blue) {
    textStyle.push(styles.blue);
  }

  if (error) {
    textStyle.push(styles.error);
  }

  if (xbold) {
    textStyle.push(styles.extraBold);
  }

  if (type === "input") {
    return (
      <TextInput {...rest} style={textStyle}>
        {props.children}
      </TextInput>
    );
  }

  return (
    <Text {...rest} style={textStyle}>
      {props.children}
    </Text>
  );
}
