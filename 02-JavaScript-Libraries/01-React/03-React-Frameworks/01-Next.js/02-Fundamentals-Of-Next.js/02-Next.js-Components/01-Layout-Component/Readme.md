# Creating Reusable Layout in Next.js

# Creating Layout Components

## Table Of Contents

# Creating Layout Components

- Create a `;ayout.js` in the `Components` Folder. This file will act as the main layout. i.e., can be used to render App Header and the children for each page.

  ```js
  import Header from "./Header";

  const Layout = ({ children, menu }) => {
    return (
      <>
        <Header menuItems={menu} />
        <main>{children}</main>
      </>
    );
  };

  export default Layout;
  ```

# Resources
