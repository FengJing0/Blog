import {saga as userSaga} from '../pages/Login/store'

import {saga as categorySaga} from '../components/CategorySelect/store'

function* mySaga() {
  yield userSaga.userSaga();
  yield categorySaga.getCategoryListSaga();
  yield categorySaga.addCategorySaga();
}

export default mySaga