# API Routes in Next.js

# API Routes

- Next.js allows you to create [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes), which are **server-side** endpoints that can handle `HTTP` requests and perform server-side logic. i.e., **API Routes** let you create an API endpoint inside a Next.js app.
- The convention to define an **API route** is to create a file named `route.js` in the `app/` directory.
- **API routes** now use the standard `Request` object rather than the express-like `req` and `res` objects.
- When we define an **API route**, we can `export` the handler for the methods we want to support. For example, if we want to support the `GET` and `POST` methods, we can export the `GET` and `POST` functions:

## Example: `GET` Method

```javascript
//path: app/api/route.js

export async function GET() {
  return NextResponse.json({ hello: "world" });
}
```

## Example: `POST` Method

```javascript
//path: app/api/route.js
export async function POST(request) {
  const body = await request.json();
  const data = await getData(body);

  return NextResponse.json(data);
}
```

- Remarks:

  - If we want to manipulate the response, for example by setting `cookies`, we can use the `NextResponse` object:

    ```js
    //app/api/route.js
    export async function POST(request) {
      const organizationId = getOrganizationId();
      const response = NextResponse.json({ organizationId });

      response.cookies.set("organizationId", organizationId, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
      });

      return response;
    }
    ```

  - Alternatively - you can also use the function `cookies().set` to set cookies in API routes and Server Actions:

    ```js
    //app/api/route.js
    import { cookies } from "next/headers";

    export async function POST(request) {
      const organizationId = getOrganizationId();

      cookies().set("organizationId", organizationId, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
      });

      return NextResponse.json({ organizationId });
    }
    ```

  - We cannot set a cookie from a **Server Component**. The **Server component** below will throw an error:

    ```js
    import { cookies } from "next/headers";

    export default function ServerComponent() {
      cookies().set("organizationId", organizationId, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
      });

      return <div>Server Component</div>;
    }
    ```

# Redirecting from API Routes

- In **API routes**, just like in **Server Components**, we can also redirect users using the `redirect` function imported from `next/navigation`:

  ```javascript
  //app/api/route.js
  import { redirect } from "next/navigation";

  export async function GET(request) {
    return redirect("/login");
  }
  ```

# Handling Webhooks

- Handling **webhooks** is a common use case for **API routes**,

  ```js
  //app/api/webhooks.js
  export async function POST(request) {
    const rawBody = await request.text();

    // handle webhook here
  }
  ```

# Handling `HTTP` Methods

- **API routes** can handle different `HTTP` methods like `GET`, `POST`, `PUT`, `DELETE`, etc. You can use conditional statements based on the req.method to handle specific methods.
- **Example**:
  ```javascript
  // app/api/users.js
  export default function handler(req, res) {
    if (req.method === "GET") {
      // Handle GET request
      res.status(200).json({ users: [] });
    } else if (req.method === "POST") {
      // Handle POST request
      const newUser = req.body;
      // Process the new user data
      res.status(201).json({ message: "User created" });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  ```
  - here, the `/api/users` route handles `GET` and `POST` requests differently. It returns a list of users for `GET` requests and creates a new user for `POST` requests.

# Connecting to Databases

- **API routes** can connect to databases or external services to perform data operations. You can use libraries like `prisma`, `mongoose`, or any other database client to interact with your database.
- **Example** (using `prisma`):

  ```javascript
  // pages/api/posts.js
  import prisma from "../../lib/prisma";

  export default async function handler(req, res) {
    if (req.method === "GET") {
      const posts = await prisma.post.findMany();
      res.status(200).json({ posts });
    } else if (req.method === "POST") {
      const { title, content } = req.body;
      const newPost = await prisma.post.create({
        data: {
          title,
          content,
        },
      });
      res.status(201).json({ post: newPost });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  ```

# Authentication and Authorization

- **API routes** can handle **authentication** and **authorization** to protect sensitive data or restrict access to certain endpoints. You can use libraries like `jsonwebtoken` or `next-auth` to implement **authentication** strategies.
- **Example** (using `jsonwebtoken`):

  ```javascript
  // pages/api/protected.js
  import jwt from "jsonwebtoken";

  const secretKey = process.env.JWT_SECRET;

  export default function handler(req, res) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    try {
      const decoded = jwt.verify(token, secretKey);
      // Access the authenticated user data from `decoded`
      res.status(200).json({ message: "Protected data" });
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  }
  ```

  - In this example, the `/api/protected` route checks for the presence of a `JWT` token in the Authorization header. It verifies the token using the secret key and grants access to protected data if the token is valid.s

# Use Case: Handling Form Input

- A good use case for **API Routes** is handling form input. For example, you can create a form on your page and have it send a `POST` request to your **API Route**. You can then write code to directly save it to your database. The **API Route** code will not be part of your client bundle, so you can safely write server-side code.

  ```js
  export default function handler(req, res) {
    const email = req.body.email;

    // Then save email to your database, etc...
  }
  ```

# Resources and Further Reading

1. [https://nextjs.org/docs/pages/building-your-application/routing/api-routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
