import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../Utils/mutations';

export default function Login() {
  const [addUser, { loading }] = useMutation(ADD_USER);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [showPopup, setShowPopup] = useState(false); // State for controlling popup visibility

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addUser({
      variables: {
        ...formData
      }
    })
      .then((response) => {
        // Handle the response after the mutation is successful
        console.log('User added:', response.data.addUser);
        setShowPopup(true); // Show the popup after successful submission
      })
      .catch((error) => {
        // Handle any errors that occur during the mutation
        console.error('Error adding user:', error);
      });

    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <p className="title">Signup</p>
      <p className="message">Get started to gain full access to our site.</p>

      <label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder=""
          type="text"
          className="input"
        />
        <span>Firstname</span>
      </label>

      <label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder=""
          type="text"
          className="input"
        />
        <span>Lastname</span>
      </label>

      <label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder=""
          type="text"
          className="input"
        />
        <span>Email</span>
      </label>

      <label>
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder=""
          type="text"
          className="input"
        />
        <span>Password</span>
      </label>

      <button type="submit" disabled={loading} className="submit">
        Submit
      </button>

      {showPopup && ( // Render the popup if showPopup is true
        <div className="popup">
          <p>Thank you for submitting the form!</p>
          <Link to="/submitThanks">Continue</Link>
        </div>
      )}

      <p className="signin">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </form>
  );
}




