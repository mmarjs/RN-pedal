import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../Themes/'

const containerWidth = 0.9
export default StyleSheet.create({
  label: {
    alignItems: 'center',
    fontSize: Fonts.size.h5,
    color: Colors.malibu,
    textAlign: 'center',
    marginBottom: Metrics.doubleBaseMargin * 1.2
  },
  textLine: {
    alignItems: 'center',
    fontSize: Fonts.size.h6 / 1.5,
    color: Colors.malibu,
    textAlign: 'center',
    marginBottom: Metrics.doubleBaseMargin
  },
  backIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.baseMargin
  },
  bottomSection: {
    flex: 0,
    alignItems: 'center',
    marginBottom: Metrics.baseMargin
  },
  content: {
    width: Metrics.screenWidth * containerWidth,
    marginLeft: Metrics.screenWidth * (1 - containerWidth) / 2,
    alignItems: 'center',
    justifyContent: 'flex-end'
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
    borderLeftWidth: 1,
    marginBottom: Metrics.doubleBaseMargin * 1.5
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
    fontSize: Fonts.size.tiny
  },
  linkTextPressed: {
    color: Colors.cornflowerBlue,
    fontSize: Fonts.size.tiny
  },
  forgotPasswordLink: {
    marginVertical: Metrics.baseMargin,
    alignItems: 'center'
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
    fontSize: Fonts.size.small
  },
  termsLinkTextPressed: {
    color: Colors.cornflowerBlue,
    fontSize: Fonts.size.small
  }
})
