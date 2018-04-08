import { Image } from 'react-native'
import { Asset, Font } from 'expo'
import uniq from 'lodash/uniq'
import get from 'lodash/get'
import set from 'lodash/set'

export const cacheImages = images =>
  images.map(
    image =>
      typeof image === 'string'
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync()
  )

export const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))

export const getEndReachedHandler = ({
  networkStatus,
  fetchMore,
  currentLength,
  hasNextPage,
  pathToList,
}) => () => {
  if (!hasNextPage) {
    return
  }
  if (networkStatus < 7) {
    return
  }
  fetchMore({
    variables: { skip: currentLength + 1 },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult
      }
      const updatedResult = { ...fetchMoreResult }
      set(updatedResult, pathToList, [
        ...get(previousResult, pathToList),
        ...get(fetchMoreResult, pathToList),
      ])
      return updatedResult
    },
  })
}

export const extractSectionsByLetter = (arr, key) =>
  uniq(arr.map(p => p[key][0].toUpperCase())).map(letter => ({
    title: letter,
    data: arr.filter(el => el[key][0].toUpperCase() === letter),
  }))
