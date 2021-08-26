import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAbKNqwvl3oQKBse4agedNJbbfpYpPnUn8",
    authDomain: "expensify-1f82f.firebaseapp.com",
    databaseURL: "https://expensify-1f82f-default-rtdb.firebaseio.com",
    projectId: "expensify-1f82f",
    storageBucket: "expensify-1f82f.appspot.com",
    messagingSenderId: "906022621857",
    appId: "1:906022621857:web:e0b38aea52a4d0cfe056e0"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.database()

  db.ref('expenses').on('child_removed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val())
  })

  db.ref('expenses').on('child_changed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val())
  })

  db.ref('expenses').on('child_added', (snapshot)=>{
    console.log(snapshot.key, snapshot.val())
  })

  db.ref('expenses')
    .once('value')
    .then((snapshot)=>{
        const expenses = []
        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        console.log(expenses)
    }).catch((e)=>{
        })

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

