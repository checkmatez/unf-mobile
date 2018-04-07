import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import CatalogsStackNavigator from '../CatalogsStackNavigator'
import SettingsScreen from '../SettingsScreen'

const MainTabNavigator = TabNavigator(
  {
    Catalogs: {
      screen: CatalogsStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-contacts" size={30} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-settings" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    removeClippedSubviews: true,
    initialRouteName: 'Catalogs',
    order: ['Catalogs', 'Settings'],
    backBehavior: 'none',
    tabBarOptions: {},
  }
)

export default MainTabNavigator
