import axios from 'axios';// For API consuming
import { CONFIG } from '../../config';
import { User } from '../domain/user';
import * as firebase_auth from "firebase/auth";
import { initializeApp} from "firebase/app";

const HEADERS = { headers: { Accept: 'application/json'}};

const firebaseConfig = {
  apiKey: CONFIG.firebase.apiKey,
  authDomain: CONFIG.firebase.authDomain,
  projectId: CONFIG.firebase.projectId,
  storageBucket: CONFIG.firebase.storageBucket,
  messagingSenderId: CONFIG.firebase.messagingSenderId,
  appId: CONFIG.firebase.appId,
  measurementId: CONFIG.firebase.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// getUser
export const getUser = async (user: User) => {
  const url = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}/user`;
  return await axios.get(url, {params: {userIs: user.userId}});
};

// getAuthUser
export const getAuthUser = async () => {
  const auth = firebase_auth.getAuth(app);
  const user = auth.currentUser;
  const url = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}/user`;
  return await axios.get(url, {params: {userIs: user?.uid}});
};

// registerUserWithEmailAndPassword
export const registerUserWithEmailAndPassword = async (user: User) => {
    const url = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}/user`;
    const res = await axios.post(url, {...user}, HEADERS,);
    if (!res) {
      throw Error("Creation failed.");
    }

    const auth = firebase_auth.getAuth(app);
    firebase_auth.createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
       userCredential.user;
    })
    .catch((error) => {
      error; // undo create in users microservice
    });
};

// signInWithEmailAndPassword
export const signInWithEmailAndPassword = async (user: User) => {
  const auth = firebase_auth.getAuth(app);
  firebase_auth.createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    userCredential.user
  })
  .catch((error) => {
    error
  });
};

// onAuthStateChanged
export const onAuthStateChanged = async () => {
  const auth = firebase_auth.getAuth(app);
  firebase_auth.onAuthStateChanged(auth, (user) => {
    if (user) {
      user.uid
    } else {
      null
    }
  });

};

// updatePassword
export const updatePassword = async (newPassword: string) => {
  const auth = firebase_auth.getAuth(app);
  const user = auth.currentUser;
  if (user != null) {
    firebase_auth.updatePassword(user, newPassword).then(() => {
      // Update successful.
    }).catch((error) => {
      error
    });
  }
};

// updateProfile
export const updateProfile = async (user: User) => {
  const auth = firebase_auth.getAuth(app);
  const userFirebase = auth.currentUser;
  if (userFirebase != null) {
    firebase_auth.updateEmail(userFirebase, user.email).then(() => {
      // Update successful.
    }).catch((error) => {
      error
    });
  }

  const url = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}/user`;
  const res = await axios.put(url, {...user}, HEADERS,);
  if (!res) {
    throw Error("Creation failed.");
  }
};


// deleteUser
export const deleteUser = async () => {
  const auth = firebase_auth.getAuth(app);
  const user = auth.currentUser;
  if (!user) {
    throw Error("Delation failed.");
  }

  firebase_auth.deleteUser(user).then(() => {
    // User deleted.
  }).catch((error) => {
    error
  });

  const url = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}/user`;
  const res = await axios.delete(url, {params: {user: user.getIdToken}},);
  if (!res) {
    throw Error("Creation failed."); // undo delete in firebase
  }
};
