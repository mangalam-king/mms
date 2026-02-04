
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyDPJo55NytPGeYZdVaI2GuvpLuaQRnuXVo",
 authDomain: "bank-website-3bbdb.firebaseapp.com",
 projectId: "bank-website-3bbdb",
 storageBucket: "bank-website-3bbdb.appspot.com",
 messagingSenderId: "1061141611547",
 appId: "1:1061141611547:web:b01ee39eeb287826ad64be"
};

const app = initializeApp(firebaseConfig);
window.auth = getAuth(app);
window.db = getFirestore(app);
