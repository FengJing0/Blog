import * as actionsType from './actions-type'

const initCategoryList = []

export default  (state=initCategoryList,action) => {
  switch (action.type) {
    case actionsType.GET_CATEGORY_LIST:
      return action.data
    default:
      return state
  }
}