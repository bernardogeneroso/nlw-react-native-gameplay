import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screen/Home'
import { SignIn } from '../screen/SignIn'

import { theme } from '../global/styles/theme'

const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
        options={{ presentation: 'modal' }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{ presentation: 'modal' }}
      />
    </Navigator>
  )
}
