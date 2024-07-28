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

    const result = await collection.updateOne(
      { lastName: "Kefi", firstName: "Seif" },
      { $set: { firstName: "Anis" } }
    );
    console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
})();
