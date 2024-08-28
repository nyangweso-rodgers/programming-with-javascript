# Setting Up Expres Server with PostgreSQL Docker Container

## Table Of Contents

# Setup

## Step #1: Setup PostgreSQL Server with Docker Container

- Check my, [](), github repo on how to run the postgresql server with Docker.

## Step #2: Setup `Node.js` and `Expres.js` Development Environment

Check my [](), and [](), github repositories on how to setup Node.js and Express JavaScript development environment.

## Step #3: Install Dependencies

- We the additional dependencies for this project:

  - [pg](https://www.npmjs.com/package/pg): PostgreSQL client for Node.js.
  - [sequelize](https://www.npmjs.com/package/sequelize): This is a Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, and Snowflake.

    ```sh
        npm i pg sequelize
    ```

## Step #4: Establish Databae Connection

- Create a `src/util/` folder with a `database.js` file, which we will use to configure the database connection between our Node.js backend and the Postgres container.

  ```js
  //database.js
  import sequelize from "sequelize";

  const sequelizeInstance = new sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    { host: process.env.PGHOST, dialect: "postgres" }
  );
  export default sequelizeInstance;
  ```

## Step #5: Define Model

- Suppose we want to create a `customer` API, we can define a `customer` model. Inside the `src/models/` folder, create a file, which will be read by `Sequelize` to create a table and perform all the necessary SQL queries.
- Create a `models/` folder inside the `src/` folder and add a `customerSchema.js` file to it with sample fields like:

  ```js
  import * as Sequelize from "sequelize";
  import db from "../util/database";

  const CustomerSchema = db.define("customers", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    customer_name: { type: Sequelize.STRING, unique: false, allowNull: false },
  });

  export default CustomerSchema;
  ```

## Step #6: Define Controllers

# Resources
