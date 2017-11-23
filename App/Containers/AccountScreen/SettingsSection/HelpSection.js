import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from '../Styles/AccountScreenStyles'

class HelpSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <View style={styles.helpScreenView}>
        <View style={styles.faqView}>
          <TouchableOpacity style={styles.faqTxtView}>
            <Text style={styles.faqTxt}>FAQ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.qaView}>
          <TouchableOpacity style={styles.qaTxtView}>
            <Text style={styles.qaTxt}>Ask a Question</Text>
          </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(HelpSection)

