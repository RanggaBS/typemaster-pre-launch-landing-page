import logo from "../assets/images/shared/logo.svg";
import Button from "./Button";

function NavBar() {
	return (
		<nav className="flex items-center justify-between py-[var(--margin-x)] pb-12 mx-[var(--margin-x)] lg:pb-16">
			<a href="">
				<img src={logo} alt="Typemaster logo" />
			</a>
			<Button classModifier="secondary" />
		</nav>
	);
}

export default NavBar;
