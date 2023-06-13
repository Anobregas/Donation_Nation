const db = require('../config/connection');
const { Charity, User } = require('../models');

const charityData = require('./charityData.json');
const userData = require('./userData.json');
db.once('open', async () => {
  await Charity.deleteMany({});
  await User.deleteMany({});

  const charities = await Charity.insertMany(charityData);
  const users = await User.insertMany(userData);

  console.log('seeded!');
  process.exit(0);
});
