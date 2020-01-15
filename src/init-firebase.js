import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDzwy6OEGpI0mnZWgRjw3AgjfHzjSAOVcU",
  authDomain: "kudos-93cdc.firebaseapp.com",
  databaseURL: "https://kudos-93cdc.firebaseio.com",
  projectId: "kudos-93cdc",
  storageBucket: "kudos-93cdc.appspot.com",
  messagingSenderId: "475609021942",
  appId: "1:475609021942:web:6e8b49d61c0a381825dbd7",
  measurementId: "G-CSVPFXW5NE"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;