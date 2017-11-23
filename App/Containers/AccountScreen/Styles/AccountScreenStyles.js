import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../Themes/'
import { responsiveWidth, responsiveFontSize, responsiveHeight } from '../../../Transforms/Responsive'

const containerWidth = Metrics.screenWidth * 0.9

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: Metrics.screenWidth,
    alignItems: 'center',
    resizeMode: 'contain'
  },
  keyboardView: {
    flex: 1,
    width: Metrics.screenWidth,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    width: containerWidth
  },
  headerView: {
    marginTop: responsiveHeight(3),
    alignItems: 'center'
  },
  headerTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(6.5),
    backgroundColor: 'transparent',
    color: Colors.snow
  },
  settingsIconContainer: {
    position: 'absolute',
    top: 10,
    right: 0,
    width: Metrics.screenWidth * 0.2,
    height: Metrics.screenWidth * 0.25
  },
  settingsIcon: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  profileInfoView: {
    justifyContent: 'flex-end',
    marginTop: responsiveHeight(8),
    flexDirection: 'row'
  },
  profileInfoGradientContainer: {
    width: containerWidth * 0.9,
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  profileInfoTextContainer: {
    flex: 1
  },
  nameTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(3.5),
    backgroundColor: 'transparent',
    textAlign: 'right'
  },
  locationTxt: {
    ...Fonts.style.h4,
    fontSize: responsiveFontSize(2.5),
    backgroundColor: 'transparent',
    textAlign: 'right'
  },
  photoView: {
    flex: 0,
    backgroundColor: Colors.transparent,
    position: 'absolute',
    top: -responsiveHeight(4.5),
    left: -10
  },
  photoViewPlaceholder: {
    backgroundColor: Colors.snow,
    width: Metrics.screenWidth * 0.35,
    height: Metrics.screenWidth * 0.35,
    borderRadius: Metrics.screenWidth * 0.35 * 0.5
  },
  photoImgView: {
    width: Metrics.screenWidth * 0.35,
    height: Metrics.screenWidth * 0.35,
    resizeMode: 'contain',
    borderRadius: Metrics.screenWidth * 0.35 * 0.5
  },
  profileCameraView: {
    width: Metrics.screenWidth * 0.20
  },
  smallBtnGroupView: {
    marginTop: responsiveHeight(4),
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  smallBtnGroupTxt: {
    ...Fonts.style.h4,
    backgroundColor: 'transparent',
    fontSize: responsiveFontSize(2.5)
  },
  smallBtnGroup: {
    flexDirection: 'row'
  },
  pedalBtnView: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 40,
    alignItems: 'center'
  },
  firstBtnGroupView: {
    flexDirection: 'row'
  },
  secondBtnGroupView: {
    flexDirection: 'row'
  },
  iconBtn: {
    resizeMode: 'contain',
    height: 30,
    width: responsiveWidth(10),
    marginRight: 2
  },
  diamondIconBtn: {
    resizeMode: 'contain',
    height: 30,
    width: responsiveWidth(15)
  },
  accountSectionsBtnWrapper: {
    flex: 0,
    padding: Metrics.baseMargin,
    paddingTop: 0
  },
  accountSectionsBtnContainer: {
    flex: 1,
    padding: responsiveWidth(1),
    marginBottom: 0,
    backgroundColor: Colors.transparent
  },
  btnText: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(3.2),
    color: '#fff',
    backgroundColor: 'transparent',
    fontWeight: '300'
  },
  pedalNavView: {
    flex: 1,
    paddingBottom: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pedalBtn: {
    resizeMode: 'contain',
    height: responsiveHeight(20)
  },
  textBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  editScreenView: {
    flex: 1,
    backgroundColor: Colors.snow,
    marginBottom: 50
  },
  editTxtView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: containerWidth,
    backgroundColor: Colors.transparent
  },
  editTxtPressedView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: containerWidth,
    backgroundColor: Colors.steel
  },
  editTxt: {
    ...Fonts.style.h4,
    color: Colors.snow,
    fontSize: responsiveFontSize(3.5)
  },
  editConfirmTxtView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.transparent
  },
  logoutText: {
    ...Fonts.style.h4,
    color: Colors.snow,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'right',
    paddingHorizontal: Metrics.smallMargin
  },
  logoutTextView: {
    flex: 0,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoutOptionView: {
    flex: 1,
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoutOptionText: {
    ...Fonts.style.h4,
    color: Colors.snow,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center'
  },
  noTxtView: {
    flex: 1
  },
  noTxt: {
    ...Fonts.style.h4,
    color: Colors.snow,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center'
  },
  docScreenView: {
    flex: 4,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: responsiveHeight(3),
    paddingBottom: responsiveHeight(9)
  },
  settingSectionScrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  nonDocScreenView: {
    flex: 4
  },
  docScreenBtn: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: Metrics.baseMargin,
    borderRadius: Metrics.screenWidth * 0.35 * 0.5,
    backgroundColor: Colors.steel,
    flexDirection: 'row',
    width: responsiveWidth(62),
    height: responsiveHeight(5)
  },
  docViewBtnTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(2.2)
  },
  docIconBtn: {
    resizeMode: 'contain',
    height: 30,
    width: responsiveWidth(10)
  },
  bottomSettingsSection: {
    flex: 0,
    flexDirection: 'row',
    height: 30
  },
  hideSettingSectionIconWrapper: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 25
  },
  hideSettingSectionButton: {
    backgroundColor: Colors.transparent,
    flex: 0,
    marginLeft: Metrics.baseMargin
  },
  helpScreenView: {
    flexDirection: 'row'
  },
  faqView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  faqTxtView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },
  qaTxtView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },
  qaView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  faqTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(2.2),
    color: Colors.snow
  },
  qaTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(2.2),
    color: Colors.snow
  },
  numberView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(5),
    width: '100%',
    backgroundColor: Colors.transparent
  },
  emailView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(5),
    width: '100%',
    backgroundColor: Colors.transparent
  },
  pwdView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: responsiveHeight(5),
    width: '100%',
    backgroundColor: Colors.transparent
  },
  numberTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(2.2),
    color: Colors.snow
  },
  emailTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(2.2),
    color: Colors.snow
  },
  pwdTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(2.2),
    color: Colors.snow
  },
  profileTxtPartView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fbBtnView: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fbBtnTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(2),
    color: Colors.snow
  },
  editIconView: {
    marginLeft: 10
  },
  buyerInfoScreenView: {
    paddingTop: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    width: responsiveWidth(70),
    height: responsiveWidth(42),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconBtnGroupView: {
    flexDirection: 'row'
  },
  linkedInTxtView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeBtnView: {
    backgroundColor: Colors.transparent,
    flex: 1,
    alignItems: 'flex-start'
  },
  downArrowBtnView: {
    backgroundColor: Colors.transparent,
    flex: 1,
    alignItems: 'flex-end'
  },
  buyerInfoTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(2.2),
    color: '#56A0E3'
  },
  linkedTxt: {
    ...Fonts.style.h2,
    fontSize: responsiveFontSize(2),
    color: 'black'
  },
  linkedInfoTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(2),
    color: '#949494'
  },
  buyerInfoTxtView: {
    backgroundColor: Colors.transparent,
    justifyContent: 'center',
    alignItems: 'center'
  },
  linkedInfoTxtView: {
    backgroundColor: Colors.transparent
  },
  linkedTxtView: {
    backgroundColor: Colors.transparent
  },
  inTxt: {
    ...Fonts.style.h2,
    fontSize: responsiveFontSize(2),
    color: Colors.snow
  },
  inTxtView: {
    backgroundColor: '#006599'
  },
  rowView: {
    flexDirection: 'row',
    width: '100%',
    height: responsiveWidth(10)
  },
  leftTxtView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: Colors.transparent
  },
  rightTxtView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: Colors.transparent
  },
  diamondView: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  tutorialsScreenView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },
  tutorialsTxt: {
    ...Fonts.style.h1,
    fontSize: responsiveFontSize(2.5),
    color: Colors.snow
  },
  diamondTxtView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  spaceView: {
    flex: 0.5
  },
  numInput: {
    height: 18,
    width: responsiveWidth(36),
    fontSize: responsiveFontSize(2),
    color: Colors.snow,
    marginLeft: 5
  },
  mailInput: {
    height: 18,
    width: responsiveWidth(42),
    fontSize: responsiveFontSize(2),
    color: Colors.snow,
    marginLeft: 5
  },
  pwdInput: {
    height: 18,
    width: responsiveWidth(23),
    fontSize: responsiveFontSize(2.2),
    color: Colors.snow,
    marginLeft: 5
  }
})
