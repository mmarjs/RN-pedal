import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { LoginTypes } from '../Redux/LoginRedux'
import { OpenScreenTypes } from '../Redux/OpenScreenRedux'

/* ------------- Sagas ------------- */

import { login } from './LoginSagas'
import { openScreen } from './OpenScreenSagas'

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(OpenScreenTypes.OPEN_SCREEN, openScreen)
  ]
}
