import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'

import ImageButton from '../../Components/ImageButton'
import FullButton from '../../Components/FullButton'

// import stateful components
import DocumentSection from './SettingsSection/DocumentSection'
import EditProfileSection from './SettingsSection/EditProfileSection'
import HelpSection from './SettingsSection/HelpSection'
import TutorialsSection from './SettingsSection/TutorialsSection'

// Styles
import styles from './Styles/AccountScreenStyles'
import { Colors, Images } from '../../Themes'
// import { Fonts, Colors, Metrics } from '../../../Themes/'
class AccountScreen extends React.Component {

  static defaultProps = {
    profileName: 'Ross InannareIIi',
    location: 'Calabasas, CA'
  }

  constructor (props) {
    super(props)
    this.state = {
      profileName: props.profileName,
      location: props.location,
      hasPhoto: true,
      editScreen: false,
      selectedSettingSection: null,
      settingsSections: [
        {
          title: 'Edit Profile',
          key: 'editProfile'
        },
        {
          title: 'Documents',
          key: 'documents'
        },
        {
          title: 'Tutorials',
          key: 'tutorials'
        },
        {
          title: 'Help',
          key: 'help'
        },
        {
          title: 'Logout',
          key: 'logout'
        }
      ],
      isPressed: {
        accountDl: false,
        accountInsurance: false,
        accountInfo: false,
        gearBtn: false,
        cameraImgBtn: false,
        pedalBtn: false,
        diamondBtn: false,
        favoritesBtn: false
      }
    }
  }
  setBtnPressStatus = (btnName, status) => {
    this.setState(state => ({
      isPressed: {
        [btnName]: status
      }
    }))
  }
  setEditScreenStatus = () => {
    if (this.state.editScreen) {
      this.setState({
        editScreen: false
      })
    } else {
      this.setState({
        editScreen: true
      })
    }
  }

  handleSettingSectionClick = (index) => {
    this.setState({
      selectedSettingSection: index
    })
  }

