import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
	// if clicks in backdrop, it sets state of selected img to null, then, for if condition
	// it closes the modal
	const handleClick = (e) => {
		if (e.target.classList.contains("backdrop")) {
			setSelectedImg(null);
		}
	};
	return (
		<motion.div
			className="backdrop"
			onClick={handleClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.img
				src={selectedImg}
				alt="modal pic"
				initial={{ y: "-100vh" }}
				animate={{ y: 0 }}
			/>
		</motion.div>
	);
};

export default Modal;
