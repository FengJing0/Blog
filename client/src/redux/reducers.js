import {combineReducers} from "redux"
import {reducer as userReducer} from "../pages/Login/store"


export default combineReducers({
  userInfo:userReducer
})