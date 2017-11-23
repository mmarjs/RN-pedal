import { StyleSheet } from 'react-native'
import { Metrics, Fonts, Colors } from '../../../Themes/'

const containerWidth = 0.9
export default StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null
  },
  backIconContainer: {
    backgroundColor: Colors.transparent
  },
  scrollView: {
    height: Metrics.screenHeight * 0.77
  },
  content: {
    width: Metrics.screenWidth * containerWidth,
    marginLeft: Metrics.screenWidth * (1 - containerWidth) / 2
  },
  header: {
    height: Metrics.screenHeight * 0.11,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    ...Fonts.style.h1,
    color: 'white',
    position: 'absolute',
    left: '40%',
    backgroundColor: Colors.transparent
  }
})
