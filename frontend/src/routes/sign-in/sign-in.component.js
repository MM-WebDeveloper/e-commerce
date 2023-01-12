import './sign-in.component.css';
import RegisterForm from '../../components/registerForm/registerForm';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<p>SignIn</p>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
			<RegisterForm />
		</div>
	);
};

export default SignIn;
