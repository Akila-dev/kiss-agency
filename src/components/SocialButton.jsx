import React from 'react';
import { motion } from 'framer-motion';

const SocialButton = ({ icon, link }) => {
	return (
		<motion.a
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 400, damping: 10 }}
			href={link}
			className="w-[45px] h-[45px] flex items-center justify-center bg-[--gray] hover:bg-[--black] hover: text-[--white]"
		>
			{icon}
		</motion.a>
	);
};

export default SocialButton;