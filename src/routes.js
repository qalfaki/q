import Home from './components/Home';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Talks from './components/Talks';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

export default [
	{
		path: '/q',
		component: Home,
		exact: true

	},
	{
		path: '/skills',
		component: Skills,
		exact: true

	},
	{
		path: '/contact',
		component: Contact,
		exact: true
	},
	{
		path: '/portfolio',
		component: Portfolio,
		exact: true
	},
	{
		path: '/talks',
		component: Talks,
		exact: true
	},
	{
		path: '/resume',
		component: Resume,
		exact: true
	},
]