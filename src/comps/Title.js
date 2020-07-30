import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";

const variants = {
	open: { opacity: 1, y: 0 },
	closed: { opacity: 0, y: "-100%" },
};

const Title = () => {
	const valoresIniciais = {
		nome: JSON.parse(localStorage.getItem("nome")) || "",
		cor: JSON.parse(localStorage.getItem("cor")) || "#efb6b2",
	};

	const [isOpen, setIsOpen] = useState(false);

	const [settings, setSettings] = useState(valoresIniciais);

	document.documentElement.style.setProperty("--primary", settings.cor);

	function setData(key, value) {
		setSettings({
			...settings,
			[key]: value,
		}); //substitui o que vier dentro de categoria
	}

	function handleChange(e) {
		setData(e.target.getAttribute("name"), e.target.value);
		document.documentElement.style.setProperty("--primary", settings.cor);
	}

	function saveData() {
		localStorage.setItem("nome", JSON.stringify([settings.nome]));

		localStorage.setItem("cor", JSON.stringify([settings.cor]));

		setIsOpen(false);
	}

	return (
		<div className="title">
			<div className="nav">
				{settings.nome.length > 0 ? (
					<h1>{settings.nome}gram</h1>
				) : (
					<h1>Yourgram</h1>
				)}

				<div className="settings">
					<button
						className="btn-settings"
						onClick={() => setIsOpen(!isOpen)}
					>
						<FiSettings
							size={32}
							className="icon-settings"
							onClick={() => setIsOpen(!isOpen)}
						/>
					</button>
					<motion.div
						className="form"
						animate={isOpen ? "open" : "closed"}
						variants={variants}
					>
						<form
							onSubmit={(e) => {
								e.preventDefault();
							}}
						>
							<div>
								<input
									type="text"
									name="nome"
									value={settings.nome}
									onChange={handleChange}
									placeholder="Enter your name - Gram"
									className="name-gram"
								/>
							</div>
							<div>
								<input
									type="color"
									name="cor"
									value={settings.cor}
									onChange={handleChange}
								/>
							</div>
							<button className="btn-save" onClick={saveData}>
								Save
							</button>
						</form>
					</motion.div>
				</div>
			</div>

			{settings.nome.length > 0 ? (
				<h2>{settings.nome}'s Gallery</h2>
			) : (
				<h2>Your Gallery</h2>
			)}
		</div>
	);
};

export default Title;
