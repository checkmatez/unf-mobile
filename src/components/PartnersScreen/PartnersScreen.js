import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Switch } from 'react-native'

import PartnersList from '../PartnersList'

class PartnersScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
      .isRequired,
  }

  static navigationOptions = {
    title: 'Партнеры',
  }

  state = {
    showFolders: false,
  }

  render() {
    const { navigation } = this.props
    return (
      <View>
        <Switch
          value={this.state.showFolders}
          onValueChange={showFolders => this.setState({ showFolders })}
        />
        <PartnersList
          filters={{ showFolders: this.state.showFolders }}
          navigateToDetails={(id, title) =>
            navigation.navigate('PartnerDetails', { id, title })
          }
        />
      </View>
    )
  }
}

export default PartnersScreen
