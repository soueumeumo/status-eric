// COLE AQUI SUA CONFIGURAÇÃO DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCN03rsnJFWSIF2zMGgrIRTacpA19sG0x8",
  authDomain: "harley-oficina-status.firebaseapp.com",
  projectId: "harley-oficina-status",
  storageBucket: "harley-oficina-status.firebasestorage.app",
  messagingSenderId: "999518101965",
  appId: "1:999518101965:web:763492a398a9e77cfce484"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

