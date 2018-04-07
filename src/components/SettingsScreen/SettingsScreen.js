import React, { Component } from 'react'
import { View, Text } from 'react-native'

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Настройки',
  }

  render() {
    return (
      <View>
        <Text>{`Hi i am a SettingsScreen component.`}</Text>
      </View>
    )
  }
}

export default SettingsScreen
