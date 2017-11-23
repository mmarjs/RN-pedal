import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images } from '../../Themes'
// Styles
import styles from './Styles/SearchResultsScreenStyles'
import CarListItem from '../../Components/CarListItem'
import { Actions as NavigationActions } from 'react-native-router-flux'

const cars = [
  { model: '2017 BMW 230i',
    value: 999,
    favorite: true,
    imageUrl: 'https://i.ndtvimg.com/i/2016-07/next-gen-bmw-3-series-rendering_827x510_41469876863.jpg'
  },
  { model: '2014 BMW 301i',
    value: 1029,
    favorite: false,
    imageUrl: 'https://www.bmw.co.uk/dam/brandBM/marketGB/countryGB/corporatesales/BMW-Corporate-Overview/1-series-5door-image-resized600x338.jpg.resource.1433865963666.jpg'
  },
  { model: '2016 BMW 130i',
    value: 2030,
    favorite: true,
    imageUrl: 'https://img.pistonheads.com/Fullsize/bmw/1-series/1-5-118i-sport/bmw-1-series-1-5-118i-sport-198945734-1.jpg'
  },
  { model: '2013 BMW 220i',
    value: 769,
    favorite: true,
    imageUrl: 'https://imgd.aeplcdn.com/1280x720/cw/cars/bmw/x6.jpg?q=100'
  }
]
class SearchResultsScreen extends React.Component {

  render () {
    return (
      <Image style={styles.background} source={Images.shopBackground}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.backIconContainer} onPress={NavigationActions.pop}>
              <Icon name='angle-left' size={32} color='white' />
            </TouchableOpacity>
            <Text style={styles.title}>Shop</Text>
          </View>
          <ScrollView style={styles.scrollView}>
            { cars.map((car, key) => {
              const { model, value, favorite, imageUrl, ...colors } = car
              return (
                <CarListItem
                  key={key}
                  style={{backgroundColor: 'white'}}
                  model={model}
                  value={value}
                  imageUrl={imageUrl}
                  favorite={favorite}
                  {...colors}
                />
              )
            })
          }
          </ScrollView>
        </View>
      </Image>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsScreen)
