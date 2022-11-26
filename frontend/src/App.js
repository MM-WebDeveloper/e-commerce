import { Routes, Route } from 'react-router-dom';
import HomeComponent from './routes/home/home';
import Nav from './routes/navigation/navigation';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Nav />}>
				<Route index element={<HomeComponent />} />
				<Route path='sign-in' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
