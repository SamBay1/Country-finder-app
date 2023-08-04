import React, {useContext} from 'react';
import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

import {UserContext} from '../user/UserContext';
import {app} from '../FireBaseConfig';

function NavBar() {
  const navBar = {
    zIndex: 5,
    display: 'flex',
    justifyContent: 'flex-start',
    width: '15vw',
    maxWidth: '200px',
    alignItems: 'center',
  };

  console.log(app);
  const {user} = useContext(UserContext);
  console.log(user);

  const styleFunc = {
    color: 'purple',
    fontSize: '25px',
  };

  return (
    <>
      <div style={navBar}>
        <nav>
          <ul>
            <li>
              <Link style={styleFunc} to='./'>
                Home
              </Link>
            </li>

            <li>
              <Link style={styleFunc} to='./About'>
                About
              </Link>
            </li>

            <li>
              <Link style={styleFunc} to='./SignIn'>
                Sign in
              </Link>
            </li>

            <li>
              <Link style={styleFunc} to='./Register'>
                Register
              </Link>
            </li>
            <li>
              <Link style={styleFunc} to='./SignOut'>
                Sign out
              </Link>
            </li>
            <li>
              <Link style={styleFunc} to='/Chat'>
                Chat
              </Link>
            </li>
            {/* {user ? <p>user logged in</p> : <p>user logged out </p>} */}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
