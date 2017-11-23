import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.concrete,
    borderTopLeftRadius: Metrics.buttonRadius,
    borderBottomLeftRadius: Metrics.buttonRadius,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
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
    marginBottom: Metrics.baseMargin / 2
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
    borderTopLeftRadius: 0,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.input
  },
  textInputReadonly: {
    height: 41.3,
    color: Colors.steel,
    borderRadius: Metrics.buttonRadius,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0
  }
})
