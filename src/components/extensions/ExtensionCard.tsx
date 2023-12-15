import Button from '../UI/Button';

import bgDots from '../../assets/bg-dots.svg';
import styles from './ExtensionCard.module.css';

type Props = {
	name: string;
	logo: string;
	minVersion: number;
};

const ExtensionCard: React.FC<Props> = (props) => {
	return (
		<div className={styles.card}>
			<img
				src={props.logo}
				alt=''
				className={styles.card__logo}
			/>
			<div>
				<h3>Add to {props.name}</h3>
				<p>Minimum version {props.minVersion}</p>
			</div>
			<img
				src={bgDots}
				alt=''
				className={styles.card__dots}
			/>
			<Button
				type='button'
				color='blue'
				isLong={true}>
				Add & Install Extension
			</Button>
		</div>
	);
};

export default ExtensionCard;
