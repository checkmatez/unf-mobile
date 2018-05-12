import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { GestureHandler } from 'expo'

class HeaderIcon extends Component {
  static propTypes = {
    IconFont: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    size: 24,
    color: 'blue',
    onPress: () => {},
  }

  render() {
    const { IconFont, name, size, color, onPress } = this.props
    return (
      <GestureHandler.BorderlessButton onPress={onPress}>
        <IconFont name={name} size={size} color={color} />
      </GestureHandler.BorderlessButton>
    )
  }
}

export default HeaderIcon
