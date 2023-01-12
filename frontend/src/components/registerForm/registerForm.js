import { useState } from 'react';

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const registrationFields = {
	displayName: '',
	email: '',
	passowrd: '',
	confirmPassword: '',
};

const RegisterForm = () => {
	const [registrationData, setRegistrationData] = useState(registrationFields);
	const { displayName, email, password, confirmPassword } = registrationData;

	console.log(registrationData);

	const resetFormFields = () => {
		setRegistrationData(registrationFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setRegistrationData({ ...registrationData, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			await createUserDocumentFromAuth(user, { displayName });
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot register user, email already in use');
			} else {
				console.log(`Registering a user error: ${error}`);
			}
		}

		resetFormFields();
	};

	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					type='text'
					required
					onChange={handleChange}
					name='displayName'
					value={displayName}
				/>

				<label>Email</label>
				<input
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<label>Password</label>
				<input
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>

				<label>Confirm Password</label>
				<input
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>
				<button type='submit'>Register</button>
			</form>
		</div>
	);
};

export default RegisterForm;
