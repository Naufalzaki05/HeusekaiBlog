import React, { useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    
    <div className="login">
      <div className="loginWrapper">
        <h3 className="loginTitle">Login</h3>
        <Box component ="form" className="loginForm" onSubmit={handleSubmit}
           sx={{
           '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off">
          <label className="loginLabel">Username</label>
          <input
            type="text"
            placeholder="username"
            className="loginInput"
            required
            ref={userRef}
          />
          <label className="loginLabel">Password</label>
          <input
            type="password"
            placeholder="password"
            className="loginInput"
            required
            ref={passwordRef}
          />
          <motion.button className="loginBtn" type="submit" disabled={isFetching}
          whileHover={{ scale: 0.9 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            LOGIN
          </motion.button>
        </Box>
      </div>
      <Link to="/register" className="link btns">
        <motion.button className="loginRegisterBtn"
           whileHover={{ scale: 1.2 }}
           whileTap={{ scale: 0.9 }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}>
           Register
           </motion.button>
      </Link>
    </div>
  );
}