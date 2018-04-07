// @flow
import { SwitchNavigator } from 'react-navigation'

import CheckIfIntroWatchedScreen from '../CheckIfIntroWatchedScreen'
import IntroScreen from '../IntroScreen'
import MainNavScreen from '../MainNavScreen'
import MainTabNavigator from '../MainTabNavigator'

const RootNavigator = SwitchNavigator(
  {
    CheckIfIntroWatched: {
      screen: CheckIfIntroWatchedScreen,
    },
    Intro: {
      screen: IntroScreen,
    },
    MainNav: {
      screen: MainTabNavigator,
    },
  },
  {
    initialRouteName: 'CheckIfIntroWatched',
    mode: 'card',
    headerMode: 'none',
  }
)

export default RootNavigator
