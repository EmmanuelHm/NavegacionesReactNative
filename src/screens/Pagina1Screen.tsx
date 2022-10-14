import React, {useEffect} from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
// import { StackScreenProps } from "@react-navigation/stack";
import { styles, colores } from '../theme/AppTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any>{};


export const Pagina1Screen = ( {navigation} : Props) => {

  useEffect(() => {

    navigation.setOptions({
      headerLeft: () => (

        <TouchableOpacity
          style={{
            marginLeft: 10
          }}
          onPress={ () => navigation.toggleDrawer() }
        >
          <Text>
            <Icon name='menu-outline' size={35} color={colores.primary} />
          </Text>
        </TouchableOpacity>


        // <Button
        //   title='Menu'
        //   onPress={ () => navigation.toggleDrawer() }
        // />
      )
    })
    
  }, [])

  return (
    <View style={ styles.globalMargin } >

      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title='Ir a página 2'
        onPress={ () => navigation.navigate('Pagina2Screen') }
      />

      {/* <Button 
        title='Ir persona'
        onPress={ () =>  navigation.navigate('PersonaScreen') }
      /> */}

      <Text style={{
        ...styles.text,
        marginVertical: 20,
        fontSize: 20, 
      }}>
          Navegar con argumentos
        </Text>

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity
          style= {{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}  
        >
          <Text>
            <Icon name='man-outline' size={35} color='white' />
          </Text>
          <Text style={ styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style= {{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}  
        >
          <Text>
            <Icon name='woman-outline' size={35} color='white' />
          </Text>
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>

      </View>

      
    </View>
  )
}
