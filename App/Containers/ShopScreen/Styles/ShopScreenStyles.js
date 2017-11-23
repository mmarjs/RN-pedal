import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '../../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  viewContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 48,
    color: '#E1EEF6',
    fontFamily: Fonts.type.base
  },
  background: {
    resizeMode: 'contain',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  touchButton: {
    height: Metrics.screenHeight * 0.3,
    marginBottom: 20
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent',
    resizeMode: 'contain'
  },
  buttonText: {
    fontSize: 48,
    color: '#E1EEF6',
    fontFamily: Fonts.type.base
  }
})
