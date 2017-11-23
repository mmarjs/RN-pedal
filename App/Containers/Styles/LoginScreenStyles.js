import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

const containerWidth = 0.9

export default StyleSheet.create({
  dealerBadge: {
    paddingLeft: Metrics.smallMargin,
    alignItems: 'flex-start',
    height: 15,
    backgroundColor: Colors.anakiwa,
    width: Metrics.screenWidth / 3,
    borderColor: Colors.lightShadow,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 0,
    borderTopLeftRadius: Metrics.buttonRadius,
    borderTopRightRadius: Metrics.buttonRadius
  },
  dealerText: {
    color: Colors.snow,
    fontSize: Fonts.size.tiny
  },
  content: {
    width: Metrics.screenWidth * containerWidth,
    marginLeft: Metrics.screenWidth * (1 - containerWidth) / 2,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.concrete,
    borderTopLeftRadius: Metrics.buttonRadius,
    borderBottomLeftRadius: Metrics.buttonRadius,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icons: {
    width: '90%',
    height: '90%'
  },
  inputContainer: {
    backgroundColor: Colors.concrete,
    flexDirection: 'row',
    borderColor: Colors.lightShadow,
    borderRadius: Metrics.buttonRadius,
    borderTopWidth: 1,
    borderLeftWidth: 1
  },
  textInput: {
    flex: 1,
    height: 41.3,
    color: Colors.steel,
    backgroundColor: Colors.concrete,
    paddingHorizontal: Metrics.baseMargin,
    borderRadius: Metrics.buttonRadius,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0
  },
  textInputReadonly: {
    height: 41.3,
    color: Colors.steel,
    borderRadius: Metrics.buttonRadius,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0
  },
  linkText: {
    color: Colors.mountainMist,
    ...Fonts.style.small
  },
  linkTextPressed: {
    color: Colors.cornflowerBlue,
    ...Fonts.style.small
  },
  forgotPasswordLink: {
    marginVertical: Metrics.baseMargin,
    alignItems: 'center'
  }
})
