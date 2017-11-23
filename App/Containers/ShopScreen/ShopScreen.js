import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../../Themes'
import ImageButton from '../../Components/ImageButton'

// Styles
import styles from './Styles/ShopScreenStyles'

class ShopScreen extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      isButtonPressed: {
        brand: false,
        price: false
      }
    }
  }

  setButtonPressStatus = (buttonName, status) => {
    this.setState(state => Object.assign({}, state, {isButtonPressed: {[buttonName]: status}}))
  }

  render () {
    const {isButtonPressed} = this.state
    return (
      <View style={styles.container}>
        <Image source={Images.shopBackground} style={styles.background}>
          <View style={styles.viewContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Shop</Text>
            </View>
            <View style={styles.buttonContainer}>
              <ImageButton
                onPressChange={(isPressed) => this.setButtonPressStatus('brand', isPressed)}
                onPress={() => {}}
                pressed={isButtonPressed.brand}
                imagePressed={Images.pressed.brandButton}
                image={Images.brandButton}
                style={styles.touchButton}
                imageStyle={styles.button}
              />
              <ImageButton
                onPressChange={(isPressed) => this.setButtonPressStatus('price', isPressed)}
                onPress={() => {}}
                pressed={isButtonPressed.price}
                imagePressed={Images.pressed.priceButton}
                image={Images.priceButton}
                style={styles.touchButton}
                imageStyle={styles.button}
              />
            </View>
          </View>
        </Image>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopScreen)
