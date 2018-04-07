import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'
import { AppLoading } from 'expo'

import configureApollo from '../../config/configureApollo'
import RootNavigator from '../RootNavigator'
import ErrorBoundary from '../ErrorBoundary'
import main from '../../config/theme'
import { cacheImages } from '../../utils'

const { client } = configureApollo()

class App extends Component {
  state = {
    isReady: false,
  }

  loadAssetsAsync = async () => {
    const imageAssets = cacheImages([
      require('../../../assets/1.png'),
      require('../../../assets/2.png'),
      require('../../../assets/3.png'),
    ])

    await Promise.all(imageAssets)
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      )
    }
    return (
      <ApolloProvider client={client}>
        <ErrorBoundary>
          <ThemeProvider theme={main}>
            <RootNavigator />
          </ThemeProvider>
        </ErrorBoundary>
      </ApolloProvider>
    )
  }
}

export default App
