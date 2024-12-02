# How To Set and Run Next.js App

## Step 8: Prisma and Next.js

### Step 8.1: `getStaticProps` (Static Generation)

- `getStaticProps` (**Static Generation**): Fetch data at build time. We will use the **Prisma client** to perform queries to our DB.
- Example:

  - Example 1:

    ```js
    import { PrismaClient } from "@prisma/client";

    const prisma = new PrismaClient();

    export async function getStaticProps() {
      // Get all foods in the "food" db
      const allfoods = await prisma.food.findMany();

      return {
        props: allFoods,
      };
    }
    ```

  - Next.js will perform the query during build time to fetch the data, then we return the results in the `props` object, this will make Next.js pass the results to the `props` of the corresponding component.

### Step 8.2: `getServerSideProps` (Server-side Rendering)

- `getServerSideProps` (**Server-side Rendering**) Runs when the page is being **pre-rendered** on each request. We can also call the **Prisma client** methods here to fetch data that we want to pass to the Next.js components.
- Examples:

  - Example 1:

    ```js
    import { PrismaClient } from "@prisma/client";

    const prisma = new PrismaClient();

    export async function getServerSideProps() {
      // Get all foods in the "food" db
      const allfoods = await prisma.food.findMany();

      return {
        props: allFoods,
      };
    }
    ```

### Step 8.3: API Routes

- **API routes** in Next.js are kept in the `app/api` folder. Each file and folder maps to an API endpoint. They are served under the same URL path as the frontend code, localhost:3000. So as localhost:3000/foods renders the food page, so also localhost:3000/api/getAllFoods is an API endpoint that returns lists of food recipes from the Next.js app.
- We can make calls to our database via **Prisma** from here. For e.g localhost:3000/api/getAllFoods endpoint can query the database to retrieve all the food recipes and send it as a response:

  ```js
  // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
  import { PrismaClient } from "@prisma/client";

  const prisma = new PrismaClient();

  export default async (req, res) => {
    const data = req.body;
    try {
      const result = await prisma.foods.findMany();
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured." });
    }
  };
  ```

### Step 8.4: Prisma Setup

#### 8.4.1: Install `prisma` Dependencies

- Start by installing the Prisma CLI via npm:
  ```sh
    npm install prisma --save-dev
  ```

#### 8.4.2: Prisma Initialization

- Run the below command:
  ```sh
    npx prisma init
  ```
- This command will create a `prisma/` folder inside your root project and a `.env` file. The `prisma/` folder will contain a `schema.prisma` file, this is where we declare our Prisma database models.

#### 8.4.3: Setup Prisma Connection to the Database

- Open the `.env`, we will see it has a `DATABASE_URL`:
  ```env
    #.env
    DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
  ```
- This is the URL connection to a Postgres database server.
  1. johndoe is the name of the database user.
  2. randompassword is the password for the database user.
  3. localhost is the host of the database.
  4. 5432 is the port number, it is always 5432 by default.
  5. mydb is the name of the database you want to connect to. Create this in your Postgres server.
- Remark:
  - Now change them to your own Postgres details.
    ```.env
      DATABASE_URL="postgresql://postgres:0000@localhost:5432/food"
    ```

#### 8.4.4: Define Model

- Add model definition to the `schema.prisma` file.
- Examples

  - Add the following **model definitions** to your `schema.prisma` so that it looks like this:

    ```prisma
      // schema.prisma
      generator client {
        provider = "prisma-client-js"
      }

      datasource db {
        provider = "postgresql"
        url = env("POSTGRES_PRISMA_URL") // uses connection pooling
        directUrl = env("POSTGRES_URL_NON_POOLING") // uses a direct connection
      }

      model Post {
        id        String     @default(cuid()) @id
        title     String
        content   String?
        published Boolean @default(false)
        author    User?   @relation(fields: [authorId], references: [id])
        authorId  String?
      }

      model User {
        id            String       @default(cuid()) @id
        name          String?
        email         String?   @unique
        createdAt     DateTime  @default(now()) @map(name: "created_at")
        updatedAt     DateTime  @updatedAt @map(name: "updated_at")
        posts         Post[]
        @@map(name: "users")
      }
    ```

  - This **Prisma schema** defines two models, each of which will map to a table in the underlying database: `User` and `Post`. Notice that there's also a relation (one-to-many) between the two models, via the `author` field on `Post` and the `posts` field on `User`.

#### 8.4.5: Run Migrations

