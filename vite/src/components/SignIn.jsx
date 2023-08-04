// ==========================================

import React, {useContext, useState} from 'react';
import {UserContext} from '../user/UserContext';
// import {Navigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

// ========================================

function SignIn() {
  const navigate = useNavigate();
  // ===========================================

  const {signIn} = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    navigate('/');
    signIn(email, password);
  };
  // ============================================

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          style={{fontSize: '20px', marginLeft: '10px', width: '110px'}}
          htmlFor='email'>
          Email
        </label>
        <input
          onChange={emailChangeHandler}
          style={{fontSize: '20px', marginLeft: '10px'}}
          type='email'
          autoComplete='off'
          name='email'
          id='email'
        />
        <label
          style={{fontSize: '20px', marginLeft: '10px', width: '110px'}}
          htmlFor='password'>
          Password
        </label>
        <input
          onChange={passwordChangeHandler}
          style={{fontSize: '20px', marginLeft: '10px'}}
          type='password'
          name='password'
          id='password'
        />
        <button
          style={{fontSize: '20px', marginLeft: '10px', width: '110px'}}
          className='btn'
          type='submit'>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
