import { Image } from "react-bootstrap";

import "./Service.css";

import img_1 from "../../../img/Startup.svg";
import img_2 from "../../../img/Saas_Business.svg";
import img_3 from "../../../img/Agency.svg";
import img_4 from "../../../img/App_Landing.svg";

const Service = () => {
	let data = [
		{
			title: "Startup",
			desc: "Short description for the ones who look for something new.",
			img: img_1,
		},
		{
			title: "Saas Business",
			desc: "Short description for the ones who look for something new.",
			img: img_2,
		},
		{
			title: "Agency",
			desc: "Short description for the ones who look for something new.",
			img: img_3,
		},
		{
			title: "App Landing",
			desc: "Short description for the ones who look for something new.",
			img: img_4,
		},
	];
	return (
		<>
			<div className="service mt-4 d-flex flex-row flex-wrap justify-content-end align-items-center gap-5">
				{data.map((item, index) => {
					return (
						<div
							className="item d-flex flex-row justify-content-start align-items-start gap-5"
							key={index}>
							<div className="img">
								<Image className="" src={item.img} />
							</div>
							<div className="body">
								<h4 className="text-capitalize">{item.title}</h4>
								<p className="text-capitalize">{item.desc}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Service;
