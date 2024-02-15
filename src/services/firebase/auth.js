import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const login = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password).then((res) => res.user);
  return response
}

export const register = async (email, password) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response
}

export const logout = () => {
  signOut(auth).then(() => {
    return true
  })
}

export const checkAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      return user
    }
    return null
  })
}