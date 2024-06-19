import { Image } from "react-bootstrap";

import img_1 from "../../../img/effect_card_1.png";
import img_2 from "../../../img/effect_card_2.png";
import img_3 from "../../../img/effect_card_3.png";
import img_4 from "../../../img/card_check_icon.svg";

import "./Cards.css";

const Cards = () => {
	let data = [
		{
			title: "BASIC",
			price: 199,
			img: img_1,
		},
		{
			title: "PRO",
			price: 399,
			img: img_2,
		},
		{
			title: "ENTERPRISE",
			price: 799,
			img: img_3,
		},
	];
	return (
		<>
			<div className="cards w-100 px-3 px-sm-4 d-flex flex-row flex-wrap justify-content-center align-items-center">
				{data.map((item, index) => {
					return (
						<div
							className="card pt-4 border-0 d-flex flex-column justify-content-xl-start justify-content-sm-center align-items-center"
							key={index}>
							<Image src={item.img} />
							<p className="title mb-0 text-uppercase">{item.title}</p>
							<div className="line mb-4"></div>
							<h2 className="mb-1 text-capitalize">
								{item.price}
								<sub>$</sub>
							</h2>
							<p className="time">per year</p>
							<ul className="w-75 mb-4 ps-0 d-flex flex-column justify-content-center align-items-start">
								<li className="my-2">
									<Image className="me-4" src={img_4} />
									<span className="text-capitalize">
										Carefully crafted components
									</span>
								</li>
								<li className="my-2">
									<Image className="me-4" src={img_4} />
									<span className="text-capitalize">Amazing page examples</span>
								</li>
								<li className="my-2">
									<Image className="me-4" src={img_4} />
									<span className="text-capitalize">
										Super friendly support team
									</span>
								</li>
								<li className="my-2">
									<Image className="me-4" src={img_4} />
									<span className="text-capitalize">Awesome Support</span>
								</li>
							</ul>
							<button className="mt-1 border-0 text-uppercase" type="button">
								Get started
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Cards;
