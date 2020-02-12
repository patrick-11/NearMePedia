import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

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
			<Tab.Navigator>
				<Tab.Screen name = "Articles" component = {StackNavigatorScreenA}/>
				<Tab.Screen name = "Locations" component = {StackNavigatorScreenB}/>
				<Tab.Screen name = "Saved" component = {StackNavigatorScreenC}/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const App = () => {
	return (
		<TabNavigator/>
	);
}

export default App;