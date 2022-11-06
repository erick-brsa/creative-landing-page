export const About = ({ detail }) => {
	return (
		<div id="about">
			<div className="about-image">
				<img src={detail.image} alt={detail.title} className="" />
			</div>
			<div className="about-text">
				<h2>{detail.title}</h2>
				<p>{detail.description}</p>
				<button>{detail.button}</button>
			</div>
		</div>
	);
};
