import Wrapper from '../Wrapper';
import Info from '../layout/Info';
import Button from '../UI/Button';

import { FeatureType } from '../../helpers/types';

import styles from './Feature.module.css';

type Props = {
	items: FeatureType;
};

const Feature: React.FC<Props> = (props) => {
	return (
		<Wrapper className={styles.feature}>
			<div className={styles.feature__hero}>
				<img
					src={props.items.image}
					alt=''
				/>
				<div className={styles.figure} />
			</div>
			<Info
				isAlignedLeft={true}
				title={props.items.title}
				desc={props.items.desc}>
				<Button
					type='button'
					color='blue'>
					More Info
				</Button>
			</Info>
		</Wrapper>
	);
};

export default Feature;
