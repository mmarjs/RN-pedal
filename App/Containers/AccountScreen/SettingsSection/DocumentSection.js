import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import IconButton from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../Styles/AccountScreenStyles'
import { Colors, Images } from '../../../Themes'

class DocumentSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      buyInfoSection: false
    }
  }
  handleBuyerInfo = () => {
    if (this.state.buyInfoSection) {
      this.setState({
        buyInfoSection: false
      })
    } else {
      this.setState({
        buyInfoSection: true
      })
    }
  }
  handleBuyerInfoClose = () => {
    this.setState({
      buyInfoSection: false
    })
  }
  render () {
    const { buyInfoSection } = this.state
    return (
      <View>
        {!buyInfoSection && (
          <View>
            <TouchableOpacity style={styles.docScreenBtn} activeOpacity={0.8} onPress={() => { }}>
              <Image source={Images.accountDlUnclicked} style={styles.docIconBtn} />
              <Text style={styles.docViewBtnTxt}>Upload Driver's Licence</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.docScreenBtn} activeOpacity={0.8} onPress={() => { }}>
              <Image source={Images.accountInfoUnclicked} style={styles.docIconBtn} />
              <Text style={styles.docViewBtnTxt}>Upload Current Insurance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.docScreenBtn} activeOpacity={0.8} onPress={this.handleBuyerInfo}>
              <Image source={Images.accountInsuranceUnclicked} style={styles.iconBtn} />
              <Text style={styles.docViewBtnTxt}>Upload Buyer Information</Text>
            </TouchableOpacity>
          </View>
        )}
        {buyInfoSection && (
          <LinearGradient style={styles.buyerInfoScreenView} colors={[Colors.snow, Colors.steel]}>
            <View>
              <View style={styles.buyerInfoTxtView}>
                <Text style={styles.buyerInfoTxt}>Buyer Information</Text>
              </View>
              <TouchableOpacity style={styles.linkedInTxtView}>
                <View style={styles.linkedInfoTxtView}>
                  <Text style={styles.linkedInfoTxt}>Click to add information from</Text>
                </View>
                <View style={styles.linkedTxtView}>
                  <Text style={styles.linkedTxt}>Linked</Text>
                </View>
                <View style={styles.inTxtView}>
                  <Text style={styles.inTxt}>in</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.iconBtnGroupView}>
              <View style={styles.closeBtnView}>
                <IconButton name='close' color='#CC0000' size={15} onPress={this.handleBuyerInfoClose} />
              </View>
              <View style={styles.downArrowBtnView}>
                <Icon name='ios-arrow-down-outline' color='#008C00' size={15} />
              </View>
            </View>
          </LinearGradient>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(DocumentSection)

