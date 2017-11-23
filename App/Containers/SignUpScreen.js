import React, { PropTypes } from 'react'
import {
  View,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/SignUpScreenStyles'
import { Images, Colors } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import FullButton from '../Components/FullButton'
import BackgroundImageWithLogo from '../Components/BackgroundImageWithLogo'
import AuthFooter from '../Components/AuthFooter'
import BasicInput from '../Components/BasicInput'

const UserTypes = {
  customer: 'customer',
  dealer: 'dealer'
}

class SignUpScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  static defaultProps = {
    initialUserType: UserTypes.customer,
    images: {
      customerBackground: Images.customerCreateBackground, // Customer Mode Background Image
      dealerBackground: Images.dealerCreateBackground // Dealer Mode Background Image
    }
  }

  constructor (props) {
    super(props)
    this.isAttempting = false
    this.state = {
      currentUserType: props.initialUserType,
      lastChangeUserTypePress: 0
    }
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    if (this.isAttempting && !newProps.fetching) {
      NavigationActions.pop()
    }
  }

  handleChange = (text, property) => {
    this.setState({ [property]: text })
  }

  handlePressLogin = () => {
    NavigationActions.homeScreen()
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

  renderDealerInputs (editable) {
    const fields = [
      { placeholder: 'dealership name', key: 'name', iconImage: Images.createDealershipIcon },
      { placeholder: 'dealership license number', key: 'license', iconImage: Images.createLicenseIcon },
      { placeholder: 'dealership address', key: 'address', iconImage: Images.createAddressIcon },
      { placeholder: 'dealership phone number', key: 'phone', iconImage: Images.createPhoneIcon },
      { placeholder: 'name of point of contact', key: 'contactPoint', iconImage: Images.createPointIcon },
      { placeholder: 'name of manager to contact', key: 'contactManager', iconImage: Images.createManagerIcon },
      { placeholder: 'primary offered brand', key: 'primaryBrand', iconImage: Images.createBrandIcon }
    ]

    return (
      <View>
        {fields.map((field, i) => (
          <BasicInput
            key={`${i}-${field.key}`}
            iconImage={field.iconImage}
            placeholder={field.placeholder}
            returnKeyType='next'
            value={this.state[field.key]}
            editable={editable}
            onChangeText={(text) => this.handleChange(text, field.key)}
          />
        ))}
      </View>
    )
  }

  render () {
    const {
      email,
      password,
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
        contentHeight={265}
        contentContainerStyle={styles.content}
        onLogoPress={NavigationActions.pop}
      >
        <ScrollView style={[styles.signUpForm, !isDealer && { paddingTop: 15 }]}>
          <BasicInput
            iconImage={Images.userLoginIcon}
            placeholder='email@example.com'
            label={isDealer ? 'Dealership Account' : null}
            returnKeyType='next'
            value={email}
            editable={editable}
            onChangeText={(text) => this.handleChange(text, 'email')}
            onPressIcon={this.handleChangeUserType}
          />
          <BasicInput
            iconImage={Images.passwordLoginIcon}
            placeholder='password'
            value={password}
            editable={editable}
            onChangeText={(text) => this.handleChange(text, 'password')}
            secureTextEntry
          />
          {isDealer && this.renderDealerInputs(editable)}
        </ScrollView>
        <View>
          <FullButton
            colors={[Colors.malibu, Colors.pictonBlue, Colors.scienceBlue]}
            text={'Create Account'}
            onPress={this.handlePressLogin}
          />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
