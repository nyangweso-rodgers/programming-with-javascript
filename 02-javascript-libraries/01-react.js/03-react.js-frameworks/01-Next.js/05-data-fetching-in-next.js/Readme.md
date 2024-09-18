# Data Fetching in Next.js

## Table Of Contents

# Data Fetching in Next.js

- There are many ways in Next.js where we can fetch data. Next.js has three unique functions we can use to fetch data for pre-rendering:
  1. `getStaticProps` (Static Generation)
  2. `getServerSideProps` (Server-side Rendering)
  3. API Routes

## 1. `getStaticProps` (Static Generation)

- Fetch data at build time.

## 2. `getServerSideProps` (Server-side Rendering)

## 3. API Routes

# Route Handlers For Data Fetching

- The official recommendation by Next.js is to use **Route Handlers** for data fetching in Client Components, because **Route Handlers** allow you to implement an API in your Next.js application.
- For example:

  - in a `app/api/posts/route.ts` file you could implement a **Route Handler** to fetch posts via a `GET` request:

    ```js
    import { getPosts } from "@/data";

    export async function GET() {
      const posts = await getPosts();

      return Response.json(posts);
    }
    ```

  - Then you can fetch the data in your Client Component with a fetch request using the most popular data fetching library `react-query`

    ```js
    "use client";

    import { Posts } from "@/posts";
    import { useQuery } from "@tanstack/react-query";

    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      return await response.json();
    };

    const Page = () => {
      const { data, isLoading } = useQuery({
        queryKey: ["posts-route-handler"],
        queryFn: fetchPosts,
      });

      return (
        <div>
          <h1>Route Handler</h1>

          {isLoading ? <div>Loading...</div> : <Posts posts={data ?? []} />}
        </div>
      );
    };

    export default Page;
    ```

# Resources and Further Reading
