import * as actionsType from './actions-type'
import {scope} from "../../../enum"


const initUserInfo = {
  id:23,
  username:'11',
  nickname:'11',
  scope:scope.Super
}

export default  (state=initUserInfo,action) => {
  switch (action.type) {
    case actionsType.GET_USER_INFO:
      return action.data
    default:
      return state
  }
}