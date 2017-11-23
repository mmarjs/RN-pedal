import React from 'react'
import {
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'

import BackgroundImageWithLogo from '../Components/BackgroundImageWithLogo'
import FullButton from '../Components/FullButton'

// Styles
import styles from './Styles/IntroScreenStyle'
import { Images, Metrics } from '../Themes'
import AuthFooter from '../Components/AuthFooter'

class IntroScreen extends React.Component {
  render () {
    const verticalPositionAnimation = {
      toValue: -200,
      duration: 30000
    }
    return (
      <BackgroundImageWithLogo
        contentContainerStyle={styles.content}
        backgroundImage={Images.photoScrollGrid}
        contentHeight={265}
        logoActiveOpacity={1}
        verticalPositionAnimation={verticalPositionAnimation}
      >
        <ScrollView>
          <FullButton
            iconName='facebook'
            style={styles.facebookButton}
            textStyle={styles.facebookText}
            text={'Login with Facebook'}
          />
          <FullButton
            style={styles.signupButton}
            text={'Sign up with email'}
            onPress={NavigationActions.signUpScreen}
          />
          <FullButton
            style={styles.loginButton}
            containerStyle={{ marginTop: Metrics.doubleBaseMargin }}
            text={'Log in'}
            onPress={NavigationActions.loginScreen}
          />
        </ScrollView>
        <AuthFooter />
      </BackgroundImageWithLogo>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen)
