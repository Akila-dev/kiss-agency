import { useState, useEffect } from 'react';

import { motion, useTransform, useSpring } from 'framer-motion';
import { revealText } from '../../utils/variants';
import { FaPhone } from 'react-icons/fa6';
import { footerSectionText } from '../../utils/constants';
import Lottie from 'lottie-react';
import { useCallNowStore } from '../../utils/config';

import logo from '../../assets/imgs/kiss-agency-logo.png';
import chart from '../../assets/lottie/chart.json';
const getWindowsDimension = () => {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const MiddleSection = ({ scrollYProgress }) => {
	const setShowCallNow = useCallNowStore((state) => state.updateshowPopup);

	// *UPDATE SCREEN SIZE WHEN SCREEN/VIEW PORT RESIZES
	const [screenSize, setScreenSize] = useState(getWindowsDimension());
	useEffect(() => {
		const handleResize = () => {
			setScreenSize(getWindowsDimension());
		};

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// *SCROLL CONTROLS
	const hX = useTransform(scrollYProgress, [0, 0.4], [screenSize.width / 8, 0]);
	const springHX = useSpring(hX, { damping: 25 });

	const logoX = useTransform(scrollYProgress, [0, 0.3], [0, 0]);
	const springLOGOX = useSpring(logoX, { damping: 25 });

	const textImgX = useTransform(
		scrollYProgress,
		[0, 0.35],
		[screenSize.width / 5, 0]
	);
	const springTextIMGX = useSpring(textImgX, { damping: 25 });

	// const agencyFocuses = ['Design', 'Agency', '']

	// const [title5, settitle5] = useState(second)

	const titleText = ['Elevate', 'Your', 'Business ', 'With', 'Kiss ', 'Agency'];

	const kissBrands = ['Agency', 'web', 'soft', 'AI', 'design', 'ads'];

	return (
		<div className="relative w-screen min-w-[100vw] h-screen">
			{/* <div className="absolute top-[0%] left-0 w-full h-full opacity-10">
				<Lottie
					animationData={chart}
					style={{
						objectFit: 'cover',
						width: '100%',
						height: '100%',
						overflow: 'clip',
					}}
				/>
			</div> */}
			{/* <div className="absolute bottom-0 left-0 w-full h-full">
				<div className="w-full h-screen overflow-hidde">
					{[1, 2, 3, 4].map((i) => (
						<marquee
							key={i}
							width="100%"
							direction={i % 2 ? 'left' : 'right'}
							behavior="scrolling"
							vspace="0%"
							hspace="0%"
							// scrollAmount={}
							height={screenSize.width >= 1024 ? '25%' : '15%'}
						>
							<h1 className="text-[15vh] lg:text-[25vh] leading-[100%] flex gap-5 uppercase opacity-5">
								{['Agency', 'web', 'soft', 'AI', 'design', 'ads'].map(
									(text, j) => (
										<span key={j}>kiss {text}</span>
									)
								)}
							</h1>
						</marquee>
					))}
				</div>
			</div> */}
			<div className="absolute bottom-0 left-0 w-full h-full">
				<div className="w-full h-screen overflow-hidden opacity-5">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<motion.div
							animate={i % 2 ? { x: [0, -1000, 0] } : { x: [-1000, 0, -1000] }}
							transition={{ type: 'tween', duration: 35, repeat: Infinity }}
							key={i}
							// width="100%"
							// direction={i % 2 ? 'left' : 'right'}
							// behavior="scrolling"
							// vspace="0%"
							// hspace="0%"
							// // scrollAmount={}
							// height={screenSize.width >= 1024 ? '25%' : '15%'}
							className="w-full h-[16.5%] lg:h-[25%]"
						>
							<h1 className="text-[16.5vh] lg:text-[25vh] leading-[100%] flex gap-5 uppercase text-nowrap">
								{kissBrands.map((text, j) => (
									<span key={j}>kiss {kissBrands[i]}</span>
								))}
							</h1>
						</motion.div>
					))}
				</div>
			</div>
			<div className="relative w-screen min-w-[100vw] h-screen flex flex-col items-center justify-around lg:justify-start gap-0 lg:gap-[10vh pt-8">
				<div className="relative flex flex-col justify-center w-full">
					<div className="w-full pl-[25px] lg:pl-[100px] md:pr-[50px] grid grid-cols-1 lg:grid-cols-2">
						<motion.div
							style={{ translateX: springLOGOX }}
							className="h-[60px] self-start hidden lg:block opacity-0"
						>
							<img
								src={logo}
								alt="logo"
								className="h-full w-auto object-contain"
							/>
						</motion.div>
						<motion.div
							style={{ translateX: springTextIMGX }}
							className="space-y-5"
						>
							<div className="h-[45px] lg:h-[60px] flex lg:justify-end -ml-1">
								<img
									src={logo}
									alt="logo"
									className="h-full w-auto object-contain"
								/>
							</div>
							<p className="!leading-[160%] w-full md:w-[350px]">
								Your Vision, Our Expertise: <br /> Crafting Innovative Solutions
								In Design, Development, Digital Marketing, And AI.
							</p>
						</motion.div>
					</div>
				</div>
				<div className="relative h-full  flex flex-col justify-center">
					<motion.h1
						style={{ translateX: springHX }}
						initial="initial"
						whileInView="animate"
						viewport={{ amount: 0.35 }}
						transition={{ staggerChildren: 0.08 }}
						className="text-[15vw] lg:text-[9.5vw] font-medium !leading-[100%] lg:!leading-[85%] pb-[2.5vw] relative pr-[25px] px-5 lg:px-0 flex flex-wrap gap-x-2 gap-y-1 lg:gap-5 w-[100%] md:w-[70vw] xl:w-[65vw]"
					>
						{titleText.map((title, n) => (
							<span key={n} className="flex">
								{title.split('').map((char, i) => (
									<motion.span
										variants={revealText}
										key={i}
										className={n != 2 && n != 4 ? 'text-[--black] block' : ''}
									>
										{char}
									</motion.span>
								))}
							</span>
						))}

						<motion.div
							// whileHover={{ scale: 1.1 }}
							// whileTap={{ scale: 0.9 }}
							// transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							// href="#about"
							className=" lg:absolute lg:bottom-0 right-0 mt-7 md:mt-12 lg:mt-0 pointer-events-auto flex"
						>
							<motion.a
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
								// href="tel:+515-207-2540"
								// href={`tel:${footerSectionText.contact[0]}`}
								onClick={() => {
									setShowCallNow(true);
								}}
								className="btn-1-v2 !font-medium text-sm md:text-base lg:mb-[4vw] block pointer-events-auto w-auto"
							>
								<FaPhone className="mr-3" />
								Call Now
							</motion.a>
						</motion.div>
					</motion.h1>
				</div>
			</div>
		</div>
	);
};

export default MiddleSection;
