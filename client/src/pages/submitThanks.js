import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer';


export default function Login() {
  
  return (
    
        <div className="homepage">
          <div className='home-title'>
            <h1>Thank you for signing up!</h1>
            <p>Let's take some next steps!</p>
          </div>
          <Link to='/createCharity'><button className="btn-discover">
              Create your own Charity
            </button></Link>  
          <div className="home-body">
            <h2>Thanks for joining our Mission</h2>
            <h4> Welcome to Donation Nation! When you become a member, you gain the incredible opportunity to create a meaningful impact in the lives of others. Joining our community of like-minded individuals allows you to support causes that truly resonate with your values and make a difference for those who are in need. With our user-friendly donation processes, personalized giving records, and valuable insights about charitable organizations, signing up gives you the power to amplify the effect of your contributions and bring about positive change in the world. We're thrilled to have you on board!
            </h4>
            <Link to='/dashboard'><button className="btn-donate">
              Discover Charities
            </button></Link>
          </div>
          <Footer />
        </div>
      )}
  