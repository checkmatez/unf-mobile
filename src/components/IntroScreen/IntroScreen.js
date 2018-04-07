import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, AsyncStorage } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  },
})

const slides = [
  {
    key: 'welcome',
    title: 'Добро пожаловать!',
    text: 'Тестим приложение УНФ',
    image: require('../../../assets/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#FFC627',
  },
  {
    key: 'cool',
    title: 'Круто',
    text: 'Мобильное приложение - это круто!',
    image: require('../../../assets/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#653B9C',
  },
]

class IntroScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
      .isRequired,
  }

  handleDone = async () => {
    await AsyncStorage.setItem('intro_done', 'true')
    this.props.navigation.navigate('MainNav')
  }

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        nextLabel="Далее"
        doneLabel="Войти"
        onDone={this.handleDone}
      />
    )
  }
}

export default IntroScreen
