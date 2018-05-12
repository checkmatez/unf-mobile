import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GestureHandler } from 'expo'
import styled from 'styled-components'

const Text = styled.Text`
  color: rgb(0, 122, 255);
  margin-horizontal: 15;
`

class HeaderButton extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  }

  render() {
    const { title, onPress } = this.props
    return (
      <GestureHandler.BorderlessButton onPress={onPress}>
        <Text>{title}</Text>
      </GestureHandler.BorderlessButton>
    )
  }
}

export default HeaderButton
