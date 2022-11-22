import { Routes, Route, Outlet } from 'react-router-dom';
import HomeComponent from './routes/home/home';

const Nav = () => {
	return (
		<div>
			<div>
				<h1>navigation bar</h1>
			</div>
			<Outlet />
		</div>
	);
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Nav />}>
				<Route index element={<HomeComponent />} />
			</Route>
		</Routes>
	);
};

export default App;
