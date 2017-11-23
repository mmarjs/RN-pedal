import React, { PropTypes } from 'react'
import { between } from 'airbnb-prop-types'
import {
  Animated,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { Images, Metrics } from '../Themes'
import styles from './Styles/BackgroundImageWithLogoStyle'

export default class BackgroundImageWithLogo extends React.Component {
  static propTypes = {
    verticalPositionAnimation: PropTypes.object,
    backgroundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    gradient: PropTypes.object,
    logoContainerWidth: PropTypes.number.isRequired,
    contentHeight: between({ gt: 0, lte: Metrics.screenHeight }),
    logoActiveOpacity: PropTypes.number.isRequired,
    onLogoPress: PropTypes.func,
    children: PropTypes.node
  }

  static defaultProps = {
    backgroundImageHeight: Metrics.screenHeight / 2,
    gradient: {
      colors: ['#FFF1', '#FFFF'],
      defaultYStart: 0,
      defaultYEnd: 0.45
    },
    logoContainerWidth: 0.4, // Screen's width percentage that should be occupied by the logo
    logoActiveOpacity: 0.9
  }

  constructor (props) {
    super(props)

    this.state = {
      bgYPosition: new Animated.Value(0),
      bgGradientYStart: props.gradient.defaultYStart
    }
  }

  componentWillMount () {
    if (this.props.verticalPositionAnimation) {
      Animated.timing(this.state.bgYPosition, this.props.verticalPositionAnimation).start()
    }

    this.calculateLogoSizeAndGradient()
  }

  componentWillReceiveProps (nextProps) {
    console.log()
    if (this.props.contentHeight !== nextProps.contentHeight) {
      this.calculateLogoSizeAndGradient()
    }
  }

  calculateLogoSizeAndGradient () {
    // TODO: Review isLargeScreen logic failing for contentHeight: 300 and iPhone 7 screen size
    const LOGO_ASPECT_RATIO = 1.60255241567912
    const shortScrenPY = Metrics.screenHeight - this.props.contentHeight
    const largeScreenPY = Metrics.screenHeight / 2
    const isLargeScreen = largeScreenPY < shortScrenPY

    const cvPY = isLargeScreen ? largeScreenPY : shortScrenPY
    const startPY = Metrics.statusBarHeight + Metrics.baseMargin
    let logoHeight, logoWidth

    if (isLargeScreen) {
      logoWidth = Metrics.screenWidth * this.props.logoContainerWidth
      logoHeight = logoWidth * LOGO_ASPECT_RATIO
    } else {
      logoHeight = cvPY - startPY
      logoWidth = logoHeight / LOGO_ASPECT_RATIO
    }
    const logoButtonPY = cvPY - logoHeight
    const end = (logoHeight * 3 / 4 + logoButtonPY) / Metrics.screenHeight

    this.setState({
      bgGradientYEnd: end,
      logoWidth,
      logoHeight,
      backgroundImageHeight: logoHeight + logoButtonPY
    })
  }

  render () {
    const {
      backgroundImage,
      logoActiveOpacity,
      onLogoPress,
      contentContainerStyle
    } = this.props

    const {
      bgGradientYStart,
      bgGradientYEnd,
      backgroundImageHeight,
      logoWidth,
      logoHeight
    } = this.state

    const contentHeight = Math.max(this.props.contentHeight, Metrics.screenHeight / 2)
    const imageHeightStyle = this.props.verticalPositionAnimation ? {} : { height: backgroundImageHeight }

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior='position'
          contentContainerStyle={styles.container}
          style={styles.container}
        >
          <View style={styles.backgroundImage}>
            <View style={[styles.backgroundImage, styles.screenBackground, imageHeightStyle]}>
              <Animated.Image
                resizeMode='cover'
                source={backgroundImage}
                style={[styles.coverImage, { transform: [{ translateY: this.state.bgYPosition }] }]}
              />
            </View>
            <LinearGradient
              colors={this.props.gradient.colors}
              start={{ x: 0, y: bgGradientYStart }}
              end={{ x: 0, y: bgGradientYEnd }}
              style={{ flex: 1 }}
            />
          </View>
          <View style={styles.container}>
            <View style={styles.logoOuterContainer}>
              <View style={styles.logoInnerContainer}>
                <TouchableOpacity
                  ref={ref => { this.logoButton = ref }}
                  onPress={onLogoPress}
                  activeOpacity={logoActiveOpacity}
                  style={[styles.logoButton, {width: logoWidth, height: logoHeight}]}
                >
                  <Image
                    source={Images.logoWithBrim}
                    resizeMode='contain'
                    style={{width: logoWidth, height: logoHeight}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              ref={ref => { this.contentView = ref }}
              style={[styles.content, contentContainerStyle, { flex: 0, height: contentHeight }]}
            >
              {this.props.children}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}
