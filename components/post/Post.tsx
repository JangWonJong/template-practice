import React from 'react'
import styles from '@/styles/Register.module.css'
import Link from 'next/link'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import DeleteIcon from '@mui/icons-material/Delete'
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

type Props = {
  handleChange : (e : React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  handleSubmit : (e : React.FormEvent<HTMLFormElement>) => void
}
const Register : React.FC<Props> = ({handleChange, handleSubmit}: Props) =>{

    return (
        <div className={styles.container}>
          <form onSubmit={handleSubmit}>
            <ContentPasteIcon fontSize='large'/>
            <h1 ></h1>
            <div>
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              label="제목"
              type="title"
              id="title"
              onChange={handleChange}
            />     
            
            <TextField
              margin="normal"
              required
              fullWidth
              name="contents"
              label="내용"
              type="contents"
              id="contents"
              onChange={handleChange}
            />
            </div>
            <div>
            <Button variant="contained" component="label">
            Upload
            <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <ChatIcon />
            </IconButton>
            </div>
            <Button>
                <DeleteIcon/>
            </Button>
            <div>
                        
            </div>
            
            </form>
        
    </div>
  )
}

export default Register