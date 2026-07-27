import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

import { Heading, Platforms } from '../components';
import dashboard from '../assets/imgs/dashboard.jpeg';

import { aboutSectionText } from '../utils/constants';


const About = () => {
	const isMobile = window.matchMedia("(max-width: 767px)").matches;
	let [sectionRef, { height }] = useMeasure();


	return (
		<div
			className="w-full relative section-pt !pt-0 md:!pt-[100px] lg:!pb-[40px]"
		>
			<div
				ref={sectionRef}
				className="container grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 lg:h-full"
			>
				<motion.div
					className="space-y-7 lg:space-y-10 order-2 lg:order-1 lg:self-center lg:h-fit max-w-[600px]"
				>
					<Heading
						tag={aboutSectionText.tag}
						header={aboutSectionText.heading}
						content={aboutSectionText.text}
					/>
					<Platforms />
				</motion.div>
				<div className={`lg:absolute lg:top-[75px] right-0 lg:w-[50%] flex items-center lg:pl-[70px]`}>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ scale: [0.9, 1.1, 1], opacity: [0, 1] }}
						transition={{ delay: isMobile ? 0 : 0.5, duration: 0.5 }}
						className="relative pl-[10px] lg:pl-[25px] pt-[25px] md:pt-[35px] lg:pt-[50px] pb-[15px] lg:pb-[25px] overflow-hidden"
					>
						<div
							//   style={{ scale: imgScale }}
							className="h-[240px] w-[110%] xl:w-full md:h-[56vw] lg:h-[400px] xl:h-[450px] bg-[--neutral] rounded-l-[0.85rem] md:rounded-l-[1.6rem] lg:rounded-l-[1.5rem] xl:rounded-l-[1.7rem]"
						>
							{/* Floaters */}
							<span
								className="absolute top-0 right-0 w-[45%] h-[50%] bg-[--gray]"
							/>
							<span
								className="absolute bottom-0 left-0 w-[35%] h-[50%] bg-[--dark] rounded-bl-2xl md:rounded-bl-3xl"
							/>

							{/* Image */}
							<img
								src={dashboard}
								className="relative w-full h-full object-cover object-left rounded-l-[0.85rem] md:rounded-l-[1.6rem] lg:rounded-l-[1.5rem] xl:rounded-l-[1.7rem]"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default About;
