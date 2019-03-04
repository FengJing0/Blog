import {put, takeEvery} from 'redux-saga/effects'
import {GET_CATEGORY_LIST_SYNC,ADD_CATEGORY_SYNC} from "./actions-type"

import {getCategoryList as getCategoryListAction,addCategory as addCategoryAction} from "./actions"

import {blog} from "../../../api"

function* getCategoryList() {
  try {
    const res = yield blog.getCategoryApi()
    if (!res.errorCode) {
      yield put(getCategoryListAction(res))
    }
  } catch (e) {
    console.log('获取列表失败：' + e)
  }
}

function* addCategory(category) {
  try {
    const res = yield blog.addCategoryApi({name: category.data})
    if (!res.errorCode) {
      yield put(addCategoryAction(res))
    }
  } catch (e) {
    console.log('新增失败：' + e)
  }
}

export const getCategoryListSaga = () => takeEvery(GET_CATEGORY_LIST_SYNC, getCategoryList)

export const addCategorySaga = () => takeEvery(ADD_CATEGORY_SYNC, addCategory)