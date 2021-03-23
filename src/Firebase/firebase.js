import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAO10KYzkvXkgRfGpXK326j7s4jwLrRfp0",
  authDomain: "expensify-6be15.firebaseapp.com",
  databaseURL: "https://expensify-6be15-default-rtdb.firebaseio.com",
  projectId: "expensify-6be15",
  storageBucket: "expensify-6be15.appspot.com",
  messagingSenderId: "796381685447",
  appId: "1:796381685447:web:db64561c70f88f53bb40e2",
  measurementId: "G-LFF4JD2D1T",
};

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

export { firebase, googleAuthProvider, database as default };
// database.ref("expenses").push({
//   id: "1",
//   description: "Gum",
//   note: "",
//   amount: 195,
//   createdAt: 0,
// });

// // child remove
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });
// // database.ref("notes").push({
// //   title: "To Do ",
// //   body: "Dsa ",
// // });

// // const notes = [
// //   {
// //     id: "12",
// //   },
// //   {
// //     id: "32",
// //     title: "Another note",
// //     body: "this is note",
// //   },
// // ];
// // const firebaseNotes = {
// //   notes:
// // };

// // database.ref().on("value", (snapshot) => {
// //   console.log(snapshot.val());
// // });
// // .then((snapshot) => {
// //   const val = snapshot.val();
// //   console.log(val);
// // })
// // .catch((e) => {
// //   console.log("Error in fetching data", e);
// // });

// // database
// //   .ref()
// //   .set({
// //     name: "Akshay Pandey",
// //     age: 20,
// //     job: {
// //       title: "Software Developer",
// //       company: "Google",
// //     },
// //     stressLevel: 6,
// //     location: {
// //       city: "Indore",
// //       country: "India",
// //     },
// //   })
// //   .then(() => {
// //     console.log("Data is saved");
// //   })
// //   .catch((e) => {
// //     console.log("This i failed", e);
// //   });

// // // database.ref().set("This is my data");

// // database.ref("age").set(21);
// // database.ref("location/city").set("New York");

// // database
// //   .ref("attributes")
// //   .set({
// //     height: 173,
// //     weight: 70,
// //   })
// //   .then(() => {
// //     console.log("Second Data is added");
// //   })
// //   .catch((e) => {
// //     console.log("This i failed", e);
// //   });

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Amazon",
// //   "location/city": "Hyderabad",
// // });
