
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase & Analytics
const firebaseApp = initializeApp(firebaseConfig);
//If you want, you can remove the next line (analytics)
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;