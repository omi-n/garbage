import firebase from "firebase/app";
// This is just so I don't get my app messed with while it's on GitHub.
// Firebase does not support .env for some reason? Send me a message on GitHub if this changed.
const { 
    apiKey, 
    authDomain, 
    projectId, 
    storageBucket, 
    messagingSenderId, 
    appId
  } = require("./firebaseInit.json");

export default function Init() {
    firebase.initializeApp({
        apiKey: apiKey,
        authDomain: authDomain,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId,
        appId: appId
    });
}
// hi