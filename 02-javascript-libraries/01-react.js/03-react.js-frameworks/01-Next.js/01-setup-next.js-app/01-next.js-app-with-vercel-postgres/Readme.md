# Next.js, Vercel Postgres & Prisma

## Table Of Contents

# Objectives

- Learn how to:
  1. Build a React app + API using Next.js
  2. Authenticate your app using NextAuth.js
  3. Model data using Prisma
  4. Persist data into PostgreSQL and store media files with Vercel Postgres
  5. Deploy to Vercel

# What is Vercel?

# Prerequisites

## Step 1. Create Vercel Account

- Visit [vercel.com/signup](https://vercel.com/signup) to create an account. Choose the free "hobby" plan. Select Continue with GitHub to connect your GitHub and Vercel accounts.

## Step 2. Create Vercel Postgres Database

- To set up a database, click **Continue** to **Dashboard** and select the **Storage** tab from your project dashboard. Select **Connect Store** → **Create New** → **Postgres** → **Continue**
- Accept the terms, assign a name to your database, and ensure your database region is set to **Washington D.C (iad1)** - this is also the default region for all new Vercel projects. By placing your database in the same region or close to your application code, you can reduce latency for data requests.
- Once connected, navigate to the `.env.local` tab, click **Show secret** and **Copy Snippet**. Make sure you reveal the secrets before copying them.
- Navigate to your code editor and Create a `.env` file under the root of your project and paste the copied content into it.
- **Remarks**:
  - Vercel's storage service makes it really easy to spin up a relational database. It's a standard Postgres DB, so you can continue using the tools you already know.
  - **Important**: Go to your `.gitignore` file and make sure `.env` is in the ignored files to prevent your database secrets from being exposed when you push to GitHub.
- Finally, run `npm i @vercel/postgres` in your terminal to install the [Vercel Postgres SDK](https://vercel.com/docs/storage/vercel-postgres/sdk)

## Seed Your Database

- Now that your database has been created, let's seed it with some initial data. This will allow you to have some data to work with as you build the app.
- In the `/scripts` folder of your project, there's a file called `seed.js`. This script contains the instructions for creating and seeding the invoices, customers, user, revenue tables.
- The script uses SQL to create the tables, and the data from `placeholder-data.js` file to populate them after they've been created.
- Next, in your `package.json` file, add the following line to your scripts:
  ```json
    "scripts": {
        "build": "next build",
        "dev": "next dev",
        "start": "next start",
        "seed": "node -r dotenv/config ./scripts/seed.js"
        },
  ```
  - This is the command that will execute seed.js.
- Now, run `npm run seed`. You should see some console.log messages in your terminal to let you know the script is running.
- Let's see what your database looks like. Go back to Vercel, and click **Data** on the sidenav

## Step . Adding authentication

# Resources and Further Reading
