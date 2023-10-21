import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlZiC8SjxGl1zvyYbxLVm3WRq79u9eZLk",
  authDomain: "auth-22e3d.firebaseapp.com",
  projectId: "auth-22e3d",
  storageBucket: "auth-22e3d.appspot.com",
  messagingSenderId: "310246630930",
  appId: "1:310246630930:web:428a5be33944e038fa5acb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
