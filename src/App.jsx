import { Features, Header, About, Presentation, Contact } from './components';

import AboutImage from './assets/img/about.png';
import DownloadImage from './assets/img/download.png';

const details = [
	{
		image: AboutImage,
		title: 'Comes With All You Need For Daily Life',
		button: 'Get The App',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In minima quaerat debitis quia rem perspiciatis facere, commodi expedita, laboriosam ducimus ab, beatae labore nulla velit esse.'
	},
	{
		image: DownloadImage,
		title: 'Download And Get The App Now',
		button: 'Download',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In minima quaerat debitis quia rem perspiciatis facere, commodi expedita, laboriosam ducimus ab, beatae labore nulla velit esse.'
	}
];

const App = () => {
	return (
		<div className="App">
			<Header />
			<Features />
      <About detail={details[0]} />
      <Presentation />
      <About detail={details[1]} />
      <Contact />
		</div>
	);
};

export default App;
