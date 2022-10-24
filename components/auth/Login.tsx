import React, { useRef } from 'react'
import styles from '@/styles/Login.module.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import LoginIcon from '@mui/icons-material/Login';


type Props = {
  handleChange : (e : React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  handleSubmit : (e : React.FormEvent<HTMLFormElement>) => void
}


const Login : React.FC<Props> = ({handleChange, handleSubmit}: Props) =>{
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <LoginIcon fontSize='large'/>
            <div>
            <TextField 
              margin="normal"
              required
              fullWidth
              id="username"
              label="ID"
              name="username"
              autoComplete="username" 
              ref = {usernameRef}
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
              ref = {passwordRef}
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
               }}            >
              Login
            </Button>
            </div>
            <div>
            <Link href='/auth/join' >
                <h5 style={{
                   marginTop: "0.2rem",
                   textAlign:"end",
                   color:"#5e5ee6",
                   cursor:"pointer",fontSize: 13 }}>
						Move to Sign-Up
            </h5>
            </Link>
            <Link href="/auth/googleLogin">
                <Button 
                  fullWidth
                  variant="text"
                  sx={{  mt: 0.5, mb: 0 }}
                  >
                 Google-login                 
                </Button>
            </Link>
            </div>
            <div>
                <h5 style={{ marginTop: "13rem",textAlign:"center",color:"black" }} ></h5>
            </div>
            </form>
        
    </div>
  )
}

export default Login