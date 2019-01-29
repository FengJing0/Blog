import {combineReducers} from "redux"
import {GET_USER_INFO} from "./actions-type"


const initUserInfo = {
  id:'',
  username:'',
  nickname:''
}

function userInfo (state=initUserInfo,action){
  switch (action.type) {
    case GET_USER_INFO:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  userInfo
})