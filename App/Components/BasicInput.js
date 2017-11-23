import React from 'react'
import {
  TextInput,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from './Styles/BasicInputStyles'
import InputBadge from './InputBadge'

export default class BasicInput extends React.Component {
  static propTypes = {
    onPressIcon: React.PropTypes.func,
    iconImage: React.PropTypes.number,
    textStyle: React.PropTypes.object,
    viewStyle: React.PropTypes.object,
    inputRef: React.PropTypes.func,
    label: React.PropTypes.string
  }

  static defaultProps = {
    keyboardType: 'default',
    autoCapitalize: 'none',
    autoCorrect: false,
    underlineColorAndroid: 'transparent',
    editable: true
  }

  render () {
    const {
      iconImage,
      viewStyle,
      label,
      onPressIcon,
      inputRef,
      textStyle,
      ...inputProps
    } = this.props

    const textInputStyle = inputProps.editable ? styles.textInput : styles.textInputReadonly

    return (
      <View>
        {label && <InputBadge title={label} />}
        <View style={[styles.inputContainer, viewStyle, label && { borderTopLeftRadius: 0 }]}>
          {iconImage && (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={onPressIcon}
              activeOpacity={onPressIcon ? 0.8 : 1}
            >
              <Image source={iconImage} style={styles.icon} />
            </TouchableOpacity>
          )}
          <TextInput
            ref={inputRef}
            style={[textStyle, textInputStyle]}
            {...inputProps}
          />
        </View>
      </View>
    )
  }
}
