import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import styles from './Button.module.css';

type Props = {
	type: 'button' | 'reset' | 'submit';
	color?: 'red' | 'blue' | 'grey';
	isLong?: boolean;
	children: ReactNode;
};

const Button: React.FC<Props> = (props) => {
	let classes = styles.button;

	if (props.isLong) {
		classes += ` ${styles.long}`;
	}

	if (props.color === 'red') {
		classes += ` ${styles.red}`;
	}

	if (props.color === 'blue') {
		classes += ` ${styles.blue}`;
	}

	if (props.color === 'grey') {
		classes += ` ${styles.grey}`;
	}

	return (
		<motion.button
			whileTap={{ scale: 1.05 }}
			transition={{ type: 'spring', stiffness: 500 }}
			type={props.type}
			className={classes}>
			{props.children}
		</motion.button>
	);
};

export default Button;
