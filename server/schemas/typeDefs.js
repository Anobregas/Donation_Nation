const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Charity {
    _id: ID
    charityName: String
    description: String
    goal: Int
    stripeLink: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Query {
    charity: [Charity]
    user: [User]
  }

  type Mutation {
  addCharity(charityName: String, description: String, goal: Int, stripeLink: String): Charity
  updateCharity(charityName: String, description: String): Charity
  addUser(firstName: String, lastName: String, email: String, password: String): User
  }
`;
// users: [User]
module.exports = typeDefs;
