import { useRef, useState, useEffect } from 'react';

import { motion, useAnimate, stagger } from 'framer-motion';

import { Heading, Tags, Blog, DottedNavigation } from '../components';
import { ourValuesSectionText, values } from '../utils/constants';

import useMeasure from 'react-use-measure';
import { useValuesWidthStore, useToggleIFrameStore } from '../utils/config';

const OurValues = () => {
	let [container, { width }] = useMeasure();
	const updateSectionWidth = useValuesWidthStore((state) => state.updateWidth);
	const [containerWidth, setContainerWidth] = useState(width);
	const showingIFrame = useToggleIFrameStore((state) => state.toggleIFrame);

	useEffect(() => {
		setContainerWidth(width);
		return updateSectionWidth(containerWidth);
	}, [containerWidth, width]);

	return (
		<div
			ref={container}
			className="w-full relative section-pt section-pb bg-[--dark]"
		>
			<div
				className={`container grid grid-cols-1 gap-y-10`}
			>
				<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-14 xl:gap-20">
					<Heading
						tag={ourValuesSectionText.tag}
						header={ourValuesSectionText.heading}
						content={ourValuesSectionText.text}
						lightText
					/>
					<div className="flex items-end">
						<Tags tags={ourValuesSectionText.keywords} />
					</div>
				</div>
				<motion.div
					className={`grid col-span-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6`}
				>
					{values.map((value, i) => (
						<Blog
							key={i}
							title={value.title}
							excerpt={value.excerpt}
							link={value.link}
							img={value.img}
							type={value.type}
							lottie={value.lottie}
							clip={value.clip}
							i={i}
						/>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default OurValues;
