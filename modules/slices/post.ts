import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import { LoginUser, Post, PostState, User, UserInfo, UserInfoState, UserLoginInput, UserState  } from '../types/index'

/**
export interface UserInput{
    username : string, password: string, email: string, name: string, tel:string,
    birth:string, address: string
}
 */

const initialState: PostState = {
    data: [],
    status: 'idle',
    isPosted: false,
    error : null,
    posted: null,
    check: false
}

//export declare function createSlice<State, CaseReducers extends SliceCaseReducers<State>
//, Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>): 
//Slice<State, CaseReducers, Name>;

export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{
        uploadRequest(state: PostState, action : PayloadAction<Post>){
            state.status = 'loading';
            console.log(`진행4 : 댓글 정보 ${JSON.stringify(state.data)}`)
            
        },
        uploadSuccess(state, action : PayloadAction<Post>){
            state.status = 'idle'  
            state.data = [...state.data, action.payload]
            
        },
        uploadFailure(state: PostState, {payload}){
            state.status = 'failed'
            state.data = payload
        },
       
        uploadUserRequest(state : PostState, action:PayloadAction){
            console.log(`진행: 토큰으로 유저 정보 요청 ${JSON.stringify(action.payload)}`)
        },
        uploadUserSuccess(state: PostState, action: PayloadAction<Post>){
            console.log(`진행 : 유저 정보 요청 성공 ${JSON.stringify(action.payload)}`)
            state.data = [...state.data, action.payload]
        },
        uploadUserFailure(state, {payload : error}){
            console.log(`진행 : 유저 정보 요청 실패`)
        },
        
    }
})

export const { uploadRequest, uploadSuccess, uploadFailure,
                uploadUserRequest,uploadUserSuccess, uploadUserFailure  } = postSlice.actions;

const {reducer, actions} = postSlice
export const postActions = actions
export default reducer