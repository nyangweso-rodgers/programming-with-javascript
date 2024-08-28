# Prisma

## Table Of Contents

# ORM Libraries for Node.js

- There are many popular **ORM libraries** for **Node.js**: **Prisma**, **Sequelize**, **TypeORM**, and others.

# Prisma

- **Prisma** is an **ORM** for **Node.js** and **Typescript** that serves as an alternative to writing plain SQL or using other database access tools, such as **Knex** or **Sequelize**. It provides a type-safe and intuitive way to interact with databases, offering **features** like:
  1.  schema management,
  2.  query building,
  3.  and data modeling.
- The **Prisma Labs** team founded **Prisma** in 2016, aiming to make working with databases more fun, productive and delightful. As the project evolved and became more popular, **Prisma** became a standalone project that was released as Prisma 2.0 in 2020. Its main features included:
  - **Prisma Client**, an auto-generated and type-safe query builder to access a database in Node.js and Typescript.
  - Prisma Studio: A visual editor for your database workflow management
  - Automated migration
  - Improved performance for database interactions
- **Prisma** supports databases such as PostgreSQL, MySQL, SQLite, SQL server, MongoDB, and cockroach DB

# How to Configure Prisma

## Step 1: Installing the Prisma Client

- To start using **Prisma**, you will need the `prisma` and `@prisma/client` packages. `prisma` is the **Prisma CLI** tool while `@prisma/client` is an auto-generated query builder that will help you query your database.
- Install these two packages via `npm`

  ```sh
    npm i prisma @prisma/client
  ```

- Installing the `@prisma/client` package invokes the `prisma generate` command, which reads your **Prisma schema** and generates **Prisma Client** code. The code is generated into the `node_modules/.prisma/client` folder by default.

## Step 2: Initialize `prisma`

- Next, **initialize** `prisma` by running the below command on the terminal.
  ```sh
    npx prisma init
  ```
- This will generate a new file called `schema.prisma` which contains the database schema and a `.env` file to which you’ll add the **database connection URL**.
- After you change your **data model**, you'll need to manually re-generate **Prisma Client** to ensure the code inside `node_modules/.prisma/client` gets updated:
  ```sh
    npx prisma generate
  ```

## Step 3: Adding the Connection URL

- You need a **connection URL** to connect `prisma` to your **PostgreSQL database**. The general format for a connection URL is:
  ```sh
    postgres://{username}:{password}@{hostname}:{port}/{database-name}
  ```
- Example:
  ```sh
    #.env
    DATABASE_URL="postgresql://admin:pwd@$postgres:$5432:test_db"
  ```
- Then in `schema.prisma`, specify the **database connection URL**:

  ```prisma
    datasource db {
      provider = "PostgreSQL"
      url      = env("DATABASE_URL")
      }
  ```

## Step 4: Defining the Database Schema

- The **database schema** is a structure that defines the data model of your database. It specifies the tables, columns, and relationships between tables in the database, as well as any constraints and indexes the database should use.
- To create a **schema** for a database with a **users table**, open the `schema.prisma` file, and add a **User** model.
  ```prisma
    model User {
      id            String  @default(cuid()) @id
      name          String?
      email         String  @unique
      }
  ```
- The **User model** has an `id` column which is the primary key, a `name` column of type `string`, and an `email` column that should be unique.
- This command creates the actual tables in the database.

# Resources and Further Reading

1. [www.prisma.io/](https://www.prisma.io/)
