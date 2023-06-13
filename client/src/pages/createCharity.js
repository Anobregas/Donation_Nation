import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CHARITY } from '../Utils/mutations';


export default function Login() {
        const [addCharity, { loading }] = useMutation(ADD_CHARITY);
      
        const handleSubmit = (event) => {
          event.preventDefault();
      
          // Retrieve input values from the form
          const charityName = document.getElementById('charityNameInput').value;
          const description = document.getElementById('descriptionInput').value;
          const goal = parseInt(document.getElementById('goalInput').value);
          const stripeLink = document.getElementById('stripeLinkInput').value;
      
          // Perform the mutation
          addCharity({
            variables: {
              charityName,
              description,
              goal,
              stripeLink,
            },
          })
            .then((response) => {
              // Handle the response after the mutation is successful
              console.log('Charity added:', response.data.addCharity);
            })
            .catch((error) => {
              // Handle any errors that occur during the mutation
              console.error('Error adding charity:', error);
            });
      
          // Reset the form after submission
          document.getElementById('charityNameInput').value = '';
          document.getElementById('descriptionInput').value = '';
          document.getElementById('goalInput').value = '';
          document.getElementById('stripeLinkInput').value = '';
        };
 
  return (
   
        <form onSubmit={handleSubmit} className="signup-form">
        <p className="title">Create your Charity </p>
        <p className="message">Get started to share your project with the world! </p>
            <div className="flex">
        </div>  
                
        <label>
            <input id="charityNameInput" placeholder="" type="text" className="input"></input>
            <span>Charity Name</span>
        </label>  

        <label>
            <input id="descriptionInput" placeholder="" type="text" className="input"></input>
            <span>Description</span>
        </label> 
            
        <label>
            <input id="goalInput" placeholder="" type="text" className="input"></input>
            <span>Goal</span>
        </label>
        <label>
            <input id="stripeLinkInput" placeholder="insert hyperlink" type="text" className="input"></input>
            <span>Stripe</span>
        </label>
        <button type="submit" disabled={loading} className="submit">Create</button>
    </form>
      )}