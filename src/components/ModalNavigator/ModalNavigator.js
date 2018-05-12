import { StackNavigator } from 'react-navigation'

import MainTabNavigator from '../MainTabNavigator'
import PartnerCreationScreen from '../PartnerCreationScreen'

const ModalNavigator = StackNavigator(
  {
    MainTab: {
      screen: MainTabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    PartnerCreation: {
      screen: PartnerCreationScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'float',
    initialRouteName: 'MainTab',
  }
)

export default ModalNavigator
