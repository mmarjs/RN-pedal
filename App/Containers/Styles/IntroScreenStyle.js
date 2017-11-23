import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes/'

const containerWidth = 0.9

export default StyleSheet.create({
  content: {
    width: Metrics.screenWidth * containerWidth,
    marginLeft: Metrics.screenWidth * (1 - containerWidth) / 2,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  facebookButton: {
    backgroundColor: Colors.facebook
  },
  facebookText: {
    fontFamily: Fonts.type.bold
  },
  signupButton: {
    backgroundColor: Colors.cornflowerBlue
  },
  loginButton: {
    backgroundColor: Colors.malibu
  }
})
