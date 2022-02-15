import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//auth
import TopTab from "./TopTab";
import MainTab from "./MainTab";
import SearchResult from "screens/SearchResult";
import EditProfile from "screens/EditProfile";
import Login from "screens/Login";

const AuthStack = createNativeStackNavigator();
export default LoggedOutStack = () => {
  return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={MainTab}
        />
         <AuthStack.Screen
          name="Search Result"
          options={{ headerShown: true }}
          component={SearchResult}
        />
         <AuthStack.Screen
          name="Edit Profile"
          options={{ headerShown: true }}
          component={EditProfile}
        />
          <AuthStack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
         <AuthStack.Screen
          name="Search Profile"
          options={{ headerShown: true }}
          component={TopTab}
        />
      </AuthStack.Navigator>
  );
};
