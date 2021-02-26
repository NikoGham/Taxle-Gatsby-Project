import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
	title: 'Taxle', // e.g: 'Name | Developer'
	lang: '', // e.g: en, es, fr, jp
	description: ' Tax for Landlords' // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
	title: '',
	name: ' Taxle',
	subtitle: 'The choice for landlords',
	cta: 'Tell me more '
};

// ABOUT DATA
export const aboutData = {
	img: 'profile.jpg',
	headerOne: ' Self Assessment Tax Returns',
	headerTwo: ' Capital Gains',
	headerThree: ' Self Assessment Registration ',
	resume: '' // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
	{
		id: nanoid(),
		img: false,
		title: 'Fill in our questionnaire and get a quote',
		info: 'It takes about as much time to make a nice cup of tea. ',
		info2:
			" Once we have an idea of what you need, we'll email you with a quote within a day",
		url: '',
		butText: "I'm sold! Lets get started..."
	},
	{
		id: nanoid(),
		img: 'Teacup',
		title: "You're in... What next?",
		info: 'When you are happy with the quote, let us know. ',
		info2: "We'll set you up a secure portal account and send you a simple checklist of the tax information we need",
		url: '',
		butText: ''
	},
	{
		id: nanoid(),
		img: 'Documents',
		title: 'When does the hassle begin?',
		info:
			"It doesn't! All you need is your smart phone ",
		info2: 'Read through the checklist, take a photo of each document required and upload it to the portal',
		info3: 'if you find that easy, start uploading new documents as and when you receive them',
		info4: 'No more turning the house upside down to find paperwork one week before the deadline.',
		info5: 'Lovely',
		url: '',
		butText: ''
	},
	{
		id: nanoid(),
		img: false,
		title: 'What happens now?',
		info: " We'll prepare your tax return and let you know how much tax to pay, with a breakdown of the figure and reliefs available ",
		info2: 'Your tax return will stay in the portal, available to download at any time',
		info3: "Pay your tax, pay our fee, we'll submit your tax return and that's job done for another year.",
		url: '',
		butText: "Enough natter, lets get cracking"
	}
];

// CONTACT DATA
export const contactData = {
	cta: '',
	btn: '',
	email: ''
};

// FOOTER DATA
export const footerData = {
	networks: [
		{
			id: nanoid(),
			name: 'linkedin',
			url: ''
		},
		{
			id: nanoid(),
			name: 'facebook',
			url: ''
		}
	]
};
