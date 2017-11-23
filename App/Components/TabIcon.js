import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './Styles/TabIconStyles'

export default class TabIcon extends Component {
  render () {
    const {
      activeIconImage,
      iconImage,
      selected,
      title
    } = this.props

    return (
      <View style={styles.tab}>
        {iconImage && (
          <Image source={selected ? activeIconImage : iconImage} style={styles.icon} />
        )}
        <Text style={selected ? styles.selectedTab : styles.normalTab}>{title}</Text>
      </View>
    )
  }
}
