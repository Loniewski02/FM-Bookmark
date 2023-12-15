import { ReactNode } from 'react';

import styles from './Info.module.css';

type Props = {
	children?: ReactNode;
	title: string;
	desc: string;
	isAlignedLeft?: boolean;
};

const Info: React.FC<Props> = (props) => {
	return (
		<div className={`${styles.info} ${props.isAlignedLeft ? styles.left : ''}`}>
			<h2>{props.title}</h2>
			<p>{props.desc}</p>
			{props.children}
		</div>
	);
};

export default Info;
