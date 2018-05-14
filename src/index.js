import { YellowBox } from 'react-native'
import Expo from 'expo'

import App from './components/App'

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
  'Module RCTImageLoader',
])

if (process.env.NODE_ENV === 'development') {
  Expo.KeepAwake.activate()
}

Expo.registerRootComponent(App)
