import { useRef, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import {
	Heading,
	ServicesSlide,
	ServiceList,
	DottedNavigation,
} from '../components';

import { servicesSectionText, services } from '../utils/constants';

const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const Services = () => {
	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const container = useRef();

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start end', 'end start'],
		layoutEffect: false,
	});

	const scrollToContact = () => {
		window.scrollTo({ top: screenSize.height * 9, behavior: 'smooth' });
	};

	return (
		<div
			ref={container}
			// id="services"
			className="w-full relative section-pt section-pb"
		>
			<div className="container grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2">
				<div className="md:pb-5 lg:pb-0 md:pr-8 xl:pr-10 self-center">
					<Heading
						tag={servicesSectionText.tag}
						header={servicesSectionText.heading}
						content={servicesSectionText.text}
						btn={['Learn More', scrollToContact, '#contact']}
					/>
				</div>
				<div className="pt-8 md:pt-0">
					<ServicesSlide services={services} />
				</div>
				<div className="col-span-1 md:col-span-2">
					<ServiceList scrollYProgress={scrollYProgress} />
				</div>
			</div>
			{/* <DottedNavigation /> */}
		</div>
	);
};

export default Services;
