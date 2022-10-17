import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

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
          <TouchableIcon iconName="airplane-outline" />
          <TouchableIcon iconName="alarm-outline" />
          <TouchableIcon iconName="add-outline" />
          <TouchableIcon iconName="add-circle-outline" />
          <TouchableIcon iconName="american-football-outline" />
          <TouchableIcon iconName="leaf-outline" />
        </Text>
    </View>
  )
}

