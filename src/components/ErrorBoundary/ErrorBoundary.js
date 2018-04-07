import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '../../config/theme'

const Root = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20;
  padding-vertical: 20;
  background-color: ${theme.LIGHT_GREY};
`

const ErrorText = styled.Text`
  color: ${theme.SECONDARY};
  font-size: ${theme.FONTSIZE.XMEDIUM};
  text-align: center;
`

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
  }

  render() {
    if (this.state.error) {
      return (
        <Root>
          <ErrorText>
            Произошла непредвиденная ошибка, разработчики уведомлены и уже
            работают над исправлением!
          </ErrorText>
        </Root>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
