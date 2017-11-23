import React, { PropTypes } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Colors } from '../Themes'
import styles from './Styles/FullButtonStyles'

export default class FullButton extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    iconStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    wrapperStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    colors: PropTypes.array,
    activeOpacity: PropTypes.number,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    iconName: PropTypes.string
  }

  static defaultProps = {
    activeOpacity: 0.8,
    text: '',
    iconSize: 20,
    iconColor: Colors.snow
  }

  render () {
    const {
      onPress,
      activeOpacity,
      colors,
      text,
      textStyle,
      iconSize,
      iconColor,
      iconStyle,
      iconName,
      containerStyle,
      wrapperStyle
    } = this.props
    const Wrapper = colors ? LinearGradient : View
    const wrapperProps = colors ? { colors } : {}

    return (
      <View style={[styles.buttonContainer, containerStyle]}>
        <TouchableOpacity style={[styles.button, this.props.style]} onPress={onPress} activeOpacity={activeOpacity}>
          <Wrapper {...wrapperProps} style={[styles.wrapper, wrapperStyle]}>
            {iconName && (
              <View style={styles.iconWrapper}>
                <Icon name={iconName} size={iconSize} color={iconColor} style={[iconStyle]} />
              </View>
            )}
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
            {iconName && (
              <View style={styles.iconWrapper} />
            )}
          </Wrapper>
        </TouchableOpacity>
      </View>
    )
  }
}
