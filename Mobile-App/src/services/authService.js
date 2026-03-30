import { auth, db } from "@/src/services/firebaseconfig";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { doc, getDoc, setDoc } from "firebase/firestore";

// Cadastrando usuário
export const register = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  const user = userCredential.user;

  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    createdAt: new Date(),
  });

  return user;
};

// Logando Usuário
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );

  const user = userCredential.user;

  // 🔥 busca dados no Firestore
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const userData = docSnap.data();

    return {
      uid: user.uid,
      email: user.email,
      ...userData,
    };
  } else {
    throw new Error("Usuário não encontrado no Firestore");
  }
};
