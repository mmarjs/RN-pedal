import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.Images.logoWithBrim,
    width: Metrics.Images.logoWithBrim,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  }
})
