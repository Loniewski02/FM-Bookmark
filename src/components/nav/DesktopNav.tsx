import Button from '../UI/Button';

import styles from './DesktopNav.module.css';

const DesktopNav: React.FC = () => {
	return (
		<>
			<div className={styles['nav__items']}>
				<a href='#'>features</a>
				<a href='#'>pricing</a>
				<a href='#'>contact</a>
				<Button
					type='button'
					color='red'>
					login
				</Button>
			</div>
		</>
	);
};

export default DesktopNav;
