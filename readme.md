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
  npm install

## 3. Components Flow
- In React, you can create functions (called **components**) by starting their name with a **capital letter** (naming convention).
- Export the function using the `export` keyword.
- Import it later in your `main.jsx` (or any other file) to render.
- This approach makes your code **modular, reusable, and easy to maintain**.


### 4.creating a custom react
- you can always create ur own custom react in which the functions or the props can be run using Dom 

### 5.understanding hooks 
    - first n foremost we need to undertsnad why do we hooks at first place?
        - The answer would updating of UI of same varaible in differnet variables
        - In the folder of hooks we explore simple project project of hooks and how it solves the problem of updating the variable at various places
### 6.React props
      -we use props to make componnet reuseable 
      -simple create craete a compnent pass prop or destructure the varibales in the argument 
      -pass the component wherever u want
