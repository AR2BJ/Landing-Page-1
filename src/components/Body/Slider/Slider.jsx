import { useEffect } from "react";
import { Image } from "react-bootstrap";
import Swiper from "swiper/bundle";

import "swiper/css/bundle";
import "./Slider.css";

import slide_1 from "../../../img/slider_img_1.png";
import slide_2 from "../../../img/slider_img_2.png";
import slide_3 from "../../../img/slider_img_3.png";

const Slider = () => {
	useEffect(() => {
		const swiper = new Swiper(".swiper_1", {
			slidesPerView: window.screen.width <= 693 ? 1 : window.screen.width <= 1050 ? 2 : 3,
			spaceBetween: 40,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
	}, []);
	let data = [
		{
			context:
				"Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
			name: "Isabela Moreira",
			job: "Lead Designer, UIdeck",
			img: slide_1,
		},
		{
			context:
				"Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
			name: "Fiona",
			job: "CEO, SpaceX",
			img: slide_2,
		},
		{
			context:
				"Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
			name: "Elon Musk",
			job: "CEO, GrayGrids",
			img: slide_3,
		},
		{
			context:
				"Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
			name: "Isabela Moreira",
			job: "Lead Designer, UIdeck",
			img: slide_1,
		},
		{
			context:
				"Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
			name: "Fiona",
			job: "CEO, SpaceX",
			img: slide_2,
		},
		{
			context:
				"Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed! Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!",
			name: "Elon Musk",
			job: "CEO, GrayGrids",
			img: slide_3,
		},
	];
	return (
		<>
			<div className="swiper swiper_1 h-100">
				<div className="swiper-wrapper">
					{data.map((item, index) => {
						return (
							<div
								className="swiper-slide bg-white text-center d-flex flex-column justify-content-center align-items-center"
								key={index}>
								<Image src={item.img} />
								<p className="des_5_slide text-capitalize">{item.context}</p>
								<div className="line"></div>
								<h5 className="text-capitalize">{item.name}</h5>
								<p className="job text-capitalize">{item.job}</p>
							</div>
						);
					})}
				</div>
				<div className="swiper-pagination"></div>
			</div>
		</>
	);
};

export default Slider;
