import Button from '../UI/Button';
import Info from '../layout/Info';
import Section from '../layout/Section';
import Question from './Question';

import styles from './Questions.module.css';

const Questions: React.FC = () => {
	return (
		<Section>
			<Info
				title='Frequently Asked Questions'
				desc='Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.'
			/>
			<div className={styles.questions}>
				<Question title='What is Bookmark?'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla.
					Phasellus blandit ipsum quis quam ornare mattis.
				</Question>
				<Question title='How can I request a new browser?'>
					Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
					imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
					Suspendisse imperdie Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non
					ligula. Suspendisse imperdiet.
				</Question>
				<Question title='Is there a mobile app?'>
					Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna
					vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et
					ultricies bibendum.
				</Question>
				<Question title='What about other Chromium browsers?'>
					Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque
					eget nisl gravida pellentesque non ut velit.
				</Question>
			</div>
			<div className={styles.controls}>
				<Button
					type='button'
					color='blue'>
					More Info
				</Button>
			</div>
		</Section>
	);
};

export default Questions;
