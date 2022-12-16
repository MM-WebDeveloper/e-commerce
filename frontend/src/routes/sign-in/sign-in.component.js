import './sign-in.component.css';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		console.log(user);
		createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<p>SignIn</p>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
		</div>
	);
};

export default SignIn;
