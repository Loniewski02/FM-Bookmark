import Wrapper from '../Wrapper';
import Newsletter from './Newsletter';

import logo from '../../assets/logo-bookmark-footer.svg';
import facebookIco from '../../assets/icon-facebook.svg';
import twitterIco from '../../assets/icon-twitter.svg';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
	return (
		<footer>
			<Newsletter />
			<section className={styles.footer}>
				<Wrapper className={styles.footer__wrapper}>
					<img
						src={logo}
						alt=''
						className={styles.footer__logo}
					/>
					<div className={styles.footer__links}>
						<a href='#'>features</a>
						<a href='#'>pricing</a>
						<a href='#'>contact</a>
					</div>
					<div className={styles.footer__socials}>
						<a
							href='#'
							aria-label='facebook'>
							<img
								src={facebookIco}
								alt=''
							/>
						</a>
						<a
							href='#'
							aria-label='twitter'>
							<img
								src={twitterIco}
								alt=''
							/>
						</a>
					</div>
				</Wrapper>
			</section>
		</footer>
	);
};

export default Footer;
