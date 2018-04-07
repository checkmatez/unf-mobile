import React, { Component } from 'react'
import { View, Text, Animated, StyleSheet, Alert } from 'react-native'
import styled from 'styled-components'
import { GestureHandler } from 'expo'

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

const Container = styled(GestureHandler.RectButton)`
  margin-horizontal: 15;
  flex-direction: row;
  align-items: center;
  min-height: 40;
`

class PartnerListItem extends Component {
  updateRef = ref => {
    this.swipeableRow = ref
  }

  close = () => {
    this.swipeableRow.close()
  }

  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    })
    return (
      <GestureHandler.RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Archive
        </Animated.Text>
      </GestureHandler.RectButton>
    )
  }

  renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    })
    const pressHandler = () => {
      this.close()
      Alert.alert(text)
    }
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <GestureHandler.RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}
        >
          <Text style={styles.actionText}>{text}</Text>
        </GestureHandler.RectButton>
      </Animated.View>
    )
  }

  renderRightActions = progress => (
    <View style={{ width: 192, flexDirection: 'row' }}>
      {this.renderRightAction('More', '#C8C7CD', 192, progress)}
      {this.renderRightAction('Flag', '#ffab00', 128, progress)}
      {this.renderRightAction('More', '#dd2c00', 64, progress)}
    </View>
  )

  render() {
    const {
      id,
      createdAt,
      updatedAt,
      deletionMark,
      code,
      description,
      isFolder,
      onPress,
    } = this.props

    return (
      <GestureHandler.Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}
      >
        <Container
          onPress={onPress}
          onLongPress={() => Alert.alert(`long pressed!`)}
        >
          <Text>{description}</Text>
        </Container>
      </GestureHandler.Swipeable>
    )
  }
}

export default PartnerListItem
