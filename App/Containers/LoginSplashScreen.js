import React, { Component } from 'react'
import { Text, Image } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'

import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LoginSplashScreenStyle'
import { Images } from '../Themes'

class LoginSplashScreen extends Component {

  componentDidMount () {
    this.transitionTimeout = setTimeout(() => NavigationActions.homeScreen({type: 'reset'}), 2000)
  }

  componentWillUnmount () {
    clearTimeout(this.transitionTimeout)
  }

  render () {
    return (
      <LinearGradient
        colors={['#b1e4ff', '#7eb1e5']}
        style={styles.container}
      >
        <Image
          source={Images.logo}
          resizeMode='contain'
          style={styles.logo}
        />
        <Text style={styles.text}>Welcome Back</Text>
      </LinearGradient>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginSplashScreen)
