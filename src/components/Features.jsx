import Feature1 from '../assets/img/feature_1.png';
import Feature2 from '../assets/img/feature_2.png';
import Feature3 from '../assets/img/feature_3.png';

import { FeatureBox } from '.';

const features = [
	{
		title: 'Development Course',
		image: Feature1
	},
	{
		title: 'Money Saving Services',
		image: Feature2
	},
	{
		title: 'Usability Interface',
		image: Feature3
	}
];

export const Features = () => {
	return (
		<div id="features">
			<div className="a-container">
				{features.map((f, i) => (
					<FeatureBox key={i} feature={f} />
				))}
			</div>
		</div>
	);
};
