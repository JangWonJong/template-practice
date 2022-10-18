import { call, put, takeLatest, takeLeading, takeEvery } from 'redux-saga/effects'
import { uploadSuccess, uploadFailure, uploadRequest,postActions } from '../slices/post';
import { postJoinApi } from '../apis/post';
import { PostJoinType, PostInput } from '../types'
import {AxiosResponse } from 'axios'



function* post(post: PostJoinType){
    try{
        console.log(' 3.  saga내부 upload 성공  '+ JSON.stringify(post))
        const response: any = postJoinApi(post.payload)
        yield put(uploadSuccess(response.payload))
    }catch(error){
        yield put(postActions.uploadFailure(error))
    }
}

export function* watchUpload(){
    const { uploadRequest } = postActions
    yield takeEvery(uploadRequest, post)
}
