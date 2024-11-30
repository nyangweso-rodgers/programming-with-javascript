# Next.js, Supabase & Prisma

## Table Of Contents

# Objectives

- Learn how to:
  1. Build a React app + API using Next.js
  2. Authenticate your app using NextAuth.js
  3. Model data using Prisma
  4. Persist data into PostgreSQL and store media files with Supabase
  5. Deploy to Vercel

# What is Supabase?

- **Supabase**, an open-source alternative to **Firebase**, offers a comprehensive suite of tools to streamline your development process.

# Setting Up Your Local Environment With Supabase

## Prerequisites

- Before proceeding with setting up the local development environment for Supabase, ensure that the following prerequisites are met:
  1. Node.js and npm
  2. Docker

## Setting Up the Local Development Environment For Supabase

### 1. Install the Supabase CLI

- Install the Supabase CLI using npm
  ```sh
    npm install supabase --save-dev
  ```

### 2. Initialize Your Project

- Create a new directory for your project and navigate into it:
  ```sh
    mkdir <project-name>
    cd <project-name>
  ```
- Initialize your project with the Supabase CLI. This will create the necessary files and folders for your Supabase project, such as `config.toml` where you can customize your local development environment settings.
  ```sh
    npx supabase init
  ```

### 3. Start the Supabase Stack

- With your project initialized, you can now start the Supabase stack locally:
  ```sh
    npx supabase start
  ```
- This command will pull all necessary docker images and start the docker containers for the Supabase stack. You can access your local Supabase services locally, including the database, API server, and Supabase Studio.

### 4. Access Your Local Development Environment

- Once the Supabase stack is running, you can access various components via their respective URLs:
  - API URL: http://localhost:54321
  - Database URL: postgresql://postgres:postgres@localhost:54322/postgres
  - Supabase Studio: http://localhost:54323
  - Inbucket: http://localhost:54324

# Resources and Further Reading
