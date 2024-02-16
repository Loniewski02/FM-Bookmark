import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Modal from './components/UI/Modal';
import Extensions from './components/extensions/Extensions';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NavBar from './components/nav/NavBar';
import Questions from './components/questions/Questions';
import Feature from './components/features/Feature';
import { FEATURES } from '../src/assets/FEATURES';

const App = () => {
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		const indentifier = setTimeout(() => {
			setIsShown(true);
		}, 30000);

		return () => clearTimeout(indentifier);
	}, []);

	const hideModalHandler = () => {
		setIsShown(false);
	};

	const showModalHandler = () => {
		setIsShown(true);
	};

	return (
		<>
			<div
				style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '10px' }}
				onMouseOver={showModalHandler}></div>
			<AnimatePresence>
				{isShown && (
					<Modal onClose={hideModalHandler}>
						<Feature items={FEATURES[Math.floor(Math.random() * FEATURES.length)]} />
					</Modal>
				)}
			</AnimatePresence>
			<NavBar />
			<Header />
			<main>
				<Features />
				<Extensions />
				<Questions />
			</main>
			<Footer />
		</>
	);
};

export default App;
