import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAyD2paEF_IUDLSbPAGHz78nlkESacAIyE",
  authDomain: "shop-app-c0a33.firebaseapp.com",
  projectId: "shop-app-c0a33",
  storageBucket: "shop-app-c0a33.appspot.com",
  messagingSenderId: "1014746596110",
  appId: "1:1014746596110:web:c140199bfc9ceb0d648d5f",
  measurementId: "G-TJ74N3DT7Z",
};
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)