# Project Setup

- Create React Project

```
npm create vite@latest simple-youtube -- --template react
```

- Go to the project

```
cd simple-youtube
```

- Install project dependencies

```
npm install
```

- Install tailwindcss and its peer dependencies

```
npm install -D tailwindcss postcss autoprefixer
```

- Generate **_tailwind.config.js_** and **_postcss.config.js_** files

```
npx tailwindcss init -p
```

- Add the paths to the **_tailwind.config.js_** file

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the @tailwind directives for each of Tailwind’s layers to in the **_./src/index.css_** file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- **Port Setup:** Inside **_vite.config.js_**, import defineConfig from vite and export a configuration object

```
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Replace 3000 with your desired port number
  },
});
```

- Install **_prettier-plugin-tailwindcss_** as a dev-dependency for automatic class sorting with prettier

```
npm install -D prettier prettier-plugin-tailwindcss
```

- Now create a **_.prettierrc_** file in the root project directory and add the below code to it.

```
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

- Run the project

```
npm run dev
```

### React Router DOM Setup

- Install react-router-dom as a regular dependency

```
npm i react-router-dom

```

### Redux Setup

- Install redux toolkit as a regular dependency

```
npm i @reduxjs/toolkit
```

- Install redux as a regular dependency

```
npm i react-redux
```

## Firebase Setup

- Enter `https://firebase.google.com/` in the browser.
- Click `go to console`
- Create a project, after creating a project it automaticly go to the project overview.
- Inside the project overview click </> (web)
- Register app

  - App nickname
  - check "Also set up Firebase Hosting for this app."
  - Click Register app

- Add Firebase SDK

```
npm install firebase
```

- Create firebase.jsx file in the utils directory and add below lines in it

```
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "simple-you-tube.firebaseapp.com",
  projectId: "simple-you-tube",
  storageBucket: "simple-you-tube.appspot.com",
  messagingSenderId: "918555298185",
  appId: "1:918555298185:web:31c8d18cae5e77a6f93958",
  measurementId: "G-7MX2C0PVJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
```

- Install Firebase CLI

```
npm install -g firebase-tools
```

- Go to the app console and click authentication
  - Get Started
  - Click Email/Password
  - Enable Email/Password
  - Click Save
- Deploy to Firebase Hosting (Later)

  - First Step

  ```
  firebase login
  ```

  - Second Step

  ```
  firebase init
  ```

  - After Firebase init:

    - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    - Use an existing project
    - simple-you-tube (Simple-You-Tube)
    - What do you want to use as your public directory? (public) ==> dist
    - Configure as a single-page app (rewrite all urls to /index.html)? (y/N) ==> N
    - Set up automatic builds and deploys with GitHub? (y/N) ==> N
    - It will create firebase.json and .firebaserc file.

  - Add the below code to the **_firebase.json_** file.
    - Here **_"rewrites"_** are very important; when you refresh the web page, it will handle the correct destination.

  ```
  {
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
  }
  ```

  - Third Step (When you're ready, deploy your web app)

  ```
  firebase deploy
  ```

### It must be remembered that before you deploy your project, you have to build your project with this command: `npm run build`.

Hosting URL: `https://simple-you-tube.web.app`

## vite env setup

You have to use the name of the API key in the **_.env_** file, which is VITE_FIREBASE_API_KEY

```
VITE_FIREBASE_API_KEY = "key...."
```

Now you can access FIREBASE_API_KEY this way.

```
import.meta.env.VITE_FIREBASE_API_KEY,
```
