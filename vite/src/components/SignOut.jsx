import React, {useContext, useState} from 'react';
import {UserContext} from '../user/UserContext';

function SignOut() {
  const {signOut} = useContext(UserContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <div>
      <button
        className='btn'
        style={{fontSize: '20px', marginLeft: '10px', width: '110px'}}
        onClick={handleSignOut}
        type='button'>
        Sign out
      </button>
    </div>
  );
}

export default SignOut;
