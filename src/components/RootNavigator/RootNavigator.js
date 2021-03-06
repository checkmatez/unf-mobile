import { createSwitchNavigator } from 'react-navigation'

import CheckIfIntroWatchedScreen from '../CheckIfIntroWatchedScreen'
import IntroScreen from '../IntroScreen'
import ModalNavigator from '../ModalNavigator'

const RootNavigator = createSwitchNavigator(
  {
    CheckIfIntroWatched: {
      screen: CheckIfIntroWatchedScreen,
    },
    Intro: {
      screen: IntroScreen,
    },
    Modal: {
      screen: ModalNavigator,
    },
  },
  {
    initialRouteName: 'CheckIfIntroWatched',
    mode: 'card',
    headerMode: 'none',
  }
)

export default RootNavigator
