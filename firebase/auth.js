import firebase from 'firebase/app'
import 'firebase/auth'
import router from 'next/router'

export const AUTH_CONST = {
  SIGNIN: 'signed_in',
  SIGNOUT: 'signed_out',
}

export const signOut = async () => {
  await firebase.auth().signOut()
  router.replace('/')
}

export const getUser = (isOnce = false, callback = () => { }) => {
  return new Promise((resolve, reject) => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      if (isOnce) {
        unsub()
      }
      console.log('uiser', user)
      if (user) {
        callback({ type: AUTH_CONST.SIGNIN, data: user })
        resolve({ type: AUTH_CONST.SIGNIN, data: user })
      } else {
        callback({ type: AUTH_CONST.SIGNOUT, data: {} })
        resolve({ type: AUTH_CONST.SIGNOUT, data: {} })
      }
    }, err => {
      console.log('error', err)
      throw err
    })
  })
}

export const signIn = async (email, password) => {
  return await firebase.auth().signInWithEmailAndPassword(email, password)
}