import { useState } from 'react';
import './App.css';
import Box from './components/box'
import Login from './components/login'
import Navbar from './components/NavBar';

function App() {
// This is where regular 'vanilla' JavaScript goes.//
async function fetchImages() {
  const response = await fetch("https://picsum.photos/v2/list");
  const data = await response.json();
  setPhotos(data);
  console.log(data);
}


//STATE variables goe here
const [user,setUser] = useState("Mafalda");
const [password,setPassword] = useState();
const [loggedIn, SetLoggedIn] = useState(false);
const [photos,setPhotos] = useState();

//Other variables

//
  return (
    // JSX Goes here
    <div className="App">
      <Navbar />
      

      <br></br>
      <div className='buttons'>
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
      </div>









      {/* <h1>Hello</h1>
      <Box name="Hermione"></Box>
      <Box name="Harry"></Box>
      <Box name="Fred"></Box>
      <Box name={user}></Box>
      <Box name={password}></Box>
      <Login setUser={setUser} setPassword={setPassword}></Login>

      {user && <h3>user exists</h3>}

      {loggedIn ? <h3>logged in</h3> : <h3>not logged in</h3>} */}


      </div>
  );
}

export default App;
