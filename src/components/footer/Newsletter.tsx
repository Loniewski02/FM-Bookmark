import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '../UI/Button';

import styles from './Newsletter.module.css';

let MEMBERS = 35000; // data from database...

const Newsletter: React.FC = () => {
	const [members, setMembers] = useState(MEMBERS);
	const [enteredEmail, setEnteredEmail] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const decreaseInterval = setInterval(() => {
			setMembers((prevMembers) => Math.max(0, prevMembers - Math.ceil(MEMBERS / 20)));
		}, 1000);

		setTimeout(() => {
			clearInterval(decreaseInterval);
			// setMembers(0);
		}, 20000);

		return () => clearInterval(decreaseInterval);
	}, []);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		if (enteredEmail.trim().length === 0) {
			setError('Can’t be blank!');
			return;
		}
		if (!enteredEmail.includes('@')) {
			setError('Whoops, make sure it’s an email');
			return;
		}

		setError(null);
		setSuccess(true);
	};

	const emailValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredEmail(event.target.value);
	};

	return (
		<section className={styles.newsletter}>
			<p className={styles.newsletter__members}>
				<span>{members}+</span> already joined
			</p>
			<h2>Stay up-to-date with what we’re doing</h2>
			<form
				className={styles.newsletter__form}
				onSubmit={submitHandler}>
				<motion.div>
					<label htmlFor='email'>email</label>
					<input
						type='email'
						id='email'
						placeholder='Enter your email address'
						className={`${error ? styles.error : ''} ${!error && success ? styles.success : ''}`}
						value={enteredEmail}
						onChange={emailValueHandler}
					/>
					<AnimatePresence>
						{(error || (success && !error)) && (
							<motion.div
								initial={{ y: -10, height: 0, opacity: 0 }}
								animate={{ y: 0, height: 'auto', opacity: 1 }}
								exit={{ y: -10, height: 0, opacity: 0 }}>
								<p className={error ? styles.newsletter__error : styles.newsletter__success}>{error || 'Success!'}</p>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
				<Button
					type='submit'
					color='red'
					isLong={true}>
					Contact Us
				</Button>
			</form>
		</section>
	);
};

export default Newsletter;
