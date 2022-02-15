import React from "react";
import Text from "./Text";
import * as theme from "../constants/theme.js";

export default ErrorMessage = ({ error, visible,...props }) => {
  if (!visible || !error) return null;
  return (
    <Text
      style={{paddingRight: 15 }}
      color={theme.colors.red}
      {...props}
    >
      {error}
    </Text>
  );
};
