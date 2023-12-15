import Wrapper from '../Wrapper';
import Button from '../UI/Button';

import heroImg from '../../assets/illustration-hero.svg';
import styles from './Header.module.css';

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Wrapper className={styles.header__wrapper}>
				<div className={styles.header__hero}>
					<img
						src={heroImg}
						alt=''
					/>
					<div className={styles.figure} />
				</div>
				<div className={styles.header__info}>
					<h1>A Simple Bookmark Manager</h1>
					<p>
						A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites
						load instantly. Try it for free.
					</p>
					<div className={styles['header__info-actions']}>
						<Button
							type='button'
							color='blue'>
							Get it on Chrome
						</Button>
						<Button
							type='button'
							color='grey'>
							Get it on Firefox
						</Button>
					</div>
				</div>
			</Wrapper>
		</header>
	);
};

export default Header;
