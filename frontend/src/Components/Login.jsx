import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'



const Login = () => {
  const navigate = useNavigate();
  const[val,setVal] = useState();
const inputhandler=(e)=>{
  setVal({...val,[e.target.name]:e.target.value});



}

const addhandler= () =>{

  console.log(val)
  axios.post('http://localhost:3000/user/login',val).then((res)=>{
    console.log(res)
    alert(res.data);
    navigate('/dash')
  })
  .catch((err)=>{
    console.log(error)

  })
}

  return (
    <div style={{margin:'15%'}}>
        <Typography  style={{color:'darkblue'}}>Employe Login</Typography> <br>
        </br>
         <TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={inputhandler}  />
         <br /><br />
         <TextField id="filled-basic" label="Password" variant="filled" name="password" onChange={inputhandler}/>
         <br /> <br />

         <Button variant="filled" style={{color:'darkblue'}}  onClick={addhandler} >Login</Button>
         <br /> <br />
         <Typography style={{color:'darkblue'}}> <Link to={'/s'}>New use? Click here </Link> 
         </Typography>
    </div>
    
    
  )
}

export default Login