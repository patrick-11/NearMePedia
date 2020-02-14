import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "unstated";
import {Icon} from "native-base";

import ScreenA from "./App/screens/ScreenA";
import ScreenB from "./App/screens/ScreenB";
import ScreenC from "./App/screens/ScreenC";


const Stack = createStackNavigator();

const StackNavigatorScreenA = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name = "Articles" component = {ScreenA}/>
		</Stack.Navigator>
	);
}

const StackNavigatorScreenB = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name = "Locations" component = {ScreenB}/>
		</Stack.Navigator>
	);
}

const StackNavigatorScreenC = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name = "Saved" component = {ScreenC}/>
		</Stack.Navigator>
	);
}


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName = "Locations">
				<Tab.Screen
					name = "Articles"
					component = {StackNavigatorScreenA}
					options = {{tabBarIcon: () => <Icon name = "ios-paper"/>}}
				/>
				<Tab.Screen
					name = "Locations"
					component = {StackNavigatorScreenB}
					options = {{tabBarIcon: () => <Icon name = "ios-search"/>}}
				/>
				<Tab.Screen
					name = "Saved"
					component = {StackNavigatorScreenC}
					options = {{tabBarIcon: () => <Icon name = "md-arrow-down"/>}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const App = () => {
	return (
		<Provider>
			<TabNavigator/>
		</Provider>
	);
}

export default App;