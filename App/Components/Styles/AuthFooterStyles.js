import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  bottomSection: {
    flex: 0,
    alignItems: 'center',
    marginBottom: Metrics.baseMargin
  },
  fireviewButton: {
    marginVertical: Metrics.baseMargin
  },
  fireviewIcon: {
    width: Metrics.icons.xl,
    height: Metrics.icons.xl
  },
  termsLinkText: {
    color: Colors.mountainMist,
    ...Fonts.style.small
  },
  termsLinkTextPressed: {
    color: Colors.cornflowerBlue,
    ...Fonts.style.small
  }
})
