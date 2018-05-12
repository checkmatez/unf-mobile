import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Switch } from 'react-native'
import { Entypo } from '@expo/vector-icons'

import PartnersList from '../PartnersList'
import HeaderIcon from '../HeaderIcon'
import { HeaderButtonContainer } from '../styled'

class PartnersScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
      .isRequired,
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Партнеры',
    headerRight: (
      <HeaderButtonContainer>
        <HeaderIcon
          IconFont={Entypo}
          name="plus"
          onPress={() => navigation.navigate('PartnerCreation')}
        />
      </HeaderButtonContainer>
    ),
  })

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
