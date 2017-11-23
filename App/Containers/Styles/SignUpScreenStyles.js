import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

const containerWidth = 0.9

export default StyleSheet.create({
  signUpForm: {
    width: Metrics.screenWidth * containerWidth
  },
  content: {
    width: Metrics.screenWidth * containerWidth,
    marginLeft: Metrics.screenWidth * (1 - containerWidth) / 2,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
