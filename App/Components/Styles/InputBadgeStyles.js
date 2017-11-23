import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({

  labelBadge: {
    paddingLeft: Metrics.smallMargin,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
  labelText: {
    color: Colors.snow,
    ...Fonts.style.small
  }
})
