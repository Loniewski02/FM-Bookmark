import { useState, useEffect } from 'react';

import Wrapper from '../Wrapper';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

import logo from '../../assets/logo-bookmark.svg';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
	const [isDesktop, setisDesktop] = useState<boolean>(false);
	const [isActive, setIsActive] = useState(false);

	const toggleNavHandler = () => {
		setIsActive((prevIsActive) => !prevIsActive);
	};

	const closeNavHandler = () => {
		setIsActive(false);
	};

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setisDesktop(true);
			} else {
				setisDesktop(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<nav className={styles.nav}>
			<Wrapper className={styles.nav__wrapper}>
				<img
					src={logo}
					alt=''
					className={`${styles.nav__logo} ${isActive && !isDesktop && styles.active}`}
				/>
				<>
					{!isDesktop && (
						<MobileNav
							isActive={isActive}
							onClose={closeNavHandler}
							onToggle={toggleNavHandler}
						/>
					)}
					{isDesktop && <DesktopNav />}
				</>
			</Wrapper>
		</nav>
	);
};

export default NavBar;
