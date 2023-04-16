import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
   apiKey: "AIzaSyDp3xB0NNdpyZAC_aEafFS3Dpj7wLRfG54",
   authDomain: "weshop-ff16c.firebaseapp.com",
   databaseURL: "https://weshop-ff16c-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "weshop-ff16c",
   storageBucket: "weshop-ff16c.appspot.com",
   messagingSenderId: "663834168369",
   appId: "1:663834168369:web:845b7fb0c23e494a651910",
   measurementId: "G-3FM1HXNWSV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const URL = firebaseConfig.databaseURL;