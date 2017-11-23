import React from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Image
} from 'react-native'

export default class ImageButton extends React.Component {
  static propTypes = {
    onPressChange: React.PropTypes.func,
    image: React.PropTypes.any,
    imagePressed: React.PropTypes.any,
    onPress: React.PropTypes.func,
    style: React.PropTypes.any,
    imageStyle: React.PropTypes.any,
    pressed: React.PropTypes.bool,
    imageProps: React.PropTypes.object
  }

  static defaultProps = {
    imageProps: {resizeMode: 'contain'}
  }

  render () {
    const {
      onPressChange,
      image,
      imagePressed,
      imageProps,
      onPress,
      style,
      imageStyle,
      pressed
    } = this.props
    return (
      <TouchableWithoutFeedback
        onPressIn={() => onPressChange(true)}
        onPressOut={() => onPressChange(false)}
        onPress={onPress}
        >
        <View style={style}>
          <Image source={pressed ? imagePressed : image} {...imageProps} style={imageStyle} />
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
