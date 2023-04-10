const { MongoClient } = require('mongodb');

async function connectToDb() {
  const url = "mongodb://localhost:27017/hl";
  const client = new MongoClient(url);
  await client.connect();
  console.log('Connected to MongoDB');
  return client.db('hl');
}

module.exports = {
  connectToDb,
};