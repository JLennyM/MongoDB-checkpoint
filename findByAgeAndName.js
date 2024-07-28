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

    const documents = await collection.find({
      $and: [
        { age: { $gt: 25 } },
        { $or: [ { LastName : 'Ben' }, { FirstName : 'Morris' } ] }
      ]
    }).toArray();
    console.log(documents);
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
  }
})();
