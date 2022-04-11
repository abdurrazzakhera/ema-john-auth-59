import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>Login</h2>
        <form action=''>
          <div className='input-group'>
            <label htmlFor=''>Email</label>
            <input type='email' name='' id='' required />
          </div>
          <div className='input-group'>
            <label htmlFor=''>Password</label>
            <input type='password' name='' id='' required />
          </div>
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
