import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './components/login';
import Navbar from './components/NavBar';
import Home from './pages/home';
import Profile from './pages/profile';

function App() {
  // // This is where regular 'vanilla' JavaScript goes.//
  // async function fetchImages() {
  //   const response = await fetch("https://picsum.photos/v2/list");
  //   const data = await response.json();
  //   setPhotos(data);
  //   console.log(data);
  
  
// //STATE variables go here
// const [user,setUser] = useState("Mafalda");
// const [password,setPassword] = useState('');
// const [loggedIn, SetLoggedIn] = useState(false);
// const [photos,setPhotos] = useState();

//Other variables

//
return (
  <div className="App">
  <Router>
    <Navbar />
      <Routes>
            <Route path="home" element={<Home />}/>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route element={Login} />     
      </Routes>
  </Router>

  {/* <div className='buttons'>
      <button onClick={(event) => fetchImages()}>Fetch pics</button>
      <br></br>
      <button onClick={(event) => setPhotos([])}>Switch photos off</button>
      </div>
      <div className='pictures'>
      {photos && photos.map((item,index) => {
        return (
          <div>
            <img src={item.download_url} width="300px" />
          </div>
        )
      })}
      </div> */}
</div>
);
    }

export default App;
