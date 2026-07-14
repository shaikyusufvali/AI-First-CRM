import {
  TextField,
  Button,
  Paper,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username:"",
    password:""
  });


  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const handleLogin = ()=>{

    // temporary login
    if(
      form.username &&
      form.password
    ){

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      navigate("/");

    }

  };


  return (

    <div
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
      }}
    >

      <Paper
        sx={{
          padding:4,
          width:350
        }}
      >

        <Typography
          variant="h4"
          align="center"
          gutterBottom
        >
          🤖 AI First CRM
        </Typography>


        <TextField
          fullWidth
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          sx={{mb:2}}
        />


        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          sx={{mb:3}}
        />


        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>


      </Paper>

    </div>

  );
}