import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyDeQruMXIHjxMOtD0IdEwcR-KAolhnr_CY",
    authDomain: "react-movie-bc08e.firebaseapp.com",
    projectId: "react-movie-bc08e",
    storageBucket: "react-movie-bc08e.appspot.com",
    messagingSenderId: "833413369211",
    appId: "1:833413369211:web:f4e4041c190abc703241de"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };