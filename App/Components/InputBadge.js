import React from 'react'
import {
  Text,
  View
} from 'react-native'
import styles from './Styles/InputBadgeStyles'

export default class InputBadge extends React.Component {
  static propTypes = {
    title: React.PropTypes.string
  }

  render () {
    const {
      title
    } = this.props

    if (title) {
      return (
        <View style={styles.labelBadge}>
          <Text style={styles.labelText}>{title}</Text>
        </View>
      )
    } else {
      return null
    }
  }
}
