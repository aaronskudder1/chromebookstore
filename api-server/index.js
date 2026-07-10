const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
/* 
  IMPORTANT:
    ***NEVER*** store credentials unencrypted like this.
    This is for demo purposes only in order to simulate a functioning API serverr.
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
let cart = [];

// use this to add a 1 second delay to all requests
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });

app.get("/api/products", (req, res) => {
  let products = [
   {
        id: 1,
        description:
          'HP Chromebook 11 G8 EE - 11.6in. HD Display, Intel Celeron N3060, 4GB RAM, 32GB eMMC Storage, Chrome OS, Grey',
        name: 'HP Chromebook 11 G8 EE',
        imageName: 'HPG8-11in.png',
        category: 'HP',
        price: 120,
        discount: 0.2,
      },
      {
        id: 6,
        description:
          'Lenovo 300e - 11.6in. Display, Intel Celeron N4000, 4GB RAM, 64GB eMMC Storage, Chrome OS, Grey',
        name: 'Lenovo 300e',
        imageName: 'Lenovo300e.png',
        category: 'Lenovo',
        price: 200,
        discount: 0,
      },
      {
        id: 2,
        description:
          'HP Chromebook 11 G6 4gb RAM - 11.6in. HD Display, Intel Celeron N3350, 4GB RAM, 32GB eMMC Storage, Chrome OS, Grey',
        name: 'HP Chromebook 11 G6',
        imageName: 'hpChromebookG6.png',
        category: 'HP',
        price: 90.0,
        discount: 0.2,
      },
      {
        id: 3,
        description:
          'HP Chromebook G4 2gb RAM - 11.6in. HD Display, Intel Celeron N3060, 2GB RAM, 16GB eMMC Storage, Chrome OS, Grey',
        name: 'HP Chromebook G4',
        imageName: 'HPcbg4.png',
        category: 'HP',
        price: 60,
        discount: 0,
      },
      {
        id: 16,
        description:
          'Samsung Chromebook 4 - 11.6in. HD Display, Intel Celeron N4000, 4GB RAM, 32GB eMMC Storage, Chrome OS, Grey',
        name: 'Samsung Chromebook 4',
        imageName: 'SamsungChromebook4.png',
        category: 'Samsung',
        price: 100,
        discount: 0.1,
      },
      {
        id: 17,
        description: 'Acer C733 - 11.6in. HD Display, Intel Celeron N3060, 4GB RAM, 32GB eMMC Storage, Chrome OS, Grey',
        name: 'Acer C733',
        imageName: 'AcerC733.png',
        category: 'Acer',
        price: 100,
        discount: 0,
      },
      {
        id: 4,
        description: 'Acer C731 - 11.6in. HD Display, Intel Celeron N3160, 4GB RAM, 16GB eMMC Storage, Chrome OS, Grey',
        name: 'Acer C731',
        imageName: 'AcerC731.png',
        category: 'Acer',
        price: 80.0,
        discount: 0,
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
      },
  ];
  res.send(products);
});

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