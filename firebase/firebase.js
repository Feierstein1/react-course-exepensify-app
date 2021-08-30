import firebase from 'firebase'

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  export {firebase, database as default}

//   db.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
//   })

//   db.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
//   })

//   db.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
//   })

//   db.ref('expenses')
//     .once('value')
//     .then((snapshot)=>{
//         const expenses = []
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//     }).catch((e)=>{
//         })

//     db.ref('expenses')
//   .on('value' , (snapshot) =>{
//     const expenses = []
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses)
//   })


//   db.ref('expenses').push({
//       description: 'one',
//       note: '1',
//       amount: 12000,
//       createdAt: '46573647853847'
//   })

//   const subscription = db.ref().on('value', (snapshot)=> {
//       const info = snapshot.val()
//       console.log(`${info.name} is a ${info.job.title} at ${info.job.company}`)
//   }, (e)=>{
//       console.log('Error: ', error)
//   })

//   db.ref().update({
//       name: 'Poopy Man',
//       'job/title': 'CEO',
//       'job/company': "poopoo peepee"
//   })

  //this will make it so that every change is consoled
//   const onValueChange = db.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val())
//   }, (e) => {
//       console.log('error: ', e)
//   })

//   setTimeout(()=>{
//     db.ref('age').set(32)
//   }, 3000)

//   setTimeout(()=>{
//     db.ref().off(onValueChange)
//   }, 3000)

//   setTimeout(()=>{
//     db.ref('age').set(28)
//   }, 3000)

//   db.ref()
//   .once('value')
//   .then((snapshot)=>{
//     const val = snapshot.val()
//     console.log(val)
//   }).catch((e)=>{
//       console.log('Error handle: ', e)
//   })


  //db.ref('Single').remove()

//   db.ref().set({
//       name: 'Kenny Feierstein',
//       age: 31,
//       stressLevel: 8,
//       job: {
//           company: 'McDonalds',
//           title: 'manager'
//         },
//       location: {
//           city: 'Jacksonville',
//           state: 'FL'
//       }
//   }).then(()=>{
//       console.log('Data is saved')
//   }).catch((e)=>{
//       console.log('error: ', e)
//   })

//   db.ref().update({
//       stressLevel: 100,
//       'job/company': 'Poop',
//       'location/city': 'Jack'
//   })

