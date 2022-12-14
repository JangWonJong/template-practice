import React from 'react'
import styles from '@/styles/Register.module.css'
import Link from 'next/link'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

type Props = {
  handleChange : (e : React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  handleSubmit : (e : React.FormEvent<HTMLFormElement>) => void
}
const Register : React.FC<Props> = ({handleChange, handleSubmit}: Props) =>{

    return (
        <div className={styles.container}>
          <form onSubmit={handleSubmit}>
            <AssignmentIndIcon fontSize='large'/>
            <div>

            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="ID"
              type="username"
              id="username"
              onChange={handleChange}
            />     
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="PW"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="NICKNAME"
              name="nickname"
              autoComplete="nickname"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id=""
              label="EMAIL"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />  
            </div>
            
            <div>
            <Button 
               type="submit"
               variant="contained"
               color='inherit'
               sx={{ mt: 3, mb: 2 }}
               style={{
                borderRadius: 35,
                backgroundColor: "white",
                padding: "10px 20px",
                fontSize: "15px"
               }}            
            >
                Sign-Up
            </Button>
            </div>
            <div>

            <Button
              type="submit"
              variant="contained"
              color='inherit'
              sx={{ mt: 1, mb: 5 }}
              style={{
              borderRadius: 35,
              backgroundColor: "white",
              padding: "15px 20px",
              fontSize: "10px"
              }}  
             >
                <Link href='/auth/login' >
                    <a>Move to Login</a>
                </Link>
             </Button>           
            </div>
            <div>
                <h5 style={{
                   marginTop: "0.2rem",
                   textAlign:"end",
                   color:"#5e5ee6",
                   cursor:"pointer",fontSize: 10,
                    }}>
                  ?????? ???????????? MN??? ????????? ?????? ??? ???????????? ??????????????? ????????? ????????? ???????????????.
                </h5>
            </div>
            </form>
        
    </div>
  )
}

export default Register