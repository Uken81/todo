import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    QuerySnapshot,
    DocumentData,
    DocumentReference,
    addDoc,
    setDoc,
    doc
  } from 'firebase/firestore';
  import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDugKKiQ11sYeUN1mrDKRqbw0DAhupT-bc",
    authDomain: "todo-40786.firebaseapp.com",
    projectId: "todo-40786",
    storageBucket: "todo-40786.appspot.com",
    messagingSenderId: "173978248106",
    appId: "1:173978248106:web:d3007aa22139e6f6dcc1d3"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export const auth = getAuth(app);

// export const createUserProfile = async (email, password) => {
//     if (user) {
//         const userRef = doc(db, `users/${user.uid}`);
        
//         try {
//             // const docRef = await setDoc(doc(db, "users", user.uid), {
//             // //   first: "Ada",
//             // //   last: "Lovelace",
//             // //   born: 1815
//             // email: user.email,
//             // createdAt: new Date()
//             // });
//             await setDoc(userRef, {
//                 email,
//                 createdAt: new Date()
//               });
//             console.log("Document written with ID: ");
//           } catch (e) {
//             console.error("Error adding document: ", e);
//           }
//     }
// }