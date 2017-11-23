import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

import IconButton from 'react-native-vector-icons/FontAwesome'
import styles from '../Styles/AccountScreenStyles'
import { Colors } from '../../../Themes'

class TutorialsSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <View style={styles.tutorialsScreenView}>
        <View style={styles.rowView}>
          <View style={styles.spaceView} />
          <View style={styles.leftTxtView}>
            <TouchableOpacity>
              <Text style={styles.tutorialsTxt}>FireView</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightTxtView}>
            <TouchableOpacity>
              <Text style={styles.tutorialsTxt}>Shop</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.spaceView} />
          <View style={styles.leftTxtView}>
            <TouchableOpacity>
              <Text style={styles.tutorialsTxt}>Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightTxtView}>
            <TouchableOpacity>
              <Text style={styles.tutorialsTxt}>Suggestions</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowView}>
          <View style={styles.spaceView} />
          <View style={styles.leftTxtView}>
            <TouchableOpacity>
              <Text style={styles.tutorialsTxt}>Planner</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightTxtView}>
            <TouchableOpacity style={styles.diamondTxtView}>
              <Text style={styles.tutorialsTxt}>Diamond</Text>
              <IconButton name='diamond' color={Colors.snow} size={10} />
              <Text style={styles.tutorialsTxt}>Lane</Text>
            </TouchableOpacity>
          </View>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(TutorialsSection)

