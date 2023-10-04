import { useState, useEffect } from 'react';
export default function Profile() {
    const [photos, setPhotos] = useState([]);

  async function fetchImages() {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
    console.log(data);
  }

  useEffect(() => {
    fetchImages(); // Fetch images when the component mounts
  }, []); // Empty dependency array means it only runs once on mount
    
  
  return (
    <div className="profile">
      <div className="title">Username</div>
      <ul className="numberstates">
        <p>followers: 334</p>
        <p>Post: 34</p>
        <p>following: 244</p>
      </ul>
      <p className="bio">hi my name is ewan</p>
      <div className="picContainer"></div>
  
      <div className='profilePics'>
        {photos.map((item, index) => (
          <div key={index}>
            <img src={item.download_url} width="300px" alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
  
}