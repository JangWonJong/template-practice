import React, {useState, useEffect} from 'react'
import Register from '@/components/post/Post'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { joinRequest } from '@/modules/slices/user'
import { Post, } from '@/modules/types'
import { AppState } from '@/modules/store'


const RegisterPage=()=> {
  const [loginUser, setLoginUser] = useState<Post>({title: '', contents:''})
  const dispatch = useAppDispatch()

  const {isLoggined, loginedUser} = useAppSelector((state: AppState) => state.login || {})
  const onChange = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>)=> {
    e.preventDefault()
    const { name ,value } = e.currentTarget
    setLoginUser({
      ...loginUser, [name]: value
    })
  }
  //const {isLoggined, loginedUser} = useSelector((state: RootStates) => state.login || {})
  
  const onSubmit = (e:any) => {
    e.preventDefault()
    console.log(`댓글 등록 ${JSON.stringify(loginUser)}`)
    dispatch(joinRequest(loginUser))
    console.log(' 댓글 등록된 값: '+JSON.stringify(loginedUser))
  }
  
  return (
    <div>
      <Register handleChange={onChange } handleSubmit={onSubmit}/>
    </div>
)  
}


export default RegisterPage
