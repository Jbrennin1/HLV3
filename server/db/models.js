const { connectToDb } = require('./db');

async function main() {
  const db = await connectToDb();
  const houses = await db.collection('houses').find().toArray();
  return houses;
}

main().catch(console.error);