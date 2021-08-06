import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, Image } from 'react-native'

import { ButtonIcon } from '../../components/ButtonIcon'

import IllustrationImg from '../../assets/illustration.png'

import { styles } from './styles'

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Connect{'\n'} and organize{'\n'} your plays
        </Text>
        <Text style={styles.subtitle}>
          Create groups to play your games{'\n'} favorites with your friends
        </Text>

        <ButtonIcon title="Enter with Discord" onPress={handleSignIn} />
      </View>
    </View>
  )
}
