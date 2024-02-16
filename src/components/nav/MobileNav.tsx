import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Button from '../UI/Button';

import styles from './MobileNav.module.css';

type Props = {
	isActive: boolean;
	onToggle: () => void;
	onClose: () => void;
};

const MobileNav: React.FC<Props> = (props) => {
	useEffect(() => {
		if (props.isActive) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		return () => {
			document.body.style.overflow = 'visible';
		};
	}, [props.isActive]);

	return (
		<>
			<motion.button
				className={`${styles.nav__burger} ${props.isActive ? styles.active : ''}`}
				onClick={props.onToggle}
				aria-label='menu button'>
				<div className={styles['nav__burger-box']}>
					<motion.span animate={{ y: props.isActive ? 6 : 0, rotate: props.isActive ? 45 : 0 }} />
					<motion.span animate={{ opacity: props.isActive ? 0 : 1 }} />
					<motion.span animate={{ y: props.isActive ? -6 : 0, rotate: props.isActive ? -45 : 0 }} />
				</div>
			</motion.button>
			<AnimatePresence>
				{props.isActive && (
					<motion.div
						className={styles['nav__items']}
						initial={{ opacity: 0, x: '90%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '90%' }}>
						<a
							href='#'
							onClick={props.onClose}>
							features
						</a>
						<a
							href='#'
							onClick={props.onClose}>
							pricing
						</a>
						<a
							href='#'
							onClick={props.onClose}>
							contact
						</a>
						<Button
							type='button'
							isLong={true}>
							login
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default MobileNav;
