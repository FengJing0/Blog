import {combineReducers} from "redux"


const initState = 'test'

function test (state=initState,action){
  switch (action.type) {
    case 'click':
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  test
})