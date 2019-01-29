import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {GET_USER_INFO_SYNC} from "./actions-type"
import {getUserInfo as getUserInfoAction} from "./actions"

import {loginApi} from "../api/user"

function* getUserInfo(values) {
  try {
    const res = yield loginApi(values.data)
    if(res){
      yield put(getUserInfoAction(res.data))
    }
  }catch (e) {
    console.log('登录失败：'+e)
  }
}

function* mySaga() {
  yield takeEvery(GET_USER_INFO_SYNC, getUserInfo);
}

export default mySaga