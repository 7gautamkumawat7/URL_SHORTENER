// // lib/mongodb.js

// import { MongoClient } from 'mongodb'

// const uri = process.env.MONGODB_URI
// const options = { 
//   useNewUrlParser: true,
// }

// let client
// let clientPromise

// if (!process.env.MONGODB_URI) {
//   throw new Error('Add Mongo URI to .env.local')
// }

// if (process.env.NODE_ENV === 'development') { 
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options)
//     global._mongoClientPromise = client.connect()
//   }
//   clientPromise = global._mongoClientPromise
// } else {
//   client = new MongoClient(uri, options)
//   clientPromise = client.connect()
// }

// export default clientPromise

// // lib/mongodb.js

// // import { MongoClient } from 'mongodb'

// // const uri = process.env.MONGODB_URI

// // let client
// // let clientPromise

// // if (!process.env.MONGODB_URI) {
// //   throw new Error('Add Mongo URI to .env.local')
// // }

// // if (process.env.NODE_ENV === 'development') {
// //   if (!global._mongoClientPromise) {
// //     client = new MongoClient(uri, {
// //       // ✅ no need for useNewUrlParser or useUnifiedTopology
// //       serverApi: {
// //         version: '1',
// //         strict: true,
// //         deprecationErrors: true,
// //       },
// //     })
// //     global._mongoClientPromise = client.connect()
// //   }
// //   clientPromise = global._mongoClientPromise
// // } else {
// //   client = new MongoClient(uri, {
// //     serverApi: {
// //       version: '1',
// //       strict: true,
// //       deprecationErrors: true,
// //     },
// //   })
// //   clientPromise = client.connect()
// // }

// // export default clientPromise


// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Use a global variable so hot reloads don’t create multiple connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, {
      serverApi: {
        version: "1",
        strict: true,
        deprecationErrors: true,
      },
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, {
    serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
    },
  });
  clientPromise = client.connect();
}

export default clientPromise;
