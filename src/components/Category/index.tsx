import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

interface CategoryProps extends RectButtonProps {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
  noSelected?: boolean
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  noSelected = false,
  ...rest
}: CategoryProps) {
  const { secondary50, secondary70 } = theme.colors

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View
          style={[
            styles.content,
            {
              opacity: noSelected || checked ? 1 : 0.4,
              justifyContent: noSelected ? 'space-around' : 'space-between',
            },
          ]}
        >
          {!noSelected && (
            <View style={checked ? styles.checked : styles.check} />
          )}

          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  )
}
