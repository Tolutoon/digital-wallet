import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { SignUp } from "./screens";

import Tabs from "./navigation/tabs";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
      screenOptions={{headerShown: false}}
      initialRouteName="SignUp"
      >
        <Stack.Screen 
        name='SignUp' component={SignUp}
        />
        <Stack.Screen name='Home' component={Tabs}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
