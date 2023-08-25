import PropTypes from "prop-types";

function Card({ icon, title, desc }) {
	return (
		<article className="flex flex-col items-center pb-16 text-center gap-y-6 card md:max-w-[280px] md:p-0 md:items-start md:text-start lg:max-w-none">
			<img
				src={icon}
				alt={`${title} icon`}
				className="w-16 h-16 p-4 mb-4 rounded-xl aspect-square"
			/>
			<h3 className="title text-[2rem]">{title}</h3>
			<p className="leading-8 desc">{desc}</p>
		</article>
	);
}
Card.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	desc: PropTypes.string,
};

export default Card;
