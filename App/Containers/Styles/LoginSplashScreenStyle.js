import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

const LOGO_ASPECT_RATIO = 1.64509803921569

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: Metrics.screenWidth * 0.35,
    height: Metrics.screenWidth * 0.35 * LOGO_ASPECT_RATIO,
    flex: 0,
    opacity: 0.8,
    marginBottom: Metrics.doubleBaseMargin
  },
  text: {
    fontFamily: Fonts.type.base,
    fontSize: 42,
    color: Colors.capeCod,
    backgroundColor: Colors.transparent
  }
})