- Running migrations, will create an SQL migration file for the current schema, and run the migrations against the database. Migrations run whenever we update the schema. Migrations are just SQL commands that are generated based on what was performed on the schema. If we create a new Model in the schema, the migrations will create an SQL command to create a table, eg:

  ```sql
    -- CreateTable
    CREATE TABLE "newTable" (
        "id" SERIAL NOT NULL,
        "name" TEXT,

        PRIMARY KEY ("id")
    );
  ```

- This SQL command will then be executed to create the table in the database. That's the summary of running migrations. So whenever you hear of migrations, bear in mind that this is what is being done.
- Now, we run the below command to run migrations on our Postgres database:
  ```sh
    npx prisma migrate dev --name init
  ```
- This command will generate the migrations file and run them against your db. The `--name` sub-arg sets the name of the **migration**. The value which is `init` will be the name of the migrations folder generated. The output is: `{NUMBER_GENERATED_BY_PRISMA}_init`. So this will generate a folder/file inside the `prisma/migrations` folder. A new folder with a `migration.sql` SQL file will be generated for each migration run. In my machine the command generated this:

## Step 8: Setup Prisma and create the database schema

-

- At this stage, the **Prisma studio** is the fastest way to create data; to launch the studio and add data, run the following command:
  ```sh
    npx prisma studio
  ```
  - The studio will launch at http://localhost:5555/
- To actually create the tables in your database, you now can use the following command of the Prisma CLI:
  ```sh
    npx prisma db push
  ```
- You should see the following output:

  ```sh
    Environment variables loaded from /Users/nikolasburk/Desktop/nextjs-guide/blogr-starter/.env.development.local
    Prisma schema loaded from prisma/schema.prisma

    Your database is now in sync with your schema. Done in 2.10s
  ```

### Step 8.2: Fetching and reading data from database

