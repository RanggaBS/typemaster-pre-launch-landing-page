import imgPhoneAndKeyboardMobile from "../assets/images/mobile/image-phone-and-keyboard.jpg";
import imgPhoneAndKeyboardTablet from "../assets/images/tablet/image-phone-and-keyboard.jpg";
import imgPhoneAndKeyboardDesktop from "../assets/images/desktop/image-phone-and-keyboard.jpg";

import imgGlassAndKeyboardMobile from "../assets/images/mobile/image-glass-and-keyboard.jpg";
import imgGlassAndKeyboardTablet from "../assets/images/tablet/image-glass-and-keyboard.jpg";
import imgGlassAndKeyboardDesktop from "../assets/images/desktop/image-glass-and-keyboard.jpg";

import imgSquarePattern from "../assets/images/shared/pattern-square.svg";

function Overview() {
	return (
		<section className="overview pb-24 md:pb-32 lg:flex lg:justify-between lg:items-center lg:p-0 relative">
			<img
				src={imgSquarePattern}
				alt="square pattern"
				className="absolute bottom-0 left-0 -z-[1] invisible lg:visible lg:-translate-x-[283px]"
			/>

			{/* Pictures */}
			<div
				className={`flex pb-16 -translate-x-[var(--margin-x)] gap-x-8 pictures
				md:mx-[var(--margin-x)] md:translate-x-0
				lg:max-w-[44rem] lg:m-0 lg:p-0 lg:gap-x-4`}
			>
				<picture>
					<source
						srcSet={imgPhoneAndKeyboardDesktop}
						media="(min-width: 1024px)"
					/>
					<source
						srcSet={imgPhoneAndKeyboardTablet}
						media="(min-width: 768px)"
					/>
					<img
						src={imgPhoneAndKeyboardMobile}
						alt="Phone and keyboard"
						className="rounded-2xl"
					/>
				</picture>
				<picture>
					<source
						srcSet={imgGlassAndKeyboardDesktop}
						media="(min-width: 1024px)"
					/>
					<source
						srcSet={imgGlassAndKeyboardTablet}
						media="(min-width: 768px)"
					/>
					<img
						src={imgGlassAndKeyboardMobile}
						alt="Glass and keyboard"
						className="rounded-2xl"
					/>
				</picture>
			</div>

			{/* Text Content */}
			<article className="text-center mx-[var(--margin-x)] content md:flex md:items-center md:gap-x-24 md:text-start lg:w-60 lg:m-0 lg:flex-col">
				<h2 className="title text-[2.25rem] pb-6 md:p-0 lg:pb-8">
					Mechanical wireless keyboard
				</h2>
				<p className="desc">
					The Typemaster keyboard boasts top-notch build and practical
					design. It offers a wide variety of switches and keycaps,
					along with reliable wireless connectivity.
				</p>
			</article>
		</section>
	);
}

export default Overview;
