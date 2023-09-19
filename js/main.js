const footeryear = document.querySelector(".footer__year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footeryear.innerText = year;
};

handleCurrentYear()