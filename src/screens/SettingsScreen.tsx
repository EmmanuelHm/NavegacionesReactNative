import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colores } from '../theme/AppTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from 'react-native-reanimated';

export const SettingsScreen = () => {

  //Hook para hacer SafeArea
  const insets = useSafeAreaInsets();

  // Obtener informacion del context (AuthContext)
  const { authState } = useContext(AuthContext)

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
    }}>
      <Text style={styles.title}>SettingsScreen</Text>

      <Text style={ styles.text }> {JSON.stringify(authState, null, 4)} </Text>

      {
        authState.favoriteIcon && (
          <Icon 
            name={ authState.favoriteIcon }
            size={ 150 }
            color={ colores.primary}
          />
        )
      }



    </View>
  )
}
