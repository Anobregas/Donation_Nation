import { gql } from '@apollo/client';

export const QUERY_CHARITY = gql`
  query charity {
    charity {
      _id
      charityName
      description
      goal
      stripeLink
    }
  }
`;

export const QUERY_USER = gql`
  query user {
    user{
      _id
      firstName
      lastName
      email
      password
    }
  }
`;
