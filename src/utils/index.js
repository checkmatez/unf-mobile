import { Image } from 'react-native'
import { Asset, Font } from 'expo'
import uniq from 'lodash/uniq'

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
  data,
  listKey,
}) => () => {
  if (networkStatus < 7) {
    return
  }
  fetchMore({
    variables: { skip: data[listKey].length + 1 },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return previousResult
      }
      return {
        ...previousResult,
        [listKey]: [...previousResult[listKey], ...fetchMoreResult[listKey]],
      }
    },
  })
}

export const extractSectionsByLetter = (arr, key) =>
  uniq(arr.map(p => p[key][0].toUpperCase())).map(letter => ({
    title: letter,
    data: arr.filter(el => el[key][0].toUpperCase() === letter),
  }))
