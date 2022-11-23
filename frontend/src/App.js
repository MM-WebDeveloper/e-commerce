import { Routes, Route } from 'react-router-dom';
import HomeComponent from './routes/home/home';
import Nav from './routes/navigation/navigation';

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
