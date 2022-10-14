import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { View, Image, Text } from 'react-native';
import { styles, colores } from '../theme/AppTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  return (
    <Drawer.Navigator
      drawerContent={ (props) => <MenuInterno {...props} /> }
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
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

      <View style={styles.menuContainer}>

        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={20} color='black' />
          <Text style={styles.menuTexto}> Navegación</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{
            ...styles.menuBoton,
            flexDirection: 'row'
          }}
          onPress={ () => navigation.navigate('SettingsScreen')}
        >
          <Icon name="construct-outline" size={20} color='black' />
          <Text style={styles.menuTexto}> Ajustes</Text>
        </TouchableOpacity>
        
      </View>

    </DrawerContentScrollView>
  )
}