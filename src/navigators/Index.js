import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import * as theme from "constants/theme.js";
import { OfflineNotice } from "components/Index.js";
import LoggedOutStack from "./LoggedOutStack";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#068DD3",
    background: theme.colors.white,
  },
};
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <LoggedOutStack />
      <OfflineNotice />
    </NavigationContainer>
  );
};

export default App;

