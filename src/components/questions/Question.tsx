import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import arrowIco from '../../assets/icon-arrow.svg';
import styles from './Question.module.css';

type Props = {
	title: string;
	children: ReactNode;
};

const Question: React.FC<Props> = (props) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const questionHandler = () => {
		setIsExpanded((prevState) => !prevState);
	};

	return (
		<div className={styles.question}>
			<button
				type='button'
				onClick={questionHandler}>
				{props.title}
				<motion.img
					animate={{ rotate: isExpanded ? 180 : 0 }}
					src={arrowIco}
					alt=''
					className={isExpanded ? styles.expanded : ''}
				/>
			</button>
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}>
						<motion.p>{props.children}</motion.p>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Question;
