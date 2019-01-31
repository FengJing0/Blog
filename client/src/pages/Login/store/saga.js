import {put, takeEvery} from 'redux-saga/effects'
import {GET_USER_INFO_SYNC} from "./actions-type"

import {getUserInfo as getUserInfoAction} from "./actions"

import {user} from "../../../api"

function* getUserInfo(values) {
  try {
    const res = yield user.loginApi(values.data)
    if (!res.errorCode) {
      yield put(getUserInfoAction(res.data))
    }
  } catch (e) {
    console.log('登录失败：' + e)
  }
}

export const userSaga = () => takeEvery(GET_USER_INFO_SYNC, getUserInfo)