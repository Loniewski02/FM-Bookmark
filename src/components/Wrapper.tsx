import { ReactNode } from 'react';

import styles from './Wrapper.module.css';

type Props = {
	children: ReactNode;
	className?: string;
};

const Wrapper: React.FC<Props> = (props) => {
	const classes = `${styles.wrapper} ${props.className ? props.className : ''}`;

	return <div className={classes}>{props.children}</div>;
};

export default Wrapper;
