// Initialize Firebase
const firebaseConfig = {
    apiKey: "MY_API_KEY",
    authDomain: "MY_AUTH_DOMAIN",
    projectId: "MY_PROJECT_ID",
    storageBucket: "MY_STORAGE_BUCKET",
    messagingSenderId: "MY_MESSAGING_SENDER_ID",
    appId: "MY_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Firebase Authentication
  const auth = firebase.auth();
  
  // Firebase Firestore
  const db = firebase.firestore();
  
  // Function to check user role
  function checkUserRole() {
    auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        db.collection("users").doc(uid).get().then(doc => {
          if (doc.exists) {
            const role = doc.data().role;
            if (role === "admin") {
              // Redirect to admin page
              window.location.href = "admin.html";
            } else {
              // Redirect to normal user page
              window.location.href = "user.html";
            }
          } else {
            console.log("No such document!");
          }
        }).catch(error => {
          console.log("Error getting document:", error);
        });
      } else {
        // User is signed out
        console.log("User is signed out.");
      }
    });
  }
  
  // Function to sign out
  function signOut() {
    auth.signOut().then(() => {
      // Sign-out successful.
      console.log("User signed out successfully.");
      // Redirect to login page
      window.location.href = "login.html";
    }).catch(error => {
      // An error happened.
      console.log("Error signing out:", error);
    });
  }
  