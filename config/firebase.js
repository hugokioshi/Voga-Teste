import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDHTIxJ36Nv64n1Zl-6BakFba06W6aGZs0",
  authDomain: "vogafirebase-d06c3.firebaseapp.com",
  projectId: "vogafirebase-d06c3",
  storageBucket: "vogafirebase-d06c3.appspot.com",
  messagingSenderId: "1005794521210",
  appId: "1:1005794521210:web:045faf7b7c9259ed88cbc3",
  measurementId: "G-G9GW8EQNTR"
};
// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
