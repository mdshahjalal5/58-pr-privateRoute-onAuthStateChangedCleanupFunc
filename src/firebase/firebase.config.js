import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyBYAO8aR3p8MrLO8hvq_5x-YGVErS8DKiQ",
    authDomain: "auth-router-context-app-e59c4.firebaseapp.com",
    projectId: "auth-router-context-app-e59c4",
    storageBucket: "auth-router-context-app-e59c4.appspot.com",
    messagingSenderId: "954516458579",
    appId: "1:954516458579:web:d22bf1443f7aec26588aa6"
};
const app = initializeApp(firebaseConfig);
export { app, firebaseConfig}