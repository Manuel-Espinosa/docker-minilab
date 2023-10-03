import express from "express";
import dotenv from "dotenv";
import { Sequelize, DataTypes } from "sequelize";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.NODE_PORT || 3000;

// Define your Sequelize instance and connect to the database
const sequelize = new Sequelize(
  "test",
  process.env.DB_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_CONTAINER_NAME,
    dialect: "mysql", // Use the appropriate dialect for your database
  }
);

// Define the User model
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
    },
  },
  {
    tableName: "users", // Specify the table name
  }
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Add a new route /hello
app.get("/hello", async (req, res) => {
  console.log("Hello route accessed");
  try {
    // Log database connection details
    console.log(`DB_USER: ${process.env.DB_USER}`);
    console.log(`MYSQL_PASSWORD: ${process.env.MYSQL_PASSWORD}`);
    console.log(`MYSQL_CONTAINER_NAME: ${process.env.MYSQL_CONTAINER_NAME}`);

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
