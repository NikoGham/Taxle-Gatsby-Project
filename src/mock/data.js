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
	subtitle: '',
	cta: 'Tell me more '
};

// ABOUT DATA
export const aboutData = {
	img: 'profile.jpg',
	paragraphOne: '',
	paragraphTwo: '',
	paragraphThree: '',
	resume: '' // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
	{
		id: nanoid(),
		img: 'project.jpg',
		title: 'Fill in our questionnaire and get a quote',
		info: 'It takes about as much time to make a nice cup of tea. ',
		info2:
			" Once we receive the scope of your tax affairs, we'll review your case and have your quote emailed to you the same day",
		url: '',
		butText: "I'm sold, lets get started"
	},
	{
		id: nanoid(),
		img: 'project.jpg',
		title: "You're in. What next?",
		info: 'We will contact you with an engagement letter.',
		info2: 'This will have what you will need to send us! ',
		url: '',
		butText: ''
	},
	{
		id: nanoid(),
		img: 'project.jpg',
		title: 'Here comes the hassle right?',
		info:
			"We'll give you a portal to easily upload your documents to. Either download a PDF app or take pics on your smartphone and upload them up. ",
		info2: 'Lovely.',
		url: '',
		butText: ''
	},
	{
		id: nanoid(),
		img: 'project.jpg',
		title: 'Then what?',
		info: "We'll review and give you a tax breakdown of how much you need to pay. ",
		info2: 'Pay our fee, the tax, and job done for another year. Cocktails all round. ',
		url: '',
		butText: false
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
