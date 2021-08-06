import React from 'react'
import { View, FlatList } from 'react-native'

import { ListDivider } from '../ListDivider'
import { ListHeader } from '../ListHeader'
import { Appointment } from './Appointment'

import { styles } from './styles'

const appointments = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Legends',
      icon: null,
      owner: true,
    },
    description: '...',
    category: '1',
    date: '22/06 às 20:40',
  },
  {
    id: '2',
    guild: {
      id: '2',
      name: 'CS:GO',
      icon: null,
      owner: false,
    },
    description: '...',
    category: '4',
    date: '22/06 às 20:40',
  },
]

export function ScheduledMatches() {
  return (
    <View style={styles.container}>
      <ListHeader title="Scheduled matches" subtitle="Total 6" />

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Appointment data={item} />}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.matches}
      />
    </View>
  )
}
