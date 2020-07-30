import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAfY01xpUWPpUGSf8svfHbcA4IMuAsx6Tw",
	authDomain: "yourgram-app.firebaseapp.com",
	databaseURL: "https://yourgram-app.firebaseio.com",
	projectId: "yourgram-app",
	storageBucket: "yourgram-app.appspot.com",
	messagingSenderId: "778468646082",
	appId: "1:778468646082:web:b259d81f55fe2499bd2f5b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// use this const to interact with backend
const projectStorage = firebase.storage();

// use this const to interact with firestore
const projectFirestore = firebase.firestore();

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
