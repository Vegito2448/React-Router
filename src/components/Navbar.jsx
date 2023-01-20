import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar navbar-dar bg-dark'>
			<nav className='container'>
				<NavLink to='/' className='btn btn-outline-primary'>
					Home
				</NavLink>
				<NavLink to='/contact' className='btn btn-outline-primary'>
					Contacto
				</NavLink>
				<NavLink to='/blog' className='btn btn-outline-primary'>
					Blog
				</NavLink>
			</nav>
		</div>
	);
};

export default Navbar;
