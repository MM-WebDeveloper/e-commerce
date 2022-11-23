import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as NavLogo } from '../../assets/logo.svg';
import './navigation.css';

const Nav = () => {
	return (
		<div className='navbar'>
			<nav>
				<Link to='/'>
					<NavLogo className='nav-logo' />
				</Link>
				<div>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>

					<Link className='nav-link' to='/shop'>
						CONTACT
					</Link>

					<Link className='nav-link' to='/shop'>
						SIGN IN
					</Link>
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default Nav;
