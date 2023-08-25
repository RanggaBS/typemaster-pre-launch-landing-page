import PropTypes from "prop-types";

function Button({ classModifier }) {
	return (
		<a
			role="button"
			href="#"
			className={`button button--${classModifier} px-4 py-3 font-bold uppercase transition rounded-lg
			md:px-6 md:py-4`}
		>
			Pre-order now
		</a>
	);
}
Button.propTypes = {
	classModifier: PropTypes.string,
};

export default Button;
