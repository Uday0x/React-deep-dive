# React Deep Dive

## Project Setup

### 1. Create React App (CRA)
- Used earlier to initialize React projects.
- **Not industry standard anymore** because:
  - Heavy package size.
  - Comes with many unnecessary files.

### 2. Vite
- Modern, fast, and lightweight alternative to CRA.
- Recommended for React projects.
- To create a Vite app:
  ```bash
  npm create vite@latest
  ```bash
   npm install

## 3. Components Flow
- In React, you can create functions (called **components**) by starting their name with a **capital letter** (naming convention).
- Export the function using the `export` keyword.
- Import it later in your `main.jsx` (or any other file) to render.
- This approach makes your code **modular, reusable, and easy to maintain**.


### 4.creating a custom react
-you can always create ur own custom react in which the functions or the props can be run using Dom