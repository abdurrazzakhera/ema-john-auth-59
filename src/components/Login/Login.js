import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handelEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handelPasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password);
    console.log(user);
  };
  if (user) {
    navigate("/");
  }

  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>Login</h2>
        <form onSubmit={handleLogin}>
          <div className='input-group'>
            <label htmlFor=''>Email</label>
            <input
              onBlur={handelEmailBlur}
              type='email'
              name=''
              id=''
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor=''>Password</label>
            <input
              onBlur={handelPasswordBlur}
              type='password'
              name=''
              id=''
              required
            />
          </div>
          <p>{loading && "loadding ..."}</p>
          <p>Signed In User: {user?.email}</p>
          <p>{error?.message}</p>
          <input className='form-submit' type='submit' value='Login' />
        </form>
        <p className='signup-para'>
          New to Ema-john?{" "}
          <Link className='signup-page' to='/singup'>
            {" "}
            Create New Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
