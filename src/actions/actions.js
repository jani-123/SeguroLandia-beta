import store from "../store/store";
import { auth, database, firebase } from "../firebase.js";

export function addSignIn(user, pass) {
  auth.signInWithEmailAndPassword(user, pass).then(userObj => {
    database
      .ref("users/" + userObj.uid)
      .once("value")
      .then(res => {
        const fullUserInfo = res.val();

        console.log("full info ", fullUserInfo);
        store.setState({
          user: {
            id: userObj.uid,
            email: fullUserInfo.email
          }
        });
        console.log("salee", userObj.uid);
        
      });
  });
}

export function signOut() {
  auth.signOut();
  store.setState({
    successLogin: false,
    user: {
      id: "",
      email: ""
    }
  });
}

auth.onAuthStateChanged(user => {
  // se llama cada ves q se hace login on crea como un timer al aver un cambio se llama de maera autonatica
  if (user) {
    console.log("user", user);
    let usersRef = database.ref("/users");
    let userRef = usersRef.child(user.uid);
    store.setState({
      successLogin: true
    });
  }
});