import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import './sign-in.component.css';
import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	useEffect(() => {
		const getAuthData = async () => {
			const response = await getRedirectResult(auth);

			if (response) {
				const userDocRef = await createUserDocumentFromAuth(response.user);
				console.log(userDocRef);
			}
		};
		getAuthData();
	}, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<p>SignIn</p>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<button onClick={signInWithGoogleRedirect}>
				Sign in with Google Redirect
			</button>
		</div>
	);
};

export default SignIn;
