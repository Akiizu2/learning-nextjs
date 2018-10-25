import firebase from 'firebase/app'
import 'firebase/auth'

let isInitialized = false

export const initialize = async () => {
  const config = {
    apiKey: "AIzaSyCQAUhXmgo-p_0y36CBND4AACu1MiUIjC8",
    authDomain: "aki-utility.firebaseapp.com",
    databaseURL: "https://aki-utility.firebaseio.com",
    projectId: "aki-utility",
    storageBucket: "aki-utility.appspot.com",
    messagingSenderId: "1039543323959"
  };
  if (!isInitialized) {
    firebase.initializeApp(config);
    isInitialized = true
  }

  return await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
}

