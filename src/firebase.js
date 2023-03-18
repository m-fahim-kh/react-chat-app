import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyAf82xp87Q5hQNKjZVaVjzTQd4r6HObhno",
        authDomain: "fahim-schatapp.firebaseapp.com",
        projectId: "fahim-schatapp",
        storageBucket: "fahim-schatapp.appspot.com",
        messagingSenderId: "898805223321",
        appId: "1:898805223321:web:9e763abc638a3d85218d08"
      }).auth();

