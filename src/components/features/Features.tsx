import { useState } from 'react';
import { motion } from 'framer-motion';

import Info from '../layout/Info';
import Section from '../layout/Section';
import Feature from './Feature';

import { FEATURES } from '../../assets/FEATURES';
import styles from './Features.module.css';

const Features: React.FC = () => {
	const [featureIndex, setFeatureIndex] = useState<number>(0);

	const featureHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		const id = event.currentTarget.dataset.featureid;
		const clickedFeatureIndex = FEATURES.findIndex((feat) => feat.id === id);

		setFeatureIndex(clickedFeatureIndex);
	};

	return (
		<Section>
			<Info
				title='Features'
				desc='Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your
				devices so you can access them on the go.'>
				<div className={styles.features__actions}>
					{FEATURES.map((feature, index) => (
						<div key={feature.id}>
							<button
								data-featureid={feature.id}
								onClick={featureHandler}
								className={index === featureIndex ? styles.active : ''}>
								{feature.btnText}
								{index === featureIndex && (
									<motion.span
										layoutId='tab'
										className={styles['features__actions-tab']}
									/>
								)}
							</button>
						</div>
					))}
				</div>
			</Info>
			<Feature items={FEATURES[featureIndex]} />
		</Section>
	);
};

export default Features;
