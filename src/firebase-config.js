import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBjfQa_LPswCA85jtJ5uiiiJ1GVLQ-_4cI",
    authDomain: "cave-pomodoro-6113a.firebaseapp.com",
    projectId: "cave-pomodoro-6113a",
    storageBucket: "cave-pomodoro-6113a.appspot.com",
    messagingSenderId: "31679766691",
    appId: "1:31679766691:web:163acdd35479c15bcf5f16",
    measurementId: "G-F4FZ7J4ST9"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);