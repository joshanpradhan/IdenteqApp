import React from "react";
import { View,Image, Dimensions } from "react-native";
import * as theme from "../constants/theme.js";
import Text from "./Text.js";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { EmptyIconComponent } from "assets/icons/Index.js";

const HEIGHT = Dimensions.get("window").height;
export default Empty = ({ iconName, title,marginTop }) => {
  return (
    <View
      style={{
        marginTop:marginTop,
        alignItems: "center",
      }}
    >
      <EmptyIconComponent />
      <Text
        color={theme.colors.gray}
        style={{ fontSize: 16, paddingVertical: "1%" }}
      >
       No Search Requests!
      </Text>
    </View>
  );
};
