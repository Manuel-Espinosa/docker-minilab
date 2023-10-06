// app.js

import express from "express";
import { sequelize, User } from "./frameworks/db/sequelize.js";

const app = express();
const port = process.env.NODE_PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/hello", async (req, res) => {
  console.log("Hello route accessed");
  try {
    // Synchronize the model with the database
    await sequelize.sync();

    // Find the first user in the 'users' table
    const user = await User.findOne();

    // Log the user object
    console.log("User:", user);

    if (user) {
      res.send(`Hello from MYSQL container ${user.name}`);
    } else {
      res.send("No users found :(");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/:user", async (req, res) => {
  const user_id = req.params.user;
  console.log("Hello user route accessed");
  try {
    await sequelize.sync();

    // Find a user by ID in the 'users' table
    const user = await User.findOne({
      where: {
        id: user_id,
      },
    });

    if (user) {
      res.send(`Hello from MYSQL container ${user.name}`);
    } else {
      res.send("No users found :(");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
