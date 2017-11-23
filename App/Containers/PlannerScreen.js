import React from 'react'
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PlannerScreenStyles'

class PlannerScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={NavigationActions.resultsViewSS}>
          <Text style={{fontSize: 32}}>Shop</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlannerScreen)
