// Initialize Firebase
const firebaseConfig = {
    apiKey: "My_API_KEY",
    authDomain: "MY_AUTH_DOMAIN",
    projectId: "MY_PROJECT_ID",
    storageBucket: "MY_STORAGE_BUCKET",
    messagingSenderId: "MY_MESSAGING_SENDER_ID",
    appId: "MY_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Firebase Authentication
  const auth = firebase.auth();
  
  // Function to handle sign up
  function signUp(email, password) {
    // Create user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed up successfully
        console.log("User signed up successfully:", userCredential.user);
        // Redirect to dashboard or next page
        window.location.href = "dashboard.html";
      })
      .catch(error => {
        // Handle errors
        console.error("Error signing up:", error.message);
      });
  }
  