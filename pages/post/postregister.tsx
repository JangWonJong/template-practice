import React, {useState, useEffect} from 'react'
import Register from '@/components/post/Post'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Post } from '@/modules/types'
import { AppState } from '@/modules/store'
import { uploadRequest } from '@/modules/slices/post'


const RegisterPage=()=> {
  const [uploadPost, setuploadPost] = useState<Post>({title: '', contents:''})
  const dispatch = useAppDispatch()

  const {isPosted, uploadPosted} = useAppSelector((state: AppState) => state.login || {})
  const onChange = (e: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>)=> {
    e.preventDefault()
    const { name ,value } = e.currentTarget
    setuploadPost({
      ...uploadPost, [name]: value
    })
  }
  //const {isLoggined, loginedUser} = useSelector((state: RootStates) => state.login || {})
  
  const onSubmit = (e:any) => {
    e.preventDefault()
    console.log(`댓글 등록 ${JSON.stringify(uploadPost)}`)
    dispatch(uploadRequest(uploadPost))
    console.log(' 댓글 등록된 값: '+JSON.stringify(uploadPosted))
  }
  
  return (
    <div>
      <Register handleChange={onChange } handleSubmit={onSubmit}/>
    </div>
)  
}


export default RegisterPage
