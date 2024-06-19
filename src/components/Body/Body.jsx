import { Button, Col, Form, Image, InputGroup, Row } from "react-bootstrap";
import Service from "./Service/Service";

import "./Body.css";

import img_play from "../../img/play.svg";
import Email from "../../img/Email.svg";
import img_crafted from "../../img/img_crafted.svg";
import sub_img from "../../img/curious.png";
import brand_1 from "../../img/microsoft.svg";
import brand_2 from "../../img/google.svg";
import brand_3 from "../../img/accenture.svg";
import brand_4 from "../../img/01net.svg";
import Cards from "./Cards/Cards";
import Slider from "./Slider/Slider";

const Body = () => {
	return (
		<>
			<div className="content_1 d-flex flex-column justify-content-center align-items-center">
				<h2 className="title_1 text-center mb-5 text-capitalize">
					Handcrafted Landing Page{" "}
					<br className="d-none d-xl-block d-lg-none" /> for Startups and SaaS
					Businesses
				</h2>
				<p className="des_1 text-center text-capitalize">
					A simple, customizable, and, beautiful SaaS business focused landing
					page to <br className="d-none d-xl-block d-lg-none" /> make your
					project closer to launch!
				</p>
				<div className="btn mt-4 d-flex flex-row flex-wrap justify-content-center align-items-center gap-3 gap-md-0 gap-lg-0 gap-xl-0">
					<button
						className="btn_1_content_1 me-0 me-sm-3 me-md-3 me-xl-5 me-lg-4 border-0 text-uppercase"
						type="button">
						Get in touch
					</button>
					<button
						className="btn_2_content_1 border-0 text-uppercase"
						type="button">
						<span className="me-3">watch the video</span>
						<Image src={img_play} />
					</button>
				</div>
			</div>
			<div className="content_2 bg-white p-5 d-flex flex-row flex-wrap justify-content-between align-items-center gap-5">
				<div className="item_1 col-lg-12 col-xl-7 pe-0 pe-md-5 pe-lg-5 pe-xl-5 d-flex flex-column justify-content-center align-items-start">
					<h2 className="title_2 w-100 text-capitalize d-flex flex-row justify-content-start align-items-center">
						Crafted for
					</h2>
					<p className="des_2 w-100 text-capitalize d-flex flex-row justify-content-start  align-items-center">
						Stop wasting time and money designing and managing a website that
						<br className="d-none d-xl-block d-lg-none" />
						doesn’t get results. Happiness guaranteed!
					</p>
					<Service />
				</div>
				<div className="item_2 col-12 col-lg-12 col-xl-4 d-flex flex-row justify-content-center align-items-center">
					<Image
						className="w-100"
						src={img_crafted}
					/>
				</div>
			</div>
			<div className="content_3">
				<div className="item_1 d-flex flex-column justify-content-center align-items-center">
					<h2 className="title_3 w-100 text-capitalize d-flex flex-row justify-content-center align-items-center">
						Our Pricing
					</h2>
					<p className="des_3 w-100 px-5 text-capitalize mb-5 text-center d-flex flex-row justify-content-center align-items-center">
						Stop wasting time and money designing and managing a website that
						<br className="d-none d-xl-block d-lg-none" />
						doesn’t get results. Happiness guaranteed!
					</p>
					<Cards />
				</div>
			</div>
			<div className="content_4 d-flex flex-row flex-wrap justify-content-center align-items-center">
				<div className="item_1 col-12 col-lg-12 col-xl-6 d-flex flex-row justify-content-center align-items-center">
					<Image
						className="w-100 h-100"
						src={sub_img}
					/>
				</div>
				<div className="item_2 p-5 col-12 col-lg-12 col-xl-6 d-flex flex-column justify-content-center align-items-center">
					<h2 className="text-center text-capitalize mb-5">
						Curious to Learn More?
						<br className="d-none d-lg-none d-xl-block" /> Stay Tuned
					</h2>
					<p className="text-center text-capitalize mb-5">
						You let us know whenever you want us to update anything or
						<br className="d-none d-lg-none d-xl-block" /> think something can
						be optimized.
					</p>
					<Form className="position-relative">
						<InputGroup>
							<InputGroup.Text>
								<Image src={Email} />
							</InputGroup.Text>
							<Form.Control
								type="email"
								placeholder="johndoe@email.com"
							/>
						</InputGroup>
						<Button
							className="text-uppercase"
							type="button">
							Subscribe
						</Button>
					</Form>
				</div>
			</div>
			<div className="content_5 p-5">
				<div className="item_1">
					<h2 className="text-center text-capitalize mt-3">Testimonial</h2>
					<p className="text-center text-capitalize mb-5">
						Stop wasting time and money designing and managing a website that
						<br className="d-none d-lg-none d-xl-block" />
						doesn’t get results. Happiness guaranteed!
					</p>
				</div>
				<div className="item_2">
					<Slider />
				</div>
			</div>
			<div className="content_6 d-flex flex-row flex-wrap justify-content-center align-items-center p-5">
				<Image
					className="col-12 col-xl-2 col-lg-12"
					src={brand_1}
				/>
				<Image
					className="col-12 col-xl-2 col-lg-12"
					src={brand_2}
				/>
				<Image
					className="col-12 col-xl-2 col-lg-12"
					src={brand_3}
				/>
				<Image
					className="col-12 col-xl-2 col-lg-12"
					src={brand_4}
				/>
			</div>
			<div className="content_7 d-flex flex-column justify-content-center align-items-center p-5">
				<div className="item_1 d-flex flex-column justify-content-center align-items-center">
					<h2 className="text-center text-capitalize mt-3">Get In touch</h2>
					<p className="text-center text-capitalize mb-5">
						Stop wasting time and money designing and managing a website that
						<br className="d-none d-lg-none d-xl-block" />
						doesn’t get results. Happiness guaranteed!
					</p>
				</div>
				<div className="item_2 mt-3 d-flex flex-column justify-content-center align-items-center">
					<Form className="w-100 d-flex flex-column justify-content-center align-items-center gap-3">
						<Row className="mb-3 gap-4 gap-md-4 gap-lg-0 gap-xl-0 gap-md-3">
							<Form.Group
								as={Col}
								controlId="formGridText">
								<Form.Control
									className="p-4"
									type="text"
									placeholder="Your Fullname"
								/>
							</Form.Group>

							<Form.Group
								as={Col}
								controlId="formGridEmail">
								<Form.Control
									className="p-4"
									type="email"
									placeholder="Your Email"
								/>
							</Form.Group>
						</Row>

						<Row className="mb-3 gap-4 gap-md-4 gap-lg-0 gap-xl-0 gap-md-3">
							<Form.Group
								as={Col}
								controlId="formGridSub">
								<Form.Control
									className="p-4"
									type="text"
									placeholder="Subject"
								/>
							</Form.Group>

							<Form.Group
								as={Col}
								controlId="formGridTel">
								<Form.Control
									className="p-4"
									type="tel"
									placeholder="Phone"
								/>
							</Form.Group>
						</Row>

						<Form.Group className="textarea w-100 mb-3">
							<Form.Control
								className="p-3"
								as="textarea"
								rows={10}
								placeholder="Your Message"
							/>
						</Form.Group>

						<Button
							className="border-0 text-uppercase"
							type="submit">
							Send Message
						</Button>
					</Form>
				</div>
			</div>
		</>
	);
};

export default Body;
