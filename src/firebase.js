import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

let config = {
    apiKey: "AIzaSyAIAx1_HfAJ0nTHUdoTe21gZCGnEGHvxKY",
    authDomain: "react-slack-clone-6dafb.firebaseapp.com",
    databaseURL: "https://react-slack-clone-6dafb.firebaseio.com",
    projectId: "react-slack-clone-6dafb",
    storageBucket: "gs://react-slack-clone-6dafb.appspot.com",
    messagingSenderId: "791265163559"
};

firebase.initializeApp(config);

export default firebase;