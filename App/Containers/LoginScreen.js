import React, { PropTypes } from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/LoginScreenStyles'
import { Images, Colors } from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import FullButton from '../Components/FullButton'
import BasicInput from '../Components/BasicInput'
import BackgroundImageWithLogo from '../Components/BackgroundImageWithLogo'
import AuthFooter from '../Components/AuthFooter'

const UserTypes = {
  customer: 'customer',
  dealer: 'dealer'
}

class LoginScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  static defaultProps = {
    initialUserType: UserTypes.customer,
    images: {
      customerBackground: Images.customerBackground, // Customer Mode Background Image
      dealerBackground: Images.dealerBackground // // Dealer Mode Background Image
    }
  }

  constructor (props) {
    super(props)
    this.isAttempting = false

    this.state = {
      currentUserType: props.initialUserType,
      lastChangeUserTypePress: 0,
      isButtonPressed: {
        forgotPassword: false
      }
    }
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      NavigationActions.loginSplashScreen()
    }
  }

  handlePressLogin = () => {
    const { email, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    console.tron.log(email, password)
    this.props.attemptLogin(email, password)
  }

  handleChangeEmail = (text) => {
    this.setState({ email: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  handleChangeUserType = () => {
    const doublePressDelta = 500 // Time between presses to be considered a double press
    const delta = new Date().getTime() - this.state.lastChangeUserTypePress
    const { currentUserType } = this.state
    const stateChanges = {
      lastChangeUserTypePress: new Date().getTime()
    }

    if (delta < doublePressDelta) {
      const newUserType = currentUserType === UserTypes.customer ? UserTypes.dealer : UserTypes.customer
      Object.assign(stateChanges, { currentUserType: newUserType })
    }

    this.setState(stateChanges)
  }

  setButtonPressStatus = (buttonName, status) => {
    this.setState(state => Object.assign({}, state, { isButtonPressed: { [buttonName]: status } }))
  }

  forgotPressOut = () => {
    this.setButtonPressStatus('forgotPassword', false)
    NavigationActions.resetPasswordScreen()
  }
  render () {
    const {
      email,
      password,
      isButtonPressed,
      currentUserType
    } = this.state

    const {
      fetching,
      images: { customerBackground, dealerBackground }
    } = this.props

    const editable = !fetching
    const backgroundImage = currentUserType === UserTypes.customer ? customerBackground : dealerBackground
    const isDealer = currentUserType === UserTypes.dealer

    return (
      <BackgroundImageWithLogo
        backgroundImage={backgroundImage}
        contentHeight={280}
        contentContainerStyle={styles.content}
        onLogoPress={NavigationActions.pop}
      >
        <ScrollView style={!isDealer && { paddingTop: 15 }}>
          <BasicInput
            iconImage={Images.userLoginIcon}
            placeholder='Email@example.com'
            label={isDealer ? 'Dealership Log in' : null}
            returnKeyType='next'
            value={email}
            editable={editable}
            onChangeText={this.handleChangeEmail}
            onPressIcon={this.handleChangeUserType}
            onSubmitEditing={this.passwordInput && this.passwordInput.focus}
          />
          <BasicInput
            iconImage={Images.passwordLoginIcon}
            placeholder='Password'
            value={password}
            editable={editable}
            onChangeText={this.handleChangePassword}
            inputRef={ref => { this.passwordInput = ref }}
            secureTextEntry
          />
          <TouchableWithoutFeedback
            onPressIn={() => this.setButtonPressStatus('forgotPassword', true)}
            onPressOut={this.forgotPressOut}
          >
            <View style={styles.forgotPasswordLink}>
              <Text style={isButtonPressed.forgotPassword ? styles.linkTextPressed : styles.linkText}>
                Forgot your password?
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <FullButton
            colors={[Colors.malibu, Colors.pictonBlue, Colors.scienceBlue]}
            text={'Log In'}
            onPress={this.handlePressLogin}
          />
        </ScrollView>
        <AuthFooter />
      </BackgroundImageWithLogo>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (email, password) => dispatch(LoginActions.loginRequest(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
