import { Component } from 'react'
import PropTypes from 'prop-types'
import { AsyncStorage } from 'react-native'

class CheckIfIntroWatchedScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
      .isRequired,
  }

  async componentDidMount() {
    const done = await AsyncStorage.getItem('intro_done')
    if (done && done === 'true') {
      this.props.navigation.navigate('MainNav')
    } else {
      this.props.navigation.navigate('Intro')
    }
  }

  render() {
    return null
  }
}

export default CheckIfIntroWatchedScreen
