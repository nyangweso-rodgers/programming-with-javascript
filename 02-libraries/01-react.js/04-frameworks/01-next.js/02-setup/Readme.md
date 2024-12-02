# How To Set and Run Next.js App

## Step 8: Prisma and Next.js

### Step 8.4: Prisma Setup

## Step 9: Adding authentication with `Auth.js`

- `Auth.js` is an open source project created by Vercel. With Auth.js we can integrate many different providers into our applications, giving us the power to use them to log in and out.

## Step 10: Configure `Next.js` to work with Docker

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

1. 
2. 
3. 
4. 
5. 
6. 
7. 
