import { Outlet, Link } from 'react-router-dom';
import './navigation.css';

const Nav = () => {
	return (
		<div className='navbar'>
			<nav>
				<Link to='/'>
					<h1>Logo</h1>
				</Link>
				<fragment>
					<Link to='/shop'>A</Link>

					<Link to='/shop'>B</Link>

					<Link to='/shop'>C</Link>
				</fragment>
			</nav>
			<Outlet />
		</div>
	);
};

export default Nav;
