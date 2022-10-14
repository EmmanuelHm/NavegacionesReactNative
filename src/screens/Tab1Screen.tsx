import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tab1Screen = () => {

  const {top} = useSafeAreaInsets()

  useEffect(() => {
    console.log('Tab 1 Screen effect');
  }, [])

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 20
    }}>
        <Text style={styles.title}>Iconos</Text>
        <Text>
          <Icon name="airplane-outline" size={80} color={colores.primary} />;
          <Icon name="alarm-outline" size={80} color={colores.primary} />;
          <Icon name="add-outline" size={80} color={colores.primary} />;
          <Icon name="add-circle-outline" size={80} color={colores.primary} />;
          <Icon name="american-football-outline" size={80} color={colores.primary} />;
          <Icon name="leaf-outline" size={80} color={colores.primary} />;
        </Text>
    </View>
  )
}