  hideSelectedSettingSection = () => {
    this.setState({
      selectedSettingSection: null
    })
  }
  renderSelectedSettingSection = () => {
    const { settingsSections, selectedSettingSection } = this.state

    if (selectedSettingSection === null) {
      return null
    }
    switch (settingsSections[selectedSettingSection].key) {
      case 'documents':
        return (
          <DocumentSection />
        )
      case 'tutorials':
        return (
          <TutorialsSection />
        )
      case 'help':
        return (
          <HelpSection />
        )
      case 'editProfile':
        return (
          <EditProfileSection />
        )
      default:
        return (
          null
        )
    }
  }
  renderSettingsSection = () => {
    const { settingsSections, selectedSettingSection } = this.state
    const sections = settingsSections.slice(0, (selectedSettingSection !== null ? selectedSettingSection : settingsSections.length) + 1)
    return (
      <LinearGradient colors={[Colors.anakiwa, Colors.pictonBlue]} style={styles.editScreenView}>
        <View style={{ flex: 1 }}>
          {sections.map((section, index) => {
            return (
              <TouchableOpacity
                key={section.key} style={selectedSettingSection !== index ? styles.editTxtView : styles.editTxtPressedView}
                onPress={() => this.handleSettingSectionClick(index)}
              >
                <Text style={styles.editTxt}>{section.title}</Text>
              </TouchableOpacity>
            )
          })}
          {selectedSettingSection !== null && (
            <View style={{ flex: settingsSections.length - sections.length }}>
              <ScrollView contentContainerStyle={styles.settingSectionScrollViewContainer}>
                {this.renderSelectedSettingSection()}
              </ScrollView>
            </View>
          )}
        </View>
        <View style={styles.bottomSettingsSection}>
          {selectedSettingSection !== null && (
            <TouchableOpacity style={styles.hideSettingSectionButton} onPress={this.hideSelectedSettingSection}>
              <View style={styles.hideSettingSectionIconWrapper}>
                <Icon name='ios-arrow-up' size={25} color={Colors.snow} />
              </View>
            </TouchableOpacity>
          )}
          {selectedSettingSection !== null && settingsSections[selectedSettingSection].key === 'logout' && (
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={styles.logoutTextView}>
                <Text style={styles.logoutText}>But are you sure?</Text>
              </View>
              <TouchableOpacity style={styles.logoutOptionView}>
                <Text style={styles.logoutOptionText}>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logoutOptionView}>
                <Text style={styles.logoutOptionText}>NO</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </LinearGradient>
    )
  }

  render () {
    const { isPressed, profileName, location, hasPhoto, editScreen } = this.state
    return (
      <Image style={styles.backgroundImage} source={Images.accountBg}>
        <KeyboardAvoidingView behavior='position' style={styles.keyboardView}>
          <View style={styles.container}>
            <View style={styles.headerView}>
              <Text style={styles.headerTxt}>Account</Text>
            </View>
            <View style={styles.profileInfoView}>
              <LinearGradient style={styles.profileInfoGradientContainer} colors={[Colors.snow, Colors.steel]} >
                <View style={styles.profileCameraView} />
                <View style={styles.profileInfoTextContainer}>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={styles.nameTxt}>
                    {profileName}
                  </Text>
                  <Text style={styles.locationTxt}>
                    {location}
                  </Text>
                </View>
              </LinearGradient>
              <View style={styles.photoView}>
                <View style={styles.photoViewPlaceholder} />
              </View>
              {/* Both Image Buttons should have the same props, as the ring is static but covers the pic */}
              <ImageButton
                onPressChange={(isPressed) => this.setBtnPressStatus('cameraImgBtn', isPressed)}
                onPress={() => { }}
                image={hasPhoto ? Images.man : Images.accountCameraUnclicked}
                style={styles.photoView}
                imageStyle={styles.photoImgView}
              />
              <ImageButton
                onPressChange={(isPressed) => this.setBtnPressStatus('cameraImgBtn', isPressed)}
                onPress={() => { }}
                pressed={isPressed.cameraImgBtn}
                imagePressed={Images.accountCameraRing}
                image={Images.accountCameraRing}
                style={styles.photoView}
                imageStyle={styles.photoImgView}
              />
            </View>
            <View style={[styles.smallBtnGroupView, { backgroundColor: editScreen ? Colors.anakiwa : Colors.snow }]}>
              <Text style={styles.smallBtnGroupTxt}>Purchase Ready:</Text>
              <View style={styles.smallBtnGroup}>
                <ImageButton
                  onPressChange={(isPressed) => this.setBtnPressStatus('accountDl', isPressed)}
                  onPress={() => { }}
                  pressed={isPressed.accountDl}
                  imagePressed={Images.accountDlClicked}
                  image={Images.accountDlUnclicked}
                  style={{ flex: 0 }}
                  imageStyle={styles.iconBtn}
                />
                <ImageButton
                  onPressChange={(isPressed) => this.setBtnPressStatus('accountInfo', isPressed)}
                  onPress={() => { }}
                  pressed={isPressed.accountInfo}
                  imagePressed={Images.accountInfoClicked}
                  image={Images.accountInfoUnclicked}
                  style={{ flex: 0 }}
                  imageStyle={styles.iconBtn}
                />
                <ImageButton
                  onPressChange={(isPressed) => this.setBtnPressStatus('accountInsurance', isPressed)}
                  onPress={() => { }}
                  pressed={isPressed.accountInsurance}
                  imagePressed={Images.accountInsuranceClicked}
                  image={Images.accountInsuranceUnclicked}
                  style={{ flex: 0 }}
                  imageStyle={styles.iconBtn}
                />
              </View>
              <ImageButton
                onPressChange={(isPressed) => this.setBtnPressStatus('diamondBtn', isPressed)}
                onPress={() => { }}
                pressed={isPressed.diamondBtn}
                imagePressed={Images.accountDiamondFinished}
                image={Images.accountDiamondNotFinished}
                imageStyle={styles.diamondIconBtn}
              />
            </View>
            {editScreen &&
              this.renderSettingsSection()
            }
            {!editScreen &&
              <View>
                <LinearGradient style={styles.accountSectionsBtnWrapper} colors={[Colors.snow, Colors.steel]} >
                  <View style={styles.firstBtnGroupView}>
                    <FullButton
                      containerStyle={styles.accountSectionsBtnContainer}
                      colors={[Colors.malibu, Colors.pictonBlue, Colors.scienceBlue]}
                      textStyle={styles.btnText}
                      text='Views'
                    />
                    <FullButton
                      containerStyle={styles.accountSectionsBtnContainer}
                      colors={[Colors.malibu, Colors.pictonBlue, Colors.scienceBlue]}
                      textStyle={styles.btnText}
                      text='Favorites'
                    />
                  </View>
                  <View style={styles.firstBtnGroupView}>
                    <FullButton
                      containerStyle={styles.accountSectionsBtnContainer}
                      colors={[Colors.malibu, Colors.pictonBlue, Colors.scienceBlue]}
                      textStyle={styles.btnText}
                      text='Likes'
                    />
                    <FullButton
                      wrapperStyle={styles.textBtn}
                      containerStyle={styles.accountSectionsBtnContainer}
                      colors={[Colors.malibu, Colors.pictonBlue, Colors.scienceBlue]}
                      textStyle={styles.btnText}
                      text='History'
                    />
                  </View>
                </LinearGradient>
                <View style={styles.pedalNavView}>
                  <ImageButton
                    onPressChange={(isPressed) => this.setBtnPressStatus('pedalNav', isPressed)}
                    onPress={() => { }}
                    pressed={isPressed.pedalNav}
                    imagePressed={Images.accountPedalClicked}
                    image={Images.accountPedalUnclicked}
                    imageStyle={styles.pedalBtn}
                  />
                </View>
              </View>
            }
          </View>
          <ImageButton
            onPressChange={(isPressed) => this.setBtnPressStatus('gearBtn', isPressed)}
            onPress={this.setEditScreenStatus}
            pressed={isPressed.gearBtn}
            imagePressed={editScreen ? Images.accountGearUnclicked : Images.accountGearClicked}
            image={editScreen ? Images.accountGearClicked : Images.accountGearUnclicked}
            style={styles.settingsIconContainer}
            imageStyle={styles.settingsIcon}
          />
        </KeyboardAvoidingView>
      </Image>

    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen)
