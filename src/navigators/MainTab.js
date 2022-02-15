import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import * as theme from "constants/theme";
// import AddNotification from "../../screens/auth/AddNotification";
import SearchRequest from "screens/SearchRequest";
import Profile from "screens/Profile";

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
	tabBarIcon: ({ focused, color }) => {
		let iconName;
		if (route.name === "Search") {
			return focused ? (
				<Ionicons name="search" size={20} color={theme.colors.primary1} />
			) : (
				<Ionicons name="search" size={20} color={theme.colors.gray2} />
			);
		} else if (route.name === "Profile") {
			return focused ? (
				<FontAwesome5 name="user" size={20} color={theme.colors.primary1} />
			) : (
				<FontAwesome5 name="user" size={20} color={theme.colors.gray2} />
			);
		}
	},
	tabBarLabelStyle:{
		fontSize: 12,
	},
	tabBarActiveTintColor:theme.colors.primary1,
	tabBarInactiveTintColor:theme.colors.gray2,
	tabBarStyle: {
		paddingBottom: 5,
		height: 50,
	},
});
//main tab screen for logged in users
export default MainTab = () => {
	return (
		<Tab.Navigator initialRouteName="Search" screenOptions={screenOptions}>
			<Tab.Screen name="Search" component={SearchRequest} options={{title:"Search Request"}}/>
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
};
