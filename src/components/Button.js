import React from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import * as theme from "../constants/theme";
const { width } = Dimensions.get("window");

export default Button = ({ style, full, opacity, children, ...props }) => {
  const buttonStyles = [styles.button, full && styles.full, style];
  return (
    <TouchableOpacity activeOpacity={0.9} style={buttonStyles} {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    height: 52,
    paddingVertical: 11,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary1,
  },
  full: {
    width: width-400,
  },
});
