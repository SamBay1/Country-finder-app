import React from 'react';
// import {createContext} from 'react';
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import Countries from './components/Countries';
import Header from './components/Header';
import CountryDetail from './components/CountryDetail';
import NavBar from './components/NavBar';
import {UserContextProvider} from './user/UserContext';
import About from './components/About';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Error from './components/Error';
import SignOut from './components/SignOut';
import Chat from './components/Chat';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <NavBar />
        {/* <Filter /> */}
        <Routes>
          {/* <Route path='./Home' element={<Home />}></Route> */}
          {/* <Route path='/' element={<Countries />}></Route> */}
          <Route path='/' element={<Countries />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
          <Route path='/SignOut' element={<SignOut />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/Chat' element={<Chat />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/name/:name' element={<CountryDetail />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
