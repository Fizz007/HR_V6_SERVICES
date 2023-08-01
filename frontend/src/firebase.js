import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAC6srKPNi1-SasIIdS89ni1rArx-2OcPU",
    authDomain: "v6-services.firebaseapp.com",
    projectId: "v6-services",
    storageBucket: "v6-services.appspot.com",
    messagingSenderId: "964858964673",
    appId: "1:964858964673:web:dbd784ef49a5dc75af8240"
  };

  const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getFirestore(app);