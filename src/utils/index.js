import { Image } from 'react-native'
import { Asset, Font } from 'expo'

export const cacheImages = images =>
  images.map(
    image =>
      typeof image === 'string'
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync()
  )

export const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))
