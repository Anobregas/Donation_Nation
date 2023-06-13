import { gql } from '@apollo/client';

export const ADD_CHARITY = gql`
  mutation addCharity($charityName: String!, $description: String!, $goal: Int!, $stripeLink: String!) {
    addCharity(charityName: $charityName, description: $description, goal: $goal, stripeLink: $stripeLink) {
      _id
      charityName
      description
      goal
      stripeLink
    }
  }
`;
/* Future Development */
export const UPDATE_CHARITY = gql`
  mutation updateCharity($charityName: String!, $description: String!) {
    updateCharity(charityName: $charityName, description: $description) {
      _id
      charityName
      description
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      _id
      firstName
      lastName
      email
      password
    }
  }
`;
