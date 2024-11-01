# Prisma

## Table Of Contents

# What is ORM?

- **ORM** (**Object-Relational Mapping**), it is a technique in which we can query data, connect and manipulate databases using the object-oriented paradigm. **ORMs** can be written in any language, in whatever language it is written in, it encapsulates the code required to manipulate the database. This eliminates the use of SQL because that is being taken care of by the ORM library. The ORM represents each table in the data schema as a single class. For example, a Food table will turn to a class in an ORM library and we can read all food items, delete foods, etc using this class.
- To query for all foods in the database manually, we will write the code:

  ```js
  var mysql = require("mysql");
  var connection = mysql.createConnection({
    host: "localhost",
    user: "me",
    password: "secret",
    database: "my_db",
  });

  connection.connect();

  connection.query("SELECT * FROM food", function (error, results, fields) {
    if (error) throw error;
    console.log("Results: ", results);
  });

  connection.end();
  ```

- So much code. But with an ORM library, it will be this:
  ```js
  const allFoods = Food.getAll("foods");
  ```
- Simple and neat. With Prisma, it is simpler:
  ```js
  async function main() {
    const allFoods = await prisma.food.findMany();
    console.log(allFoods);
  }
  ```

# Prisma Client Methods

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

# Why Use Prisma?

# Features of Prisma

# Prisma Concepts

## Prisma Concept1: Prisma Schema

- The **Prisma schema** allows us to define application **models** in an intuitive data modeling language. It also contains the connection to a database and defines a generator:
- For **Relational Database**:

  ```prisma
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }

    generator client {
      provider = "prisma-client-js"
    }

    model User {
      id    Int     @id @default(autoincrement())
      email String  @unique
      name  String?
      posts Post[]
    }
  ```

- For **MongoDB**:

  ```prisma
    datasource db {
      provider = "mongodb"
      url      = env("DATABASE_URL")
    }

    generator client {
      provider = "prisma-client-js"
    }

    model User {
      id    String  @id @default(auto()) @map("_id") @db.ObjectId
      email String  @unique
      name  String?
    }
  ```

- Here, we have configured 3 things:
  - **Data source**: Specifies your database connection (via an environment variable)
  - **Generator**: Indicates that you want to generate Prisma Client
  - **Data model**: Defines your application models

# # How to Configure Prisma ORM

## Step 1: Installing Prisma and Prisma Client

- To start using **Prisma**, you will need the `prisma` and `@prisma/client` packages. `prisma` is the **Prisma CLI** tool while `@prisma/client` is an auto-generated query builder that will help you query your database.
- Install these two packages via `npm`

  ```sh
    npm i prisma @prisma/client
  ```

- Installing the `@prisma/client` package invokes the `prisma generate` command, which reads your **Prisma schema** and generates **Prisma Client** code. The code is generated into the `node_modules/.prisma/client` folder by default.
- The **Client** is essentially all of the code for interacting to our database.

- To use the **Prisma Client**, We have to add the following code:
  ```js
  import { PrismaClient } from "@prisma/client";
  const prisma = new PrismaClient();
  ```

## Step 2: Initialize Prisma

- Now, We'll Initialize our **Prisma** by:
  ```sh
      npx prisma init
  ```
- Remark:
  - We can also specify the database during **Prisma** initialization. For this Project, We are using **PostgreSQL** so the Command will be:
    ```sh
        npx prisma init --datasource-provider postgresql
    ```
- These steps will generate essential configuration and setup files for our project.
- **Remarks**:
  - After you change your **data model**, you'll need to manually re-generate **Prisma Client** to ensure the code inside `node_modules/.prisma/client` gets updated:
    ```sh
      npx prisma generate
    ```

## Step 3: Prisma Model Setup

- Here, we'll define the **Customer Model** for our application in the `schema.prisma` file.
- If you decide to work with the code-first approach, you can use [Prisma Migrate](https://www.prisma.io/docs/orm/prisma-migrate) to create the tables in your database. Start by writing your **schema definition** using Prisma's markup language.

  ```prisma
    model Customer {
        id String @id @default(uuid())
        first_name String
        last_name String
        status     Status  @default(TRUE)
        created_at DateTime @default(now())
        updated_at DateTime @updatedAt
        created_by String @default("rodgerso65@gmail.com")
        updated_by String @default("rodgerso65@gmail.com")
        created_by_name String @default("Rodgers Nyangweso")
        updated_by_name String @default("Rodgers Nyangweso")


        @@map("customer") // This will ensure the table name is lowercase "customer"
        }
        enum Status {
        TRUE
        FALSE
        }
  ```

- With your **schema** set up, you can prepare your database by selecting one of the providers supported by **Prisma**. In the example below, I'm using **PostgreSQL**, but there are several available options like MySQL, SQLite, MongoDB, CockroachDB, and Microsoft SQL Server:
  ```prisma
    datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
    }
    generator client {
        provider = "prisma-client-js"
        }
  ```
- It's just that simple. If you switch from PostgreSQL to MySQL (or any other provider), change your provider and rebuild your migration. If you need to create seed data, you can configure your application to know where your seed data is and use the Prisma client to insert any data you need.

## Stp 4: Run Migration

- Running **migrations**, will create an SQL migration file for the current schema, and run the migrations against the database. Migrations run whenever we update the schema. Migrations are just SQL commands that are generated based on what was performed on the schema. If we create a new Model in the schema, the migrations will create an SQL command to create a table, eg:

  ```sql
    -- CreateTable
    CREATE TABLE "newTable" (
        "id" SERIAL NOT NULL,
        "name" TEXT,

        PRIMARY KEY ("id")
    );
  ```

- This SQL command will then be executed to create the table in the database. That's the summary of running migrations.
- Run the below command to run migrations on our Postgres database:
  ```sh
    npx prisma migrate dev --name init
  ```
- This command will generate the migrations file and run them against your db. The `--name` sub-arg sets the name of the migration. The value which is `init` will be the name of the migrations folder generated.
- A new folder with a migration.sql SQL file will be generated for each migration run.

### 2.1 Prisma Migrate With Docker

- If you want to keep the network inside **Docker**, you can run the Prisma CLI directly from inside the Docker container where your Next.js app or another container with Prisma is running. You need to ensure that the Prisma CLI is available in that container.
- Here are the steps:
  1. Access Your Next.js Container (or any container where Prisma is installed) If Prisma is available in your Next.js container, use the following command to access the container:
     ```sh
      docker exec -it <nextjs-container-name> sh
     ```
  2. Run the Migration Inside the Container From inside the container, you can run the migration:
     ```sh
      npx prisma migrate dev --name init
     ```
- **Remark**:
  - If you're making changes to your Prisma schema locally and then rebuilding your container, you'll need to run the migration inside the Docker container again. Here’s the typical process:
    1. Make Schema Changes Locally: Modify your `schema.prisma` file to reflect the changes (e.g., adding a field to a model).
    2. Rebuild or Restart Your Docker Container: After modifying your schema, you can rebuild your Docker container if necessary or restart it to ensure any environment updates are applied.
    3. Run Prisma Migrations in the Docker Container: Since Prisma connects to the database running inside the container, you'll need to run `npx prisma migrate dev --name <migration-name>` inside the Docker container to apply the schema changes to the database.
       ```sh
        docker exec -it <container-name> sh
        npx prisma migrate dev --name <migration-name>
       ```
    4. Each time you make a schema change, this process ensures your database is in sync with the new schema.

# Resources and Further Reading

1. [www.prisma.io/](https://www.prisma.io/)
