import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
  const [name, setName] = useState("");

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);

  const handelname = (event) => {
    setName(event.target.value);
  };

  const handelAddress = (event) => {
    setAddress(event.target.value);
  };
  const handelPhone = (event) => {
    setPhone(event.target.value);
  };
  const handelCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, address, phone };
    console.log(shipping);
  };

  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>Shipping Information</h2>
        <form onSubmit={handelCreateUser}>
          <div className='input-group'>
            <label htmlFor='name'>Name</label>
            <input onBlur={handelname} type='text' name='name' id='' required />
          </div>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input
              value={user?.email}
              readOnly
              type='email'
              name=''
              id=''
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='adresss'>Address</label>
            <input onBlur={handelAddress} type='text' name='' id='' required />
          </div>
          <div className='input-group'>
            <label htmlFor='confirm-password'>Phone Number</label>
            <input onBlur={handelPhone} type='text' name='' id='' required />
          </div>
          <input
            className='form-submit'
            type='submit'
            value='Procced Shipping'
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
