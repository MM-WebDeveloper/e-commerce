import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	Firestore,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDb3-CeYmP3oYQVI7ZUGPVLj3OaG8xOnuk',
	authDomain: 'rock-n--roll-instruments.firebaseapp.com',
	projectId: 'rock-n--roll-instruments',
	storageBucket: 'rock-n--roll-instruments.appspot.com',
	messagingSenderId: '838769067253',
	appId: '1:838769067253:web:6e2f0227c41f04398a71bc',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);

	const userDataSnapshot = await getDoc(userDocRef);

	if (!userDataSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

	return userDocRef;
};
