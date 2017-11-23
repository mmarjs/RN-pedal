import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: Metrics.smallMargin,
    backgroundColor: 'black',
    borderRadius: Metrics.buttonRadius
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: Metrics.buttonRadius
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: Metrics.buttonRadius
  },
  buttonText: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: Colors.snow,
    ...Fonts.style.h5
  },
  iconWrapper: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40
  }
})
