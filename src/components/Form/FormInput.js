import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Text from "./../Text";
import Block from "./../Block";
import * as theme from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

export default function FormInput({
  label,
  rightLabel,
  full,
  email,
  phone,
  number,
  password,
  style,
  focus,
  IconComponent,
  visible,
  error,
  ...props
}) {
  const [toggleSecure, setToggleSecure] = useState(false);
  const isSecure = toggleSecure ? false : password;
  const inputStyles = [styles.input, full && styles.full, style];

  const inputType = email
    ? "email-address"
    : number
    ? "phone-pad"
    : phone
    ? "phone-pad"
    : "default";

  const renderToggle = () => {
    return (
      <TouchableOpacity
        style={styles.toggle}
        onPress={() => setToggleSecure(!toggleSecure)}
      >
        {password && (
          <Ionicons
            color="#676767"
            size={24}
            style={{
              paddingRight: "6%",
            }}
            name={toggleSecure ? "md-eye" : "md-eye-off"}
          />
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ paddingBottom: 8 }}>
      {label ? (
        <Text style={{ fontSize: 14, color: "#333333" }}>{label}</Text>
      ) : (
        <View />
      )}
      {IconComponent == undefined ? (
        <View style={[styles.searchSection, { paddingHorizontal: "0%" }]}>
          <TextInput
            disableFullscreenUI={true}
            style={[inputStyles, { paddingRight: "10%" }]}
            secureTextEntry={isSecure}
            autoCorrect={false}
            keyboardType={inputType}
            returnKeyType="next"
            autoCapitalize="none"
            importantForAutofill="no"
            autoComplete="off"
            autoCorrect={false}
            {...props}
          />
        </View>
      ) : (
        <View
          style={[
            styles.searchSection,
            {
              borderColor: visible && error ? "#DE4132" : "#F7F8F9",
              borderWidth: 1,
            },
          ]}
        >
          <IconComponent />
          <TextInput
            disableFullscreenUI={true}
            style={[
              inputStyles,
              { borderBottomWidth: 0, paddingHorizontal: 10 },
            ]}
            secureTextEntry={isSecure}
            autoCorrect={false}
            keyboardType={inputType}
            returnKeyType="next"
            autoCapitalize="none"
            importantForAutofill="no"
            autoComplete="off"
            autoCorrect={false}
            {...props}
          />
        </View>
      )}

      {renderToggle()}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontFamily: "roboto",
    fontSize: 14,
    color: theme.colors.solidGray,
    height: 50,
    paddingRight: "20%",
    width: "100%",
    borderColor: "#B1ACAC",
    borderBottomWidth: 0.6,
  },
  searchSection: {
    paddingHorizontal: "4%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    borderColor: "#F7F8F9",
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    top: theme.sizes.base * 1.2,
    right: 0,
  },
  full: {
    width: width - 240,
  },
});
