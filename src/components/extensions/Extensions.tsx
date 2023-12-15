import Section from '../layout/Section';
import Info from '../layout/Info';
import ExtensionCard from './ExtensionCard';

import chromeLogo from '../../assets/logo-chrome.svg';
import firefoxLogo from '../../assets/logo-firefox.svg';
import operaLogo from '../../assets/logo-opera.svg';

import styles from './Extensions.module.css';

const EXTENSIONS: { id: string; name: string; logo: string; minVersion: number }[] = [
	{ id: 'extension-1', name: 'Chrome', logo: chromeLogo, minVersion: 62 },
	{ id: 'extension-2', name: 'Firefox', logo: firefoxLogo, minVersion: 55 },
	{ id: 'extension-3', name: 'Opera', logo: operaLogo, minVersion: 46 },
];

const Extensions: React.FC = () => {
	return (
		<Section>
			<Info
				title='Download the extension'
				desc='We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to
				prioritize.'
			/>
			<div className={styles.extensions__container}>
				{EXTENSIONS.map((extension) => (
					<ExtensionCard
						key={extension.id}
						logo={extension.logo}
						name={extension.name}
						minVersion={extension.minVersion}
					/>
				))}
			</div>
		</Section>
	);
};

export default Extensions;
