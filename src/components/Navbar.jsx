import { useState, useEffect } from 'react';
import Logo from '../assets/img/logo.png';

export const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setNav(true)
            } else {
                setNav(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
	return (
		<nav className={nav ? 'nav active' : 'nav'}>
			<a href="#" className="logo">
				<img src={Logo} alt="Logo" />
			</a>
			<input type="checkbox" className="menu-btn" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon" />
            </label>
            <ul className="menu">
                <li><a href="#" className={'active'}>Home</a></li>
                <li><a href="#" className={''}>Features</a></li>
                <li><a href="#" className={''}>About</a></li>
                <li><a href="#" className={''}>UI SS</a></li>
                <li><a href="#" className={''}>Download</a></li>
            </ul>
		</nav>
	);
};
