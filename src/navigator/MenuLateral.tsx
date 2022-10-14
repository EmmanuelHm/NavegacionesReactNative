import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { View, Image, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  return (
    <Drawer.Navigator
      drawerContent={ (props) => <MenuInterno {...props} /> }
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>

      {/* Parte del Avatar */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg'
          }}
          style={styles.avatar}
        />
      </View>

      {/* Opciones de Menu */}

      <View style={ styles.menuContainer}>

        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={ () => navigation.navigate('StackNavigator')}
        >
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuBoton}
          onPress={ () => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
        
      </View>

    </DrawerContentScrollView>
  )
}