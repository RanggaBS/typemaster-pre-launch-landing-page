import Button from "./Button";

import imgKeyboardMobile from "../assets/images/mobile/image-keyboard.jpg";
import imgKeyboardTablet from "../assets/images/tablet/image-keyboard.jpg";
import imgKeyboardDesktop from "../assets/images/desktop/image-keyboard.jpg";

import imgSquarePattern from "../assets/images/shared/pattern-square.svg";

function Hero() {
	return (
		<section className="relative pb-6 hero md:flex md:pb-8">
			<article className="content md:ml-[var(--margin-x)] lg:m-0">
				<header className="lg:pt-12 lg:mr-32">
					<h1 className="title text-[3rem] pb-8 lg:text-[3.125rem] lg:font-black">
						Typemaster Keyboard
					</h1>
					<p className="pb-8 desc">
						Improve your productivity and gaming without breaking
						the bank. Upgrade to a high quality mechanical typing
						experience.
					</p>
				</header>
				<div className="flex items-center pb-16 gap-x-8">
					<Button classModifier={"primary"} />
					<p className="font-bold uppercase release-date">
						release on 5/27
					</p>
				</div>
			</article>
			<picture>
				<source
					srcSet={imgKeyboardDesktop}
					media="(min-width: 1024px)"
				/>
				<source srcSet={imgKeyboardTablet} media="(min-width: 768px)" />
				<img
					src={imgKeyboardMobile}
					alt="An image of Keyboard"
					className="translate-x-[var(--margin-x)] rounded-2xl lg:translate-x-0"
				/>
			</picture>
			<img
				src={imgSquarePattern}
				alt="square pattern"
				className="absolute top-0 right-0 -z-[1] invisible lg:visible lg:translate-x-[283px]"
			/>
		</section>
	);
}

export default Hero;
