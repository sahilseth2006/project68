import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import FacebookScreen from './screens/FacebookScreen'
import InstaScreen from './screens/InstaScreen';


export default function App() {
  return (
        <AppContainer/>
  
  );
}

const Tab=createBottomTabNavigator({
  Facebook:{screen:FacebookScreen},
  InstaGram:{screen:InstaScreen},
})

const AppContainer=createAppContainer(Tab)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
