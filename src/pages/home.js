import { useState } from 'react';

function Home() {
   // This is where regular 'vanilla' JavaScript goes.//
   async function fetchImages() {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
    console.log(data);
  }       

const [photos,setPhotos] = useState();
  
  
    return (
        <>
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
        </>
    )        
}

export default Home;