# Express-Display

A simple project that demonstrates fetching data from an Express backend and displaying it in a React component.

## Setup

1. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Run

- Start the backend:
  ```bash
  cd backend
  npm start
  ```

- Start the frontend:
  ```bash
  cd frontend
  npm run dev
  ```

Then open the React app URL shown in the terminal (usually `http://localhost:5173`).

## What it does

- `backend/index.js` serves a JSON API at `/api/data`.
- `frontend/src/App.jsx` fetches that API and renders the returned items.
