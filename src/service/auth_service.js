import { firebaseAuth, googleProvider } from './firebase';

class AuthService {
  login() {
    return firebaseAuth.signInWithPopup(googleProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
