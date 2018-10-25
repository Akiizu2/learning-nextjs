import firebase from 'firebase/app'
import 'firebase/auth'

export const AUTH_CONST = {
  SIGNIN: 'signed_in',
  SIGNOUT: 'signed_out',
}

export const signOut = () => {
  return firebase.auth().signOut()
}

export const getUser = (isOnce = false, callback = () => { }) => {
  return new Promise((resolve, reject) => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      if (isOnce) {
        unsub()
      }
      if (user) {
        callback({ type: AUTH_CONST.SIGNIN, data: user })
        resolve({ type: AUTH_CONST.SIGNIN, data: user })
      } else {
        callback({ type: AUTH_CONST.SIGNOUT, data: {} })
        resolve({ type: AUTH_CONST.SIGNOUT, data: {} })
      }
    });
  })
}

export const signIn = async (email, password) => {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}