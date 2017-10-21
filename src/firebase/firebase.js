import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const create = (expense, uid) => database.ref(`users/${uid}/expenses`).push(expense);

export const get = (uid) => {
  return database.ref(`users/${uid}/expenses`)
    .once('value')
    .then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnap) => {
        expenses.push({
          id: childSnap.key,
          ...childSnap.val()
        });
      });
      return expenses;
    });
};

export const remove = (id, uid) => database.ref(`users/${uid}/expenses/${id}`).remove();

export const edit = (updates, id, uid) => database.ref(`users/${uid}/expenses/${id}`).update({ ...updates })

export const login = () => firebase.auth().signInWithPopup(googleAuthProvider)

export const logout = () => firebase.auth().signOut();