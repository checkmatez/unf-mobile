import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GestureHandler } from 'expo'

import HeaderButton from '../HeaderButton'

class PartnerCreationScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Новый партнер',
    headerLeft: (
      <HeaderButton title="Отмена" onPress={() => navigation.goBack()} />
    ),
    headerRight: (
      <HeaderButton title="Создать" onPress={() => navigation.goBack()} />
    ),
  })

  state = {
    name: {
      value: '',
    },
    lastName: {
      value: '',
    },
  }

  handleChange = (inputName, value) => {
    this.setState(prevState => ({
      [inputName]: { ...prevState[inputName], value },
    }))
  }

  render() {
    return (
      <View>
        <GestureHandler.TextInput
          placeholder="Имя"
          value={this.state.name.value}
          keyboardType="default"
          returnKeyType="next"
          maxLength={30}
          autoFocus
          blurOnSubmit
          onSubmitEditing={() => this.lastName.focus()}
          onChangeText={value => this.handleChange('name', value)}
          // onFocus={e => this.handleFocus('text', e)}
          // onBlur={e => this.handleBlur('text', e)}
          ref={inputRef => {
            this.name = inputRef
          }}
        />
        <GestureHandler.TextInput
          placeholder="Фамилия"
          value={this.state.lastName.value}
          keyboardType="default"
          returnKeyType="next"
          maxLength={30}
          blurOnSubmit
          // onSubmitEditing={() => this.answerAmount.focus()}
          onChangeText={value => this.handleChange('lastName', value)}
          // onFocus={e => this.handleFocus('text', e)}
          // onBlur={e => this.handleBlur('text', e)}
          ref={inputRef => {
            this.lastName = inputRef
          }}
        />
      </View>
    )
  }
}

export default PartnerCreationScreen
