import Card from "./Card";

import iconBattery from "../assets/images/shared/icon-battery.svg";
import iconBluetooth from "../assets/images/shared/icon-bluetooth.svg";
import iconCompatible from "../assets/images/shared/icon-compatible.svg";
import iconLight from "../assets/images/shared/icon-light.svg";
// import iconPatternSquare from "../assets/images/shared/pattern-square.svg";

const datas = [
	{
		icon: iconCompatible,
		title: "Highly Compatible",
		desc: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
	},
	{
		icon: iconBluetooth,
		title: "Wireless with Bluetooth",
		desc: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
	},
	{
		icon: iconBattery,
		title: "High Capacity Battery",
		desc: "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
	},
	{
		icon: iconLight,
		title: "RGB Backlit Modes",
		desc: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
	},
];

const Features = () => {
	return (
		<section className="features mx-[var(--margin-x)] md:flex md:flex-wrap md:justify-center md:gap-x-[4.5rem] md:gap-y-16 md:pb-24 lg:mx-0 lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:pt-36">
			{datas.map((value, index) => {
				return (
					<Card
						key={index}
						icon={value.icon}
						title={value.title}
						desc={value.desc}
					/>
				);
			})}
		</section>
	);
};

export default Features;
