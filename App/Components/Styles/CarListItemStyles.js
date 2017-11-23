import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: Metrics.baseMargin,
    backgroundColor: 'transparent',
    borderRadius: Metrics.buttonRadius * 2
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: Metrics.smallMargin
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: Metrics.buttonRadius * 2
  },
  container: {
    flex: 1,
    borderRadius: Metrics.buttonRadius * 2,
    borderWidth: 2,
    borderColor: Colors.squeeze
  },
  favoriteContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    zIndex: 2
  },
  favorite: {
    width: 35,
    height: 35,
    resizeMode: 'contain'
  },
  modelContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modelText: {
    ...Fonts.style.normal,
    backgroundColor: Colors.transparent
  },
  valueContainer: {
    flex: 1.2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 5
  },
  valueText: {
    fontFamily: 'SansSerifFLF-DemiItalic',
    fontSize: Fonts.size.h4,
    color: Colors.pictonBlue,
    backgroundColor: Colors.transparent
  },
  imageContainer: {
    width: '100%',
    height: Metrics.screenHeight / 3.5
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent',
    resizeMode: 'cover',
    borderBottomLeftRadius: Metrics.buttonRadius * 2,
    borderBottomRightRadius: Metrics.buttonRadius * 2
  }
})
