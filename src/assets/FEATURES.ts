import { FeatureType } from '../helpers/types';

import appImg from './illustration-features-tab-1.svg';
import searchImg from './illustration-features-tab-2.svg';
import shareImg from './illustration-features-tab-3.svg';

export const FEATURES: FeatureType[] = [
	{
		id: 'feature-1',
		title: 'Bookmark in one click',
		btnText: 'Simple Bookmarking',
		image: appImg,
		desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
	},
	{
		id: 'feature-2',
		title: 'Intelligent search',
		btnText: 'Speedy Searching',
		image: searchImg,
		desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
	},
	{
		id: 'feature-3',
		title: 'Share your bookmarks',
		btnText: 'Easy Sharing',
		image: shareImg,
		desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
	},
];
