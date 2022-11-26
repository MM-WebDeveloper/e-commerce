import { Outlet, Link } from 'react-router-dom';
import distressedlogo from '../../assets/distressedlogo.png';
import './navigation.css';

const Nav = () => {
	return (
		<div className='navbar'>
			<div className='nav-gradient-bg'>
				<nav>
					<Link to='/'>
						<img className='nav-logo' src={distressedlogo} alt='shop logo' />
					</Link>
					<div>
						<Link className='nav-link' to='/shop'>
							SHOP
						</Link>

						<Link className='nav-link' to='/contact'>
							CONTACT
						</Link>

						<Link className='nav-link' to='/sign-in'>
							SIGN IN
						</Link>
					</div>
				</nav>
			</div>
			<Outlet />
		</div>
	);
};

export default Nav;
