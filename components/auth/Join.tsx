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

            <Button>
            <Link href='/auth/login' >
                <h5 style={{ marginTop: "0.5rem",textAlign:"end",color:"#5e5ee6",cursor:"pointer" }}>
						    Move to Login
            </h5>
            </Link> </Button>           
            </div>
            <div>
                <h5>계속 진행하면 MN의 서비스 약관 및 개인정보 보호정책에 동의한 것으로 간주됩니다.</h5>
            </div>
            </form>
        
    </div>
  )
}

export default Register