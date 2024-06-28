# Data Fetching with the App Router

- The **App Router** provides a new data fetching approach using **React Server Components**. You can fetch data directly in your components using the `fetch` function or other data fetching libraries.
- **Example** (Fetch Data in a Page Component):

  ```js
  // app/blog/[slug]/page.js
  async function getPost(slug) {
    const res = await fetch(`https://api.example.com/posts/${slug}`);
    return res.json();
  }

  export default async function PostPage({ params }) {
    const post = await getPost(params.slug);

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
  ```

  - Here, the `getPost` function fetches a blog post from an API based on the slug parameter. The `PostPage` component is an `async` function that awaits the data fetching and renders the post.

# Resources and Further Reading
