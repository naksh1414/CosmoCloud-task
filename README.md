# React + Vite Employee Management Project

This project is a React application built using Vite as the build tool. It showcases the use of various React hooks, Tailwind CSS for styling, and lazy loading for performance optimization. The application interacts with the Cosmocloud API to fetch and add data to a MongoDB database.

## Features

- **React**: Utilizes React for building user interfaces.
- **React Hooks**: Implements hooks such as `useState`, `useEffect`, and `useParams` for state management and side effects.
- **Tailwind CSS**: Uses Tailwind CSS for styling the application.
- **React Lazy Loading**: Implements lazy loading for better performance.
- **Cosmocloud API**: Fetches data from and adds data to a MongoDB database using the Cosmocloud API.

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- Git

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

### Running the Project Locally

1. **Start the development server**:
    ```sh
    npm run dev
    ```

2. **Open the application in your browser**:
    ```
    http://localhost:3000
    ```

## Project Structure

- **src/components**: Contains reusable components like EmployeeCard, Loader, and Button.
- **src/hooks**: Contains custom hooks like useFetchData for data fetching.
- **src/pages**: Contains page components like Home and EmployeeDetail.
- **src/App.jsx**: Main application component with route definitions.
- **src/index.css**: Global CSS file with Tailwind CSS imports and custom styles.

## Usage

### Fetching Employee Data

The application fetches employee data from the Cosmocloud API using the custom `useFetchData` hook. The data is displayed in a paginated format.

### Adding a New Employee

Users can add a new employee to the MongoDB database using a modal form. The form submits data to the Cosmocloud API, which updates the database.

## Key Components

### EmployeeCard

Displays individual employee details with a link to view more details.

### Loader

Shows a loading animation while data is being fetched.

### Button

Reusable button component with custom styles.

## React Hooks

### useState

Used for managing local component state.

### useEffect

Used for fetching data and handling side effects.

### useParams

Used for accessing route parameters.

## Lazy Loading

Implemented using `React.lazy` and `Suspense` to load components only when needed, improving performance.

```jsx
import React, { Suspense, lazy } from "react";

const EmployeeDetail = lazy(() => import("./components/Cards/Details"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

## Tailwind CSS

Used for styling components with utility-first CSS classes. Custom themes and styles are defined in the `index.css` file.

```css
/* index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Custom theme variables */
  --gradient: linear-gradient(to top left, #00f5a0, #00d9f5);
  --background: 169 65% 3.84%;
  --foreground: 169 10% 97.4%;
  --secondary: 169 50% 14.4%;
  --secondary-foreground: 169 10% 97.4%;
}

body {
  @apply bg-secondary text-secondary-foreground;
}
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.



