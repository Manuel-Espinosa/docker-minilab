import { Sequelize, DataTypes } from "sequelize";

// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

// Initialize Sequelize with your database connection details
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

// Export the sequelize instance and models
export { sequelize, User };
