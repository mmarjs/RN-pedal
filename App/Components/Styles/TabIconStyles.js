import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.squeeze
  },
  tab: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    width: 32,
    height: 32
  },
  selectedTab: {
    color: Colors.pictonBlue,
    ...Fonts.style.description
  },
  normalTab: {
    ...Fonts.style.description
  }
})
