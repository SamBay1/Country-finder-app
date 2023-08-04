/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
const defaultValue = {
  user: null,
  handleLogin: () => {
    throw Error('No provider');
  },
  logout: () => {
    throw Error('No provider');
  },
  handleRegister: () => {
    throw Error('No provider');
  },
  isChecked: false,
};
export const UserContext = createContext(defaultValue);

export function UserContextProvider(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  function signOut() {
    const auth = getAuth();

    // ====================================
    auth.signOut().then(() => {
      setUser(null);
    });
    alert('sign out successful!');
    // ====================================
    // signOut(auth)
    //   .then(() => {})
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  function signIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // ...
        setUser(user);
        alert('User logged in successfully!!');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function register(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // ...
        setUser(user);
        alert('User registered successfully! ');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function getCurrentUser() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }
  useEffect(() => {
    getCurrentUser();
  }, []);
  console.log(user);
  return (
    <UserContext.Provider value={{user, register, signOut, signIn}}>
      {props.children}
    </UserContext.Provider>
  );
}
