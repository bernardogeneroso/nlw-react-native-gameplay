import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'

import { categories } from '../../../utils/categories'
import { GuildIcon } from '../../GuildIcon'
import PlayerSvg from '../../../assets/player.svg'
import CalendarSvg from '../../../assets/calendar.svg'

import { theme } from '../../../global/styles/theme'
import { styles } from './styles'

export interface Guild {
  id: string
  name: string
  icon: null | string
  owner: boolean
}

export interface Appointment {
  id: string
  guild: Guild
  description: string
  category: string
  date: string
}

interface AppointmentProps extends RectButtonProps {
  data: Appointment
}

export function Appointment({ data, ...rest }: AppointmentProps) {
  const { owner } = data.guild
  const { primary, on } = theme.colors
  const [category] = categories.filter((item) => item.id === data.category)

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>

            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on} />

              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? 'Owner' : 'Guest'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}
