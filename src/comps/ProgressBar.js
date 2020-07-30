import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
	// we pass the file for useStorage custom hook
	// it will fire its useEffect and then return url and progress
	const { url, progress } = useStorage(file);

	useEffect(() => {
		if (url) {
			// progress-bar will not show anymore when url is valid -> file 100% uploaded on firebase
			setFile(null);
		}
	}, [url]);

	return (
		<motion.div
			className="progress-bar"
			initia={{ width: 0 }}
			animate={{ width: progress + "%" }}
		></motion.div>
	);
};

export default ProgressBar;
