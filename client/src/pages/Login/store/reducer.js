import * as actionsType from './actions-type'

const initUserInfo = {
  id:11,
  username:'11',
  nickname:'11',
  scope:32
}

export default  (state=initUserInfo,action) => {
  switch (action.type) {
    case actionsType.GET_USER_INFO:
      return action.data
    default:
      return state
  }
}