- We must establish a [Prisma client](https://www.prisma.io/docs/orm/prisma-client?utm_source=hackmamba&utm_medium=blog&utm_id=HMBcommunity) instance to enable smooth interaction with our database. In the root of our application, create a `lib` folder and a `prisma.js` or `prisma.ts` file with the following snippets:
  ```js
  //lib/prisma.js
  import { PrismaClient } from "@prisma/client";
  let prisma;
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
  export default prisma;
  ```

### Step 8.1: Install and generate Prisma Client

- Before you can access your database from Next.js using **Prisma**, you first need to install **Prisma Client** in your app. You can install it via `npm` as follows:
  ```sh
    npm install @prisma/client
  ```
- Because **Prisma Client** is tailored to your own schema, you need to update it every time your **Prisma schema** file is changing by running the following command:
  ```sh
    npx prisma generate
  ```
- You'll use a single `PrismaClient` instance that you can import into any file where it's needed. The instance will be created in a `prisma.ts` file inside the `lib/` directory. Go ahead and create the missing directory and file:
  ```sh
    mkdir lib && touch lib/prisma.ts
  ```
- Now, add the following code to this file:

  ```ts
  //lib/prisma.ts

  import { PrismaClient } from "@prisma/client";

  let prisma: PrismaClient;

  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }

  export default prisma;
  ```

- Now, whenever you need access to your database you can import the `prisma` instance into the file where it's needed.

## Step 9: Adding authentication with `Auth.js`

- `Auth.js` is an open source project created by Vercel. With Auth.js we can integrate many different providers into our applications, giving us the power to use them to log in and out.

## Step 10: Configure `Next.js` to work with Docker

- According to [Next.js documentation](), `Next.js` can automatically create a standalone folder that copies only the necessary files for a production deployment including select files in `node_modules`.
- To reduce image size we need to add `output: "standalone"` in the `next.config.js` file.
  ```javascript
  //next.config.js
  const config = {
    reactStrictMode: true,
    output: "standalone",
    // ...
  };
  ```
- Add `.dockerignore` file at the root of the project directory to exclude unnecessary files from the **Docker image**.
  ```dockerignore
    .env
    Dockerfile
    .dockerignore
    .next
    .git
    .gitignore
    node_modules
    npm-debug.log
    README.md
  ```
- Create a `Dockerfile` for `Next.js` application:

  ```Dockerfile
    FROM node:18-alpine

    COPY ../package.json ../package-lock.json ./app

    WORKDIR /app

    RUN npm ci

    CMD ["npm", "run", "dev"]
  ```

  - Here,
    - We are uing the `node:18-alpine` image as a base image. It is a lightweight image that contains `Node.js 18` and `npm`.
    - Using 'clean install' (`npm ci`) instead of 'install' (`npm i`) is a good practice for **Docker images**. It will ensure that the dependencies are installed from the `package-lock.json` file and not from the `node_modules` cache. This is faster than 'install', which is especially important for CI/CD pipelines where you want to keep the build time as short as possible.

- Create a `docker-compose.yml` file.
  - `docker-component.yml` file is used to define and run multi-container Docker applications with a single command `docker-compose up`.
    ```yml
    #docker-compose.yml
    version: "3"
    services:
      my-app:
        container_name: next.js-app
        build:
          context: .
          dockerfile: Dockerfile
        ports:
          - 3001: 3001
        environment:
        depends_on:
          - db
        volumes:
          - ./my-app/src/:app/src
          - ./my-app/public:/app/public
      db:
        image: postgres:15.3
        container_name: postgres
        ports:
          - 5432:5432
        environment:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: myapp-db
        volumes:
          - postgres-data:/var/lib/postgresql/data
    volumes:
      postgres-data:
    ```
- Run the application by `docker-compose up`

# Sending Emails with `nodemailer` in Next.js

- How to seamlessly incorporate email sending capabilities into Next.js applications

## Step 1: Gmail Account Configurations

- In order to utilize this service, you will have to enable **2-Step Verification** in your **Google** account.
- After enabling 2-Step Verification Go to the Link: https://myaccount.google.com/apppasswords in your browser and generate a password for your new app

## Step 2: Install Dependencies

- Install required dependencies by:
  ```sh
    npm i nodemailer dotenv
  ```

## Step 3: Build `nodemailer` Service

- Now, let’s build a service that will use the `nodemailer` library to construct **email objects** and **send emails**.
- Create a new file, `service/mail-service.js` with the following code:

  ```js
  var nodemailer = require("nodemailer");
  //-----------------------------------------------------------------------------
  export async function sendMail(subject, toEmail, otpText) {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    var mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: toEmail,
      subject: subject,
      text: otpText,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        throw new Error(error);
      } else {
        console.log("Email Sent");
        return true;
      }
    });
  }
  ```

- Next, create a new api called `api_four.js` inside the “/api” folder.

  ```js
  import { sendMail } from "../../service/mailService";
  const handler = async (req, res) => {
    try {
      const { method } = req;
      switch (method) {
        case "POST": {
          //Do some thing
          await sendMail(
            "TEST",
            "info@bunnyfiedlabs.com",
            "THI IS A TEST FOR MY MEDIUM USERS"
          );
          res.status(200).send("Success");
          break;
        }
        case "GET": {
          //Do some thing
          res.status(200).send(req.auth_data);
          break;
        }
        default:
          res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
          res.status(405).end(`Method ${method} Not Allowed`);
          break;
      }
    } catch (err) {
      res.status(400).json({
        error_code: "api_one",
        message: err.message,
      });
    }
  };

  export default handler;
  ```

- In this API, we import the `sendMail` function, enabling us to send an email whenever the API receives a POST request.
- Now run your app and make a `POST` request to http://localhost:3000/api/api_four
- You may verify that the test email we attempted to send through our API call has been delivered to your inbox.

# Sending Emails with `nodemailer` in Next.js in Production Environment

- To enable the functionality of the **Node Mailer** in a production environment, you’ll need to implement the code in a slightly different manner.
- In `“service/mailService.js”` just replace:
  ```js
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
  ```
- With:
  ```js
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, response) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
  ```

# Integrate Next.js App with Prisma, and Vercel Postgres

## Requirements

1. [Next.js](https://nextjs.org/) as the React framework
2. [Next.js API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) for server-side API routes as the backend
3. [Prisma](https://www.prisma.io/) as the ORM for migrations and database access
4. [Vercel Postgres](https://vercel.com/storage/postgres) as the database
5. [NextAuth.js](https://next-auth.js.org/) for authentication via GitHub (OAuth)
6. [TypeScript](https://www.typescriptlang.org/) or [JavaScript]() as the programming language
7. [Vercel]() for deployment

## Prerequisites

1. Node.js
2. A Vercel Account (to set up a free Postgres database and deploy the app)
3. A GitHub Account (to create an OAuth app)

## Step 1: Set up your Next.js starter project

- Follow the previous sectionson how to setup Next.js Application. Then, navigate into the directory and launch the app:
  ```sh
    cd <directory-name> && npm run dev
  ```

## Remark: Vercel CLI

- **Vercel** gives you multiple ways to interact with and configure your Vercel Projects. With the command-line interface (CLI) you can interact with the Vercel platform using a terminal, or through an automated system, enabling you to retrieve logs, manage certificates, replicate your deployment environment locally, manage Domain Name System (DNS) records, and more.
- Installing Vercel CLI
  - To download and install Vercel CLI, run the following command:
    ```sh
      npm i -g vercel
    ```
- Updating Vercel CLI
  - When there is a new release of Vercel CLI, running any command will show you a message letting you know that an update is available.
  - If you have installed our command-line interface through npm or Yarn, the easiest way to update it is by running the installation command yet again.
    ```sh
      npm i -g vercel@latest
    ```
- Checking the version
  - The `--version` option can be used to verify the version of Vercel CLI currently being used.
    ```sh
      vercel --version
    ```

## Step 2: Set up your Vercel Postgres database

- We'll use a free Postgres database hosted on Vercel
- First, push the repo from Step 1 to our own GitHub and deploy it to Vercel to create a Vercel project.
- Once you have a Vercel project, select the **Storage** tab, then select the **Connect Database** button. Under the **Create New** tab, select **Postgres** and then the **Continue** button.
- To create a new database, do the following in the dialog that opens:
  1. Enter `sample_postgres_db` (or any other name you wish) under Store Name. The name can only contain alphanumeric letters, "`_`" and "-" and can't exceed 32 characters.
  2. Select a **region**. We recommend choosing a region geographically close to your function region (defaults to US East) for reduced latency.
  3. Click **Create**.
- Our empty database is created in the region specified. Because you created the Postgres database in a project, we automatically created and added the following environment variables to the project for you.
- After running `npm i -g vercel@latest` to install the Vercel CLI, pull down the latest environment variables to get your local project working with the Postgres database.
  ```sh
    vercel env pull .env
  ```

## Step 3: Setup Prisma and create the database schema

- Start by installing the Prisma CLI via npm:
  ```sh
    npm install prisma --save-dev
  ```

## Step 4: Create Database Tables Using Prisma CLI

- You'll now create the tables in your database using the Prisma CLI.
- To do this, we'll initialize our **Prisma** by:
  ```sh
    npx prisma init
  ```
- This wil generate a `prisma/` folder with a `schema.prisma` file, the main Prisma configuration file that will contain your database schema.
- Add the following **model** definitions to your `schema.prisma` so that it looks like this:

  ```prisma
    // schema.prisma

    generator client {
    provider = "prisma-client-js"
  }

  ```

## Step 5: Install and Generate Prisma Client

- Before you can access your database from Next.js using Prisma, you first need to install **Prisma Client** in your app by:
  ```sh
    npm install @prisma/client
  ```
- Remark:
  - Because **Prisma Client** is tailored to your own schema, you need to update it every time your Prisma schema file is changing by running the following command:
    ```sh
      npx prisma generate
    ```
- We'll use a single `PrismaClient` instance that you can import into any file where it's needed. The instance will be created in a `prisma.ts` or `prisma.js` file inside the `lib/` directory. Go ahead and create the missing directory and file:
  ```sh
    mkdir lib && touch lib/prisma.ts
  ```
- Now, add the following code to this file:

  ```ts
  import { PrismaClient } from "@prisma/client";

  let prisma: PrismaClient;

  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }

  export default prisma;
  ```

- Now, whenever you need access to your database you can import the `prisma` instance into the file where it's needed.

## Step 6. Update the existing views to load data from the database

# Resources and Further Reading

1. [the Next.js GitHub repository](https://github.com/vercel/next.js/)
2. [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
3. [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
4. [Next.js deployment documentation](https://nextjs.org/docs/deployment)
5. [Add the `SpeedInsights` component to your app](https://vercel.com/docs/speed-insights/quickstart#add-the-speedinsights-component-to-your-app)
6. [dev.to - How to build and deploy a modern-day Next.js application](https://dev.to/livecycle/how-to-build-and-deploy-a-modern-day-nextjs-application-mgn)
7. [Medium - Sending Emails with Nodemailer in Next.js 2023: A Complete Guide to Integrating Gmail Mailer for Enhanced Communication](https://blog.devgenius.io/sending-emails-with-nodemailer-in-next-js-ccada06abfc9)
