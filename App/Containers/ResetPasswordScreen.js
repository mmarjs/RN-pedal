import React, { PropTypes } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/ResetPasswordScreenStyles'
import { Images, Colors } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import FullButton from '../Components/FullButton'
import BackgroundImageWithLogo from '../Components/BackgroundImageWithLogo'
import BasicInput from '../Components/BasicInput'
import Icon from 'react-native-vector-icons/FontAwesome'

import AuthFooter from '../Components/AuthFooter'

class ResetPasswordScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptReset: PropTypes.func
  }

  static defaultProps = {
    images: {
      resetPasswordBackground: Images.resetPasswordBackground, // Reset PasswordBackground Image
      resetSentBackground: Images.resetSentBackground// // Reset Sent Background Image
    }
  }

  constructor (props) {
    super(props)
    this.isAttempting = false

    this.state = {
      username: '',
      sent: false
    }
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    if (this.isAttempting && !newProps.fetching) {
      // NavigationActions.pop()
    }
  }

  handlePressReset = () => {
    this.isAttempting = true
    this.setState({ sent: true })
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  render () {
    const {
      username,
      sent
    } = this.state

    const {
      fetching,
      images: { resetPasswordBackground, resetSentBackground }
    } = this.props

    const editable = !fetching
    const backgroundImage = !sent ? resetPasswordBackground : resetSentBackground

    return (
      <BackgroundImageWithLogo
        backgroundImage={backgroundImage}
        contentHeight={265}
        contentContainerStyle={styles.content}
        onLogoPress={NavigationActions.introScreen}
      >
        {sent ? (
          <ScrollView>
            <Text style={styles.label}>Password Reset Email Sent</Text>
            <Text style={styles.textLine}>An email has been sent to your email address</Text>
            <Text style={styles.textLine}>Follow the directions in the email to reset your password</Text>
            <View style={styles.backIconContainer}>
              <TouchableOpacity onPress={NavigationActions.introScreen} activeOpacity={0.6}>
                <Icon name={'chevron-left'} size={25} color={Colors.malibu} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <ScrollView>
            <Text style={styles.label}>Enter username to reset password</Text>
            <BasicInput
              iconImage={Images.userLoginIcon}
              placeholder='Email@example.com'
              returnKeyType='next'
              value={username}
              editable={editable}
              onChangeText={this.handleChangeUsername}
              onSubmitEditing={this.handlePressReset}
            />
            <FullButton
              colors={[Colors.malibu, Colors.pictonBlue, Colors.scienceBlue]}
              text={'Reset'}
              onPress={this.handlePressReset}
            />
          </ScrollView>
        )}
        <AuthFooter />
      </BackgroundImageWithLogo>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreen)
