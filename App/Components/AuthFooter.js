import React from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native'
import { Images } from '../Themes'
import styles from './Styles/AuthFooterStyles'
import ImageButton from './ImageButton'

export default class AuthFooter extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      isButtonPressed: {
        fireview: false,
        termAndPrivacy: false
      }
    }
  }

  setButtonPressStatus = (buttonName, status) => {
    this.setState(state => Object.assign({}, state, {isButtonPressed: {[buttonName]: status}}))
  }

  render () {
    const {isButtonPressed} = this.state
    return (
      <View style={styles.bottomSection}>
        <ImageButton
          onPressChange={(isPressed) => this.setButtonPressStatus('fireview', isPressed)}
          onPress={() => {}}
          pressed={isButtonPressed.fireview}
          imagePressed={Images.pressed.fireview}
          image={Images.fireview}
          style={styles.fireviewButton}
          imageStyle={styles.fireviewIcon}
        />
        <TouchableWithoutFeedback
          onPressIn={() => this.setButtonPressStatus('termAndPrivacy', true)}
          onPressOut={() => this.setButtonPressStatus('termAndPrivacy', false)}
        >
          <View>
            <Text
              style={isButtonPressed.termAndPrivacy ? styles.termsLinkTextPressed : styles.termsLinkText}
            >
              Terms of Service and Privacy Policy
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
