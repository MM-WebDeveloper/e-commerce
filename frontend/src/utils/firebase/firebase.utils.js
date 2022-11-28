import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDb3-CeYmP3oYQVI7ZUGPVLj3OaG8xOnuk',
	authDomain: 'rock-n--roll-instruments.firebaseapp.com',
	projectId: 'rock-n--roll-instruments',
	storageBucket: 'rock-n--roll-instruments.appspot.com',
	messagingSenderId: '838769067253',
	appId: '1:838769067253:web:6e2f0227c41f04398a71bc',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
