import * as actionsType from './actions-type'

const initUserInfo = {
  id:0,
  username:'',
  nickname:''
}

export default  (state=initUserInfo,action) => {
  switch (action.type) {
    case actionsType.GET_USER_INFO:
      return action.data
    default:
      return state
  }
}