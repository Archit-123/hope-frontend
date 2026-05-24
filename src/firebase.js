import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// dotenv.config();
const firebaseConfig = {
  apiKey: "AIzaSyB2JNMsv8wqxQGAdF0vY1u2R_sv7zHqnHE",
  authDomain: "hope-49387.firebaseapp.com",
  projectId: "hope-49387",
  storageBucket: "hope-49387.firebasestorage.app",
  messagingSenderId: "8299740794",
  appId: "1:8299740794:web:708c58e957bd9299f8c5c3",
  measurementId: "G-BLVWYV69JC",
};

// const firebaseConfig = {
//   apiKey: "API_KEY",
//   authDomain: "AUTH_DOMAIN",
//   projectId: "PROJECT_ID",
//   appId: "APP_ID",
// };

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
