import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: process.env.NODE_ENV,
    authDomain:process.env.FIREBASE_AUTH_DOMIAN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PORJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const googleAuthProvider=new firebase.auth.GoogleAuthProvider()

export {firebase,database as default,googleAuthProvider}
// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(`${snapshot.key} is removed `)
// })
//
//
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(`${snapshot.key} is Changed `)
// })

// database.ref('expenses').on('value',(snapshot )=>{
//     const expense=[]
//     snapshot.forEach((childSnapshot)=>{
//         expense.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//
//     })
//     console.log(expense)
// })
//
// setTimeout(()=>{
//     database.ref('expenses/-LfmelAdNWKkk8ImXYuW').update({
//         amount:33333333333333,
//
//     })
// },5000)

// database.ref('expenses').once('value')
//     .then((snapshot)=>{
//         const expense=[]
//         snapshot.forEach((childSnapshot)=>{
//             expense.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//
//         })
//         console.log(expense)
//     })



// database.ref('expenses').push({
//     desc:"This is march Bill",
//     amount:434234,
//     createdAt:3223232,
// })





// database.ref('notes/-Lfmc4O9pTuXb66ZD6RY').update({
//     body:"This is Running Go "
// })



// database.ref('notes').push(
//     {
//         title:"Second  Node",
//         body:"this is node body"
//     }
// )


// const notes=[
//     {
//         id:"444",
//         title:"First Node",
//         body:"this is node body"
//     },
//     {
//         id:"4443",
//         title:"Seond Node",
//         body:"this is node body"
//     }
// ]
// database.ref('notes').set(notes)

// const onValueChange=database.ref().on('value',(snapshot)=>{
//     const dataGet=snapshot.val();
//     console.log(`${dataGet.name} is ${dataGet.job.title} at ${dataGet.job.company}`)
// },(e)=>{
//     console.log("Fetching error ",e)
// })
// database.ref('city').remove()
// setTimeout(()=>{
//     database.ref('name').set('Jabbar')
// },3000)
// setTimeout(()=>{
//     database.ref('job/company').set('Amazon')
// },5000)


// database.ref('location')
//     .once('value')
//     .then((snapshot)=>{
//         const val=snapshot.val()
//         console.log("Fetched ",val)
//     })
//     .catch((error)=>{
//         console.log("error ",error)
//     });


// database.ref().set({
//     name:"Ghafar Ahmed",
//     job:{
//         title:"Web Developer",
//         company:"google"
//     },
//     age:"Mirpur",
//     stressLevel:6,
//
//     isSingle:true,
//     location:{
//         city:"Mirpur",
//         area:9999999
//     }
// }).then(()=>{
//     console.log("Connected Successfully data is saved")
// }).catch((error)=>{
//     console.log('Faild '+error)
// })
// database.ref().update({
//     stressLevel:9,
//    "job/company":"Amazon",
//     "location/city":"Islamabad"
//
// })


// const refuser=database.ref()
// refuser.remove().then(()=>{
//     console.log('removed successfully')
// }).catch((e)=>{
//     console.log('error ',e)
// })