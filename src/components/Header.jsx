import { Navbar } from './Navbar';

export const Header = () => {
	return (
		<div id="main">
			<Navbar />
			<div className="name">
				<h1><span>Launch Your App</span>With Confidence And Creativity</h1>
				<p className="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatem.</p>
				<a href="#" className="cv-btn">Download</a>
			</div>
		</div>
	);
};
