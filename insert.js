const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://lennyjohn399:B*Q3mJDX_f7zZb4@cluster0.ce7uvcp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'contact';

(async function() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection('contactlist');

    const documents = [
      { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
      { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
      { lastName: "Emilie", firstName: "brouge", email: "emilie.b@gmail.com", age: 40 },
      { lastName: "Alex", firstName: "brown", age: 4 },
      { lastName: "Denzel", firstName: "Washington", age: 3 }
    ];

    const result = await collection.insertMany(documents);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
})();
