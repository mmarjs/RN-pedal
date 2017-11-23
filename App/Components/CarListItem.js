import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/CarListItemStyles'
import LinearGradient from 'react-native-linear-gradient'
import { Images, Colors } from '../Themes'
const coords = {start: {x: 0.0, y: 0.0}, end: {x: 0.0, y: 1}}

export default class CarListItem extends React.Component {
  static propTypes = {
    model: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    imageUrl: React.PropTypes.string.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    onPressCar: React.PropTypes.func,
    onPressLike: React.PropTypes.func,
    favorite: React.PropTypes.bool,
    activeOpacity: PropTypes.number,
    colors: PropTypes.array
  }
  static defaultProps = {
    activeOpacity: 0.8
  }
  render () {
    const { onPressCar, onPressLike, model, imageUrl, favorite, activeOpacity, value } = this.props
    const Wrapper = favorite ? LinearGradient : View
    const wrapperProps = favorite ? { colors: ['white', Colors.lightShadow], coords } : {}
    return (
      <View style={styles.viewContainer}>
        <TouchableOpacity style={[styles.button, this.props.style]} onPress={onPressCar} activeOpacity={activeOpacity}>
          <View style={styles.container}>
            <Wrapper {...wrapperProps} style={styles.wrapper}>
              <TouchableOpacity style={styles.favoriteContainer} onPress={onPressLike} activeOpacity={activeOpacity}>
                <Image source={favorite ? Images.likeActiveIcon : Images.likeIcon} style={styles.favorite} />
              </TouchableOpacity>
              <View style={styles.modelContainer}>
                <Text style={styles.modelText}>{model}</Text>
              </View>
              <View style={styles.valueContainer}>
                <Text style={styles.valueText}>${value}</Text>
              </View>
            </Wrapper>
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
