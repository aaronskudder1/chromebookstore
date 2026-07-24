//import express from 'express';
const express = require("express");
const bodyParser = require("body-parser"); 
const app = express();
import db from './connection.js';

app.use(bodyParser.json());

// Find all
app.get('/api/products', async (req,res) => {
  console.log(await db.collection('products').find({}).limit(10).toArray());
  res.send('Mongo db files found');
});


let cart = [];

// use this to add a 1 second delay to all requests
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });

/* app.get("/api/products", (req, res) => {
  let products = [
        {
        id: 1,
        description:
          'Lenovo 100e 2nd Generation- 11.6in. Display, Intel Celeron N4020, 4GB RAM, 32GB eMMC Storage, Chrome OS, black',
        name: 'Lenovo 100e',
        imageName: 'Lenovo300e.png',
        category: 'Lenovo',
        price: 100,
        discount: 0,
          stock: 2,
      },
   {
        id: 2,
        description:
          'HP Chromebook 11 G8 EE - 11.6in. HD Display, Intel Celeron N4020, 4GB RAM, 32GB eMMC Storage, Chrome OS, Grey',
        name: 'HP Chromebook 11 G8 EE',
        imageName: 'HPG8-11in.png',
        category: 'HP',
        price: 120,
        discount: 0.2,
          stock: 0,
      },
        {
        id: 3,
        description:
          'HP Chromebook 11 G7 4gb RAM - 11.6in. HD Display, Intel Celeron N4000, 4GB RAM, 32GB eMMC Storage, Chrome OS, Grey',
        name: 'HP Chromebook 11 G7',
        imageName: 'HpG7.png',
        category: 'HP',
        price: 100.0,
        discount: 0.2,
          stock: 4,
      },
      {
        id: 3,
        description:
          'HP Chromebook 11 G6 4gb RAM - 11.6in. HD Display, Intel Celeron N3350, 4GB RAM, 32GB eMMC Storage, Chrome OS, Grey',
        name: 'HP Chromebook 11 G6',
        imageName: 'hpChromebookG6.png',
        category: 'HP',
        price: 90.0,
        discount: 0.2,
          stock: 6,
      },
           {
        id: 4,
        description:
          'HP Chromebook 11 G5 4gb RAM - 11.6in. HD Display, Intel Celeron N3350, 16GB eMMC Storage, Chrome OS, Silver and Black',
        name: 'HP Chromebook 11 G5',
        imageName: 'HpG5.png',
        category: 'HP',
        price: 80.0,
        discount: 0.2,
          stock: 13,
      },
      {
        id: 5,
        description:
          'HP Chromebook G4 2gb RAM - 11.6in. HD Display, Intel Celeron N3060, 2GB RAM, 16GB eMMC Storage, Chrome OS, Silver and Black',
        name: 'HP Chromebook G4',
        imageName: 'HPcbg4.png',
        category: 'HP',
        price: 60,
        discount: 0,
          stock: 10,
      },
      {
        id: 6,
        description:
          'Samsung Chromebook 4 - 11.6in. HD Display, Intel Celeron N4000, 4GB RAM, 32GB eMMC Storage, Chrome OS, Silver and Black',
        name: 'Samsung Chromebook 4',
        imageName: 'SamsungChromebook4.png',
        category: 'Samsung',
        price: 100,
        discount: 0.1,
        stock: 1,
      },
      {
        id: 7,
        description: 'Acer C733 - 11.6in. HD Display, Intel Celeron N3060, 4GB RAM, 32GB eMMC Storage, Chrome OS, Grey',
        name: 'Acer C733',
        imageName: 'AcerC733.png',
        category: 'Acer',
        price: 100,
        discount: 0,
        stock: 1,
      },
      {
        id: 8,
        description: 'Acer C731 - 11.6in. HD Display, Intel Celeron N3160, 4GB RAM, 16GB eMMC Storage, Chrome OS, Grey',
        name: 'Acer C731',
        imageName: 'AcerC731.png',
        category: 'Acer',
        price: 80.0,
        discount: 0,
        stock: 1,
      },
      {
        id: 9,
        description:
          'Acer C730 - 11.6in. HD Display, Intel Celeron N2840, 2GB RAM, 16GB eMMC Storage, Chrome OS, Grey',
        name: 'Acer C730',
        imageName: 'AcerC730.png',
        category: 'Acer',
        price: 60.0,
        discount: 0,
        stock: 1,
      },
  ];
  res.send(products);
});
*/

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

app.post("/api/register", (req, res) =>
  setTimeout(() => {
    const user = req.body;
    if (user.firstName && user.lastName && user.email && user.password) {
      users[user.email] = user;
      res.status(201).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(500).send("Invalid user info");
    }
  }, 800)
);

/* IMPORTANT:
    The code below is for demo purposes only and does not represent good security
    practices. In a production application user credentials would be cryptographically 
    stored in a database server and the password should NEVER be stored as plain text. 
*/
const users = {
  "aaron@skudder.nz": {
    firstName: "Aaron",
    lastName: "Skudder",
    email: "aaron@skudder.nz",
    password: "a",
  },
  "joe@joesrobotshop.com": {
    firstName: "user",
    lastName: "person",
    email: "user@person.com",
    password: "super-secret",
  },
};

app.post("/api/sign-in", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send("Invalid user credentials.");
  }
});

app.listen(8081, () => console.log("API Server listening on port 8081!"));