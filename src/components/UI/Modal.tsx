import ReactDOM from 'react-dom';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import styles from './Modal.module.css';

const Backdrop: React.FC<{ onClose: () => void }> = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -500 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -500 }}
			transition={{ type: 'tween' }}
			className={styles.backdrop}
			onClick={props.onClose}
		/>
	);
};

const Overlay: React.FC<{ children: ReactNode; onClose: () => void }> = (props) => {
	return (
		<motion.section
			className={styles.overlay}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<button
				className={styles.overlay__btn}
				onClick={props.onClose}
				aria-label='close'
			/>
			{props.children}
		</motion.section>
	);
};

type ModalProps = {
	onClose: () => void;
	children: ReactNode;
};

const Modal: React.FC<ModalProps> = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root')!)}
			{ReactDOM.createPortal(
				<Overlay onClose={props.onClose}>{props.children}</Overlay>,
				document.getElementById('overlay-root')!
			)}
		</>
	);
};
export default Modal;
