import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
        style={{
            paddingTop: top
        }}
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={ ({route}) => ({
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary
            },
            tabBarStyle: {
                //en ios es showColor: 'transparent'
                elevation: 0
            },
            tabBarIcon: ({color, focused}) => {
                let iconName: string = '';
                switch (route.name) {
                    case 'ChatScreen':
                        iconName = 'chatbox-ellipses-outline'
                    break;
                    case 'ContactsScreen':
                        iconName = 'people-outline'
                    break;
                    case 'AlbumsScreen':
                        iconName = 'albums-outline'
                    break;
                }

                return <Icon name={iconName} size={20} color={color} />;
            }
        }) }
    >
      <Tab.Screen name="ChatScreen" options={{title: 'Chat'}} component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" options={{title: 'Contacts'}} component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" options={{title: 'Albums'}} component={AlbumsScreen} />
    </Tab.Navigator>
  );
}