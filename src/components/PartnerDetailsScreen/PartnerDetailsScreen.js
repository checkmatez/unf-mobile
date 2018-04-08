import React, { Component } from 'react'
import { View, Text, ActivityIndicator, RefreshControl } from 'react-native'
import { GestureHandler } from 'expo'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const PARTNER_BY_ID_QUERY = gql`
  query partner($id: ID!) {
    partner(id: $id) {
      id
      createdAt
      updatedAt
      code
      description
      isFolder
      contactDetails {
        kind
        value
      }
    }
  }
`

class PartnerDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Партнер'),
  })

  renderWithData = ({ data: { partner }, networkStatus, error, refetch }) => {
    if (error) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      )
    }
    if (networkStatus === 1) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }
    const refreshControl = (
      <RefreshControl refreshing={networkStatus === 4} onRefresh={refetch} />
    )
    return (
      <GestureHandler.ScrollView
        contentContainerStyle={{ backgroundColor: 'white' }}
        refreshControl={refreshControl}
      >
        <Text>{partner.description}</Text>
        <Text>{partner.code}</Text>
        <Text>{partner.createdAt}</Text>
        <Text>{partner.updatedAt}</Text>
        {partner.contactDetails.map((CD, index) => (
          <View key={index} style={{ flexDirection: 'row' }}>
            <Text>{CD.kind}</Text>
            <Text>: </Text>
            <Text>{CD.value}</Text>
          </View>
        ))}
      </GestureHandler.ScrollView>
    )
  }

  render() {
    const id = this.props.navigation.getParam('id')
    return (
      <Query
        query={PARTNER_BY_ID_QUERY}
        variables={{ id }}
        notifyOnNetworkStatusChange
      >
        {this.renderWithData}
      </Query>
    )
  }
}

export default PartnerDetailsScreen
