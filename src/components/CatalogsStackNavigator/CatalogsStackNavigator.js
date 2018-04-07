import React from 'react'
import { StackNavigator } from 'react-navigation'
import { BlurView } from 'expo'

import PartnersScreen from '../PartnersScreen'
import PartnerDetailsScreen from '../PartnerDetailsScreen'

const CatalogsStackNavigator = StackNavigator(
  {
    Partners: { screen: PartnersScreen },
    PartnerDetails: { screen: PartnerDetailsScreen },
  },
  {
    initialRouteName: 'Partners',
    mode: 'card',
    headerMode: 'float',
    headerTransitionPreset: 'fade-in-place', // uikit
    navigationOptions: {
      // headerTransparent: true,
      // headerBackground: <BlurView tint="light" intensity={50} />,
      gesturesEnabled: true,
    },
  }
)

export default CatalogsStackNavigator
