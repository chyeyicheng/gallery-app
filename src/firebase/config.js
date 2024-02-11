import { initializeApp  } from 'firebase/app';
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyAByUT7t3VyfW-DccjIovrK2qQu8VYfYOg",
    authDomain: "test-e2ca3.firebaseapp.com",
    projectId: "test-e2ca3",
    storageBucket: "test-e2ca3.appspot.com",
    messagingSenderId: "558995405980",
    appId: "1:558995405980:web:06a5c7df477366267fc159"
};

const app = initializeApp(firebaseConfig);

export const projectStorage = getStorage(app);
export const projectFirestore = getFirestore(app);
export const timestamp = serverTimestamp();