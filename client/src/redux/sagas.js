import {saga as userSaga} from '../pages/Login/store'

function* mySaga() {
  yield userSaga.userSaga();
}

export default mySaga