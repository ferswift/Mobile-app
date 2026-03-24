import app from "./firebaseconfig";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app);

// Cadastrando usuário
export const register = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Logando Usuário
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};


