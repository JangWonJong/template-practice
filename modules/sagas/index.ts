import { all, fork } from 'redux-saga/effects';
import {  watchJoin, watchLogin,} from './userSaga'
import { watchUpload } from './postSaga'


export default function* rootSaga() {
  yield all([
    fork(watchJoin),
    fork(watchLogin),
    fork(watchUpload)
   
  ]);
}