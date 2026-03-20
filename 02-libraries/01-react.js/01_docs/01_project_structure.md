# React Project Structure

## Table of Contents

# React Project Structure

- /app-name
  - /public/
    - index.html
    - favicon.ico
    - /images/
  - /src/
    - /assets/ # Static assets (images, fonts, etc.)
    - /components/ # Reusable components
      - `Button.tsx`
      - `Modal.tsx`
      - `Navbar.tsx`
    - /features/ # Feature-specific logic and components (could be feature folders)
      - /auth/ # Authentication-related components, hooks, reducers
      - /dashboard/ # Dashboard components, hooks, etc.
      - /profile/ # Profile-related components
    - /hooks/ # Custom React hooks
      - `useAuth.ts`
      - `useFetch.ts`
      - `useForm.ts`
    - /layouts/ # Layout components (e.g., Header, Footer, Sidebar)
      - `MainLayout.tsx`
      - `AdminLayout.tsx`
      - `DashboardLayout.tsx`
    - /pages/ # Page components (routes)
      - Auth
        - `SignInPage.tsx`
        - `SignUpPage.tsx`
      - `Dashboard.tsx`
      - `Home.tsx`
      - `Users.tsx`
      - `Products.tsx`
      - `ContactUs.tsx`
    - /services/ # API requests, utilities, external service integrations
      - `authService.ts` # Authentication API
      - `apiService.ts` # General API calls
    - /store/ # State management (Redux, Zustand, Context API)
      - /auth/ # Auth-related Redux slices
      - /user/ # User-related Redux slices
      - store.ts # Global store configuration
    - /styles/ # Global styles (CSS, SASS, Styled Components)
      - `index.css`
      - `theme.ts` # For theme configuration in styled-components
      - `global.scss` # Global styles for the app
    - /types/ # TypeScript types (if using TS)
      - `auth.d.ts` # Types for authentication-related data
      - `api.d.ts` # Types for API responses
      - `user.d.ts` # Types for user objects
    - /utils/ # Utility functions, helpers, and constants
      - `formatDate.ts`
      - `validateEmail.ts`
    - /app.tsx # App component (entry point)
    - /index.tsx # Main entry point for React
    - /router.tsx # Routing (React Router setup)
    - /config/ # Environment variables and configuration files
      - `index.ts` # Export environment variables and configurations
      - `config.ts` # Configuration file for app set
  - /assets/
    - /images/
    - /fonts/
  - `.gitignore`
  - `package.json`
  - `Readme.md`
  - `tsconfig.json` (for TypeScript projects)
  - `vite.config.js` (for Vite projects)
  - `.eslintrc.json` (or .eslint.js)

## 1. `/public`

- contains static files that are served directly to the browser, such as the `index.html`, images, and other assets.

## 2. `/src`

- `src` folder is where all React application code resides.

## 3. `/assets`

- Store images, fonts, and other media assets here.
- It's optional to break this into subfolders (e.g., `/images`, `/fonts`).

## 4. `/components`

- Contains all reusable UI components that can be shared across different parts of your app.

## 5. `/features`

- Organize your **components**, **hooks**, and logic by features (also called domain-based structure). This helps separate code based on functionality rather than by component type, promoting better scalability and maintainability.

## 6. `/hooks`

- Store custom hooks that can be reused across your app, such as data fetching, form handling, etc.

## 7. `/layouts`

- Layout components like Header, Sidebar, Footer, etc., that are used across multiple pages.

## 8. `/pages`

- Contains page-level components (typically mapped to routes) that use the components from `/features` or `/components`

## 9. `/services`

- Functions for API requests, integrating third-party services, or utilities that handle external communication.
- This could also be the place for service hooks or API-related logic.

## 10. `/store`

- If you’re using a state management solution like Redux, Zustand, or Context API, keep the logic and actions here.

## 11. `/styles`

- Store global styles, theme files, or any CSS/SASS or CSS-in-JS styles here.

## 12. `/types`

- If using TypeScript, store your custom types or interfaces here for easier management and reusability.

## 13. `/utils`

- General utility functions that are used across your app (e.g., date formatting, data validation, etc.).

## 14. `/config`

- Store environment variables or app configuration settings here, such as the API base URL, feature flags, etc.

# Resources and Further Reading

1. [Dev.to - Recommended Folder Structure for React 2025](https://dev.to/pramod_boda/recommended-folder-structure-for-react-2025-48mc?ref=dailydev)
