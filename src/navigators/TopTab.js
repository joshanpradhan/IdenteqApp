import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as theme from "constants/theme";
//two tab screens
import TakePhoto from "screens/TakePhoto";
import UploadPhoto from "screens/UploadPhoto";
import AddURL from "screens/AddURL";

const SearchTab = createMaterialTopTabNavigator();
//Top tab screen for donate now and schedule donation screen

const screenOptions = ({ route }) => ({
	tabBarLabelStyle:{
		fontSize: 14,
		textTransform:"capitalize"
	},
	tabBarActiveTintColor:theme.colors.primary1,
	tabBarInactiveTintColor:theme.colors.gray2,
	tabBarStyle: {
		paddingBottom: 5,
		height: 50,
	},
	tabBarIndicatorStyle:{
		 borderBottomColor: theme.colors.primary1,
     borderBottomWidth: 3,
	}
});
export default TopTab = () => {
  return (
      <SearchTab.Navigator
        initialRouteName="Take Photo"
        screenOptions={screenOptions}
      >
        <SearchTab.Screen name="Take Photo" component={TakePhoto} />
        <SearchTab.Screen name="Upload Photo" component={UploadPhoto} />
        <SearchTab.Screen name="Add URL" component={AddURL}/>
      </SearchTab.Navigator>
  );
};