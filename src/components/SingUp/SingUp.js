import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SingUp.css";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handelemail = (event) => {
    setEmail(event.target.value);
  };
  const handelPassword = (event) => {
    setPassword(event.target.value);
  };
  const handelConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handelCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Your tow password did not match");
      return;
    }
  };
  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handelCreateUser}>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input onBlur={handelemail} type='email' name='' id='' required />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input
              onBlur={handelPassword}
              type='password'
              name=''
              id=''
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='confirm-password'>Confirm password</label>
            <input
              onBlur={handelConfirmPassword}
              type='password'
              name=''
              id=''
              required
            />
          </div>
          <input className='form-submit' type='submit' value='Login' />
        </form>
        <p style={{ color: "red" }}>{error}</p>
        <p className='signup-para'>
          Already have an account?{" "}
          <Link className='signup-page' to='/login'>
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingUp;
