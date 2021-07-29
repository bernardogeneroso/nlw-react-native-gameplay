import React from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import DiscordImg from '../../assets/discord.png'

import { styles } from './styles'

interface ButtonIconProps extends TouchableOpacityProps {
  title: string
}

export default function ButtonIcon({ title, ...props }: ButtonIconProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
