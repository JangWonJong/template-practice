import axios, {AxiosError, AxiosResponse} from "axios";
import { Post } from "../types";

const SERVER = `http://localhost:8080`
const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
    
}


export const postJoinApi = async (
    payload: {
        title: string,
        contents: string,
    }) => {
        try{
            console.log(typeof({payload}))
            const response : AxiosResponse<any, Post> =
            await axios.post(`${SERVER}/board/posts`, payload, { headers })
            console.log(response.data)
            if(response.data.message == "SUCCESS") { alert('업로드 성공') }
            return response.data
        }catch(err){
            return err;
        }
    }


    

    

    