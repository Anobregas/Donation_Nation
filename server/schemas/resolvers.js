const { Charity, User } = require('../models');
const charityData = require('../seeds/charityData.json')
const fs = require('fs');

const resolvers = {
  Query: {
    charity: async () => {
      return Charity.find({});
    },
    user: async () => {
      return User.find({})
    }

  },
  Mutation: {
    addCharity: async (parent, args) => {
      const { charityName, description, goal, stripeLink } = args;

      // Logic to add the charity to the database or perform any necessary operations

      const newCharity = {
        _id: "generated-id", // Generate a unique ID for the new charity
        charityName,
        description,
        goal,
        stripeLink
      };
      const user = await Charity.create({ charityName, description, goal, stripeLink });

             // Read the existing data from the JSON file
       const existingData = fs.readFileSync(__dirname + '/../seeds/charityData.json', 'utf8');
       const charities = JSON.parse(existingData);
 
       // Push the new charity to the existing data
       charities.push(newCharity);
 
       // Write the updated data back to the JSON file
       fs.writeFileSync(__dirname + '/../seeds/charityData.json', JSON.stringify(charities));
       
      // Return the newly added charity
      return newCharity;
    },
    updateCharity: async () => {
      const update = await Charity.findOneAndUpdate(
        { _id },
        { charityName },
        { description },
        { new: true }
      );
      return update;
    },
    addUser: async (_, { firstName, lastName, email, password }) => {
      try {
        // Create a new user with the provided data
        const user = await User.create({ firstName, lastName, email, password });

        // Return the created user
        return user;
      } catch (error) {
        // Handle any errors that occur during user creation
        throw new Error('Error adding user');
      }
    },
  },
};

module.exports = resolvers;


      //  // Read the existing data from the JSON file
      //  const existingData = fs.readFileSync('../seeds/charityData.json', 'utf8');
      //  const charities = JSON.parse(existingData);
 
      //  // Push the new charity to the existing data
      //  charities.push(newCharity);
 
      //  // Write the updated data back to the JSON file
      //  fs.writeFileSync('../seeds/charityData.json', JSON.stringify(charities));
