export const FeatureBox = ({ feature }) => {
	return (
		<div id="features">
			<div className="a-box">
                <div className="a-b-img">
                    <img src={feature.image} alt={feature.title} />
                </div>
                <div className="s-b-text">
                    <h2>{feature.title}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
		</div>
	);
};
