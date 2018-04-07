import React, { Component } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
  SectionList,
} from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { GestureHandler } from 'expo'
import styled from 'styled-components'

import PartnerListItem from '../PartnerListItem'
import { Separator } from '../styled'
import { getEndReachedHandler, extractSectionsByLetter } from '../../utils'

const PARTNERS_LIST_QUERY = gql`
  query partnersList($first: Int!, $skip: Int!, $isFolder: Boolean!) {
    partners(first: $first, skip: $skip, isFolder: $isFolder) {
      id
      createdAt
      updatedAt
      deletionMark
      code
      description
      isFolder
    }
  }
`

const FooterContainer = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background-color: #efeff4;
  height: 40;
`

const SectionHeader = styled.View`
  padding-horizontal: 15;
  background-color: #efeff4;
  justify-content: center;
  padding-vertical: 5;
`

const SectionTitleText = styled.Text`
  font-weight: bold;
`

class PartnersList extends Component {
  keyExtractor = item => item.id

  ListFooterComponent = networkStatus => {
    if (networkStatus !== 3) {
      return null
    }
    return (
      <FooterContainer>
        <ActivityIndicator />
      </FooterContainer>
    )
  }

  renderSectionHeader = ({ section: { title } }) => (
    <SectionHeader>
      <SectionTitleText>{title}</SectionTitleText>
    </SectionHeader>
  )

  renderItem = ({ item }) => (
    <PartnerListItem
      {...item}
      onPress={() => this.props.navigateToDetails(item.id, item.description)}
    />
  )

  renderWithData = ({ data, networkStatus, error, refetch, fetchMore }) => {
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
    const sections = extractSectionsByLetter(data.partners, 'description')

    return (
      <GestureHandler.NativeViewGestureHandler
        shouldCancelWhenOutside
        shouldActivateOnStart
        disallowInterruption
      >
        <SectionList
          sections={sections}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={() => this.ListFooterComponent(networkStatus)}
          contentContainerStyle={{ backgroundColor: 'white' }}
          refreshControl={refreshControl}
          onEndReached={getEndReachedHandler({
            networkStatus,
            fetchMore,
            data,
            listKey: 'partners',
          })}
          onEndReachedThreshold={0.5}
          contentInset={{ bottom: 45 }}
        />
      </GestureHandler.NativeViewGestureHandler>
    )
  }

  render() {
    return (
      <Query
        query={PARTNERS_LIST_QUERY}
        variables={{
          first: 10,
          skip: 0,
          isFolder: this.props.filters.showFolders,
        }}
        notifyOnNetworkStatusChange
      >
        {this.renderWithData}
      </Query>
    )
  }
}

export default PartnersList
