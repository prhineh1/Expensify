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

export const create = (expense) => database.ref('expenses').push(expense);

export const get = () => {
  return database.ref('expenses')
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

export const remove = (id) => database.ref(`expenses/${id}`).remove();

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 50000,
//     createdAt: 50392
// });


// database.ref('notes').push({
//     title: 'course Topics',
//     body: 'React native, angular, python'
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const name = snapshot.child('name').val();
//     const job = snapshot.child('job/title').val();
//     const company = snapshot.child('job/company').val();
//     console.log(`${name} is a ${job} at ${company}`);
// }, (err) => {
//     console.log('Error with fetching', err);
// });

// setTimeout(() => {
//     database.ref('name').set('Phil');
// }, 5000);

// firebase.database().ref().set({
//     name: 'Phil Rhinehart',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'unemployed',
//         company: 'Bums Inc.'
//     },
//     location: {
//         city: 'kernersville',
//         country: 'USA'
//     },
//     attributes: {
//         height: '177 cm',
//         weight: '81.5 kg'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((err) => {
//     console.log('This failed.', err);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().remove()
//   .then(() => console.log('data was removed'));

