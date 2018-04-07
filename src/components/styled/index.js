import { StyleSheet } from 'react-native'
import styled from 'styled-components'

export const Separator = styled.View`
  height: ${StyleSheet.hairlineWidth};
  background-color: lightgrey;
  margin-horizontal: 10;
`

export const Container = styled.View`
  margin-horizontal: 15;
  flex-direction: row;
  align-items: center;
  min-height: 40;
`
