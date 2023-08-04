import React, {useContext, useState} from 'react';
import {UserContext} from '../user/UserContext';

function Register() {
  const {register} = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  function handleSignOut() {
    alert('Signed out successfully!!');
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    register(email, password);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label style={{fontSize: '22px', marginLeft: '10px'}} htmlFor='email'>
            Email
          </label>
          <input
            style={{fontSize: '20px', marginLeft: '10px'}}
            onChange={emailChangeHandler}
            type='email'
            autoComplete='off'
            value={email}
            name='email'
            id='email'
          />
          <label
            style={{fontSize: '22px', marginLeft: '10px'}}
            htmlFor='password'>
            Password
          </label>
          <input
            style={{fontSize: '20px', marginLeft: '10px'}}
            onChange={passwordChangeHandler}
            type='password'
            value={password}
            name='password'
            id='password'
          />
          <button
            style={{fontSize: '20px', marginLeft: '10px', width: '110px'}}
            className='btn'
            type='submit'>
            Register
          </button>
        </form>

        <button
          className='btn'
          style={{fontSize: '20px', marginLeft: '10px', width: '110px'}}
          onClick={handleSignOut}
          type='button'>
          Sign out
        </button>
      </div>
    </>
  );
}

export default Register;
