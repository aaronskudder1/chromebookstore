//const { MongoClient } = require('mongodb');
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);



let connection;
try {
    connection = await client.connect();
} catch(error) {
    ConsoleLogger(error + 'it sucks');
}
const db = connection.db('chromebookstore');


export default db;

/*
//import { ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
import documents from './data.js';

const uri = process.env.ATLAS_URI;
//const uri = "mongodb+srv://aaron_db_user:AEjne0bU96ePlmZi@cluster0.lx773jd.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);
/*const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const database = client.db('chromebookstore');
    const products = database.collection('products');
    await client.connect();
    await client.db("chromebookstore").command({ping:1});
    console.log ('database connected');
 //   const result = await products.insertMany(documents);
//    console.log(`${result.insertedCount} data added to chromebookstore'`);

  } finally {
    await client.close();
  }
}
/*    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
*/