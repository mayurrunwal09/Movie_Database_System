// Home.js
import React from 'react';
import movieImage from '../Images/movieimage.jpg';
const Home = () => {
  return (
    <div>
      <h2>Welcome to Movie Database System</h2>
      <img src={movieImage} alt="Movie Image" style={{ maxWidth: '100%', height: '700px',width: '1500px' }} />

      <p>
        This is a simple movie database system. You can use the navigation bar to explore different components.
      </p>
      <p>
        Customize this component to add any additional content or features you want on your home page.
      </p>
    </div>
  );
};

export default Home;
