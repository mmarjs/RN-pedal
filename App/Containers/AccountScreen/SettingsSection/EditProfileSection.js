import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

import IconButton from 'react-native-vector-icons/FontAwesome'
import IconEdit from 'react-native-vector-icons/MaterialIcons'

import styles from '../Styles/AccountScreenStyles'
import { Colors } from '../../../Themes'

class EditProfileSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      secureTxtInput: true
    }
  }
  render () {
    const { secureTxtInput } = this.state
    return (
      <View>
        <View style={styles.profileTxtPartView}>
          <View style={styles.numberView}>
            <View>
              <Text style={styles.numberTxt}>Number:</Text>
            </View>
            <View>
              <TextInput style={styles.numInput} placeholderTextColor={Colors.snow} placeholder='(818) 5555555' onChangeText={() => this.setState({})} />
            </View>
            <TouchableOpacity style={styles.editIconView}>
              <IconEdit name='edit' color={Colors.snow} size={10} />
            </TouchableOpacity>
          </View>
          <View style={styles.emailView}>
            <View>
              <Text style={styles.emailTxt}>Email:</Text>
            </View>
            <View>
              <TextInput style={styles.mailInput} placeholderTextColor={Colors.snow} placeholder='Sample@mail.com' onChangeText={() => this.setState({})} />
            </View>
            <TouchableOpacity style={styles.editIconView}>
              <IconEdit name='edit' color={Colors.snow} size={10} />
            </TouchableOpacity>
          </View>
          <View style={styles.pwdView}>
            <View>
              <Text style={styles.pwdTxt}>Password:</Text>
            </View>
            <View>
              <TextInput style={styles.pwdInput} placeholderTextColor={Colors.snow} secureTextEntry={secureTxtInput} placeholder='*************' onChangeText={() => this.setState({})} />
            </View>
            <TouchableOpacity style={styles.editIconView}>
              <IconEdit name='edit' color={Colors.snow} size={10} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.fbBtnView}>
          <IconButton.Button name='facebook' backgroundColor={Colors.fbBtnColor} onPress={() => { }} size={10}>
            <Text style={styles.fbBtnTxt}>Connect with Facebook</Text>
          </IconButton.Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileSection)

