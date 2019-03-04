import {combineReducers} from "redux"
import {reducer as userReducer} from "../pages/Login/store"
import {reducer as categoryReducer} from "../components/CategorySelect/store"


export default combineReducers({
  userInfo:userReducer,
  category:categoryReducer
})