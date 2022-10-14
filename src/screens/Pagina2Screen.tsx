import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react'
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/AppTheme';

export const Pagina2Screen = () => {

  const navigator = useNavigation<any>();
  // const navigator = useNavigation<string>();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras'  //Para IOS
    })
  }, [])

  return (
    <View style={ styles.globalMargin}>

        <Text style={styles.title}> Pagina2Screen </Text>

        <Button 
          title='Pagina 3'
          onPress={ () => navigator.navigate('Pagina3Screen') }
        />

    </View>
  )
}
