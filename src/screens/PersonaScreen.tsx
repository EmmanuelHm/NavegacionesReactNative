import React, {useContext, useEffect} from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

// interface RouteParams{
//   id: number, 
//   nombre: string 
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ({route, navigation}: Props) => {

  // const params = route.params as RouteParams
  const params = route.params
  // console.log(params)

  const { changeUsername } = useContext(AuthContext)

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre
    })
  }, [])

  useEffect(() => {
    changeUsername(params.nombre)
  }, [])

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>
          {
            (JSON.stringify(params, null, 3))
          }
        </Text>
    </View>
  )
}
