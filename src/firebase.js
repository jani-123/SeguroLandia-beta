import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCS36EHYhRWWeKx_8iEDUKR8A8sqeSm8SI",
  authDomain: "seguros-data.firebaseapp.com",
  databaseURL: "https://seguros-data.firebaseio.com",
  projectId: "seguros-data",
  storageBucket: "",
  messagingSenderId: "313306588167"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();