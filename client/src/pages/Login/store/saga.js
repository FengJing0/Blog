import {put, takeEvery} from 'redux-saga/effects'
import {GET_USER_INFO_SYNC, VERIFY_TOKEN_SYNC} from "./actions-type"

import {getUserInfo as getUserInfoAction, verifyToken} from "./actions"

import {user} from "../../../api"

function* getUserInfo(values) {
    try {
        const res = yield user.loginApi(values.data)
        if (!res.errorCode) {
            // console.log(res)
            sessionStorage.setItem('T', res.token)
            yield put(getUserInfoAction(res))
        }
    } catch (e) {
        console.log('登录失败：' + e)
    }
}

function* verify(values) {
    try {
        let res = yield user.verifyApi(values.data)
        if (!res.errorCode) {
            res = JSON.parse(res.isValid)
            if (res) {
                yield put(verifyToken(res))
            }else{
                sessionStorage.removeItem('T')
            }
        }
    } catch (e) {
        console.log('登录失败：' + e)
    }
}

export const userSaga = () => takeEvery(GET_USER_INFO_SYNC, getUserInfo)

export const verifySaga = () => takeEvery(VERIFY_TOKEN_SYNC, verify)