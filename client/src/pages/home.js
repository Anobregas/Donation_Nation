import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Components/loading';
import Footer from '../Components/footer';


export default function Login() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (<Loading />
      ) : (
        <div className="homepage">
          <div className='home-title'>
            <h1>Welcome to Donation Nation</h1>
            <p>"Empower giving, Transform Lives."</p>
          </div>
          <Link to='/dashboard'><button className="btn-discover">
              Discover Charities
            </button></Link>  
          <div className="home-body">
            <h2>Come Join our Mission</h2>
            <h4> By signing up with Donation Nation, it allows you to make a tangible difference in the lives of others. By joining a community of like-minded individuals, you can contribute to causes that align with your values and support those in need. With streamlined giving processes, personalized giving histories, and access to information about charitable organizations, signing up empowers you to maximize the impact of your donations and create a positive change in the world.
            </h4>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
