import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Tab1Screen } from "../screens/Tab1Screen";

import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/AppTheme';
import { Text, Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from "react-native-reanimated";

export const Tabs = () => {
  return Platform.OS === 'ios' 
    ? <TabsIOS />
    : <TabsAndroid />
}

// ----------------Bottom Tab for Android----------------
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={ ({route}) => ({
        tabBarIcon: ({color,focused}) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'archive-outline'
            break;
            case 'TopTabNavigator':
              iconName = 'american-football-outline'
            break;
            case 'StackNavigator':
              iconName =  'albums-outline'
            break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        }
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{ title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


// ----------------Bottom Tab for IOS----------------
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ({route}) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle:{
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarIcon: ({color, focused, size}) => {

          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'archive-outline'
            break;
            case 'TopTabNavigator':
              iconName = 'american-football-outline'
            break;
            case 'StackNavigator':
              iconName =  'albums-outline'
            break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        }
        })
      }
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: () => <Text>T1</Text> }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{ title: 'TopTab'}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack'}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}