import React from 'react';

import { motion } from 'framer-motion';
import {
	slideInBottom,
	revealText2,
	slideInTop,
} from '../utils/variants';

const RevealText = ({ text, stagger }) => (
	<motion.span
		initial="initial"
		whileInView="animate"
		viewport={{ amount: 0.35 }}
		transition={{ staggerChildren: stagger }}
	>
		{text.split('').map((char, i) => (
			<motion.span variants={revealText2} key={i} className="">
				{char}
			</motion.span>
		))}
	</motion.span>
);

const Heading = ({ tag, header, content, btn, lightText }) => {
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.25 }}
			transition={{ staggerChildren: 0.25 }}
			className="flex flex-col gap-5"
		>
			<div className="flex">
				<motion.p variants={slideInBottom} custom={0} className={`px-5 py-2 font-bold border ${lightText ? "border-[--white] text-[--white]":"border-[--black] text-[--black]"}`}>
					{tag}
				</motion.p>
			</div>
			<motion.h1 variants={slideInBottom} custom={0.5}>
				{header.map((word, i) => (
					<span
						key={i}
						className={`${i % 2 ? 'text-[--gray]' : lightText ? 'text-[--white]' : 'text-[--black]'}`}
					>
						{word}{' '}
					</span>
				))}
			</motion.h1>
			<motion.p variants={slideInBottom} custom={1}>
				{content}
			</motion.p>
			{btn && (
				<motion.div variants={slideInTop} custom={3} className="flex">
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						onClick={btn[1]}
						className="!hidden xl:block btn-1-v2"
					>
						{btn[0]}
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						href={btn[2]}
						className="block xl:hidden btn-1-v2"
					>
						{btn[0]}
					</motion.a>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Heading;
