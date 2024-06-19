import { Button, Form, Image, Nav } from "react-bootstrap";

import "./Footer.css";

import logo_f from "../../img/footer_logo.svg";
import send from "../../img/Email_send_footer.svg";
import up from "../../img/up.svg";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import linkedin from "../../img/linkedin.svg";

const Footer = () => {
	return (
		<>
			<div className="footer w-100 d-flex flex-column justify-content-center align-items-center">
				<div className="contents px-4 px-lg-5 px-xl-5 mx-auto d-flex flex-column justify-content-center align-items-start">
					<div className="content_1 w-100 d-flex flex-row flex-wrap justify-content-start align-items-center gap-4 gap-lg-0 gap-xl-0">
						<Image src={logo_f} />
						<Nav
							className="my-2 my-lg-0 justify-content-start"
							navbarScroll>
							<Nav.Link href="#action1">
								<div className="parent d-flex justify-content-center align-items-center">
									<div className="child d-flex justify-content-center align-items-center">
										<div className="child d-flex justify-content-center align-items-center">
											<Image src={facebook} />
										</div>
									</div>
								</div>
							</Nav.Link>
							<Nav.Link href="#action2">
								<div className="parent d-flex justify-content-center align-items-center">
									<div className="child d-flex justify-content-center align-items-center">
										<div className="child d-flex justify-content-center align-items-center">
											<Image src={twitter} />
										</div>
									</div>
								</div>
							</Nav.Link>
							<Nav.Link href="#action2">
								<div className="parent d-flex justify-content-center align-items-center">
									<div className="child d-flex justify-content-center align-items-center">
										<div className="child d-flex justify-content-center align-items-center">
											<Image src={instagram} />
										</div>
									</div>
								</div>
							</Nav.Link>
							<Nav.Link href="#action2">
								<div className="parent d-flex justify-content-center align-items-center">
									<div className="child d-flex justify-content-center align-items-center">
										<div className="child d-flex justify-content-center align-items-center">
											<Image src={linkedin} />
										</div>
									</div>
								</div>
							</Nav.Link>
						</Nav>
					</div>
					<div className="content_2 d-flex flex-row flex-wrap justify-content-start align-items-start">
						<ul className="ps-0">
							<li className="pb-4 text-uppercase">
								<a href="#!">Company</a>
							</li>
							<li className="pb-2 text-capitalize">
								<a href="#!">About</a>
							</li>
							<li className="pb-2 text-capitalize">
								<a href="#!">Contact</a>
							</li>
							<li className="pb-2 text-capitalize">
								<a href="#!">Career</a>
							</li>
						</ul>
						<ul className="ps-0">
							<li className="pb-4 text-uppercase">
								<a href="#!">Product&nbsp;&&nbsp;Services</a>
							</li>
							<li className="pb-2 text-capitalize">
								<a href="#!">Products</a>
							</li>
							<li className="pb-2 text-capitalize">
								<a href="#!">Business</a>
							</li>
							<li className="pb-2 text-capitalize">
								<a href="#!">Developer</a>
							</li>
						</ul>
						<ul className="ps-0">
							<li className="pb-4 text-uppercase">
								<a href="#!">Help&nbsp;&&nbsp;Support</a>
							</li>
							<li className="pb-2 text-capitalize">
								<a href="#!">Support Center</a>
							</li>
							<li className="pb-2 text-capitalize">
								<a href="#!">FAQ</a>
							</li>
							<li className="pb-2 text-capitalize">
								<a href="#!">Terms & Conditions</a>
							</li>
						</ul>
						<div className="subscribe">
							<h5 className="mb-0 text-uppercase">Subscribe Newsletter</h5>
							<Form className="py-3 position-relative">
								<Form.Group controlId="formGroupEmail">
									<Form.Control
										className="ps-4"
										type="email"
										placeholder="Your email"
									/>
								</Form.Group>
								<Image src={send} />
							</Form>
							<p className="text-capitalize">
								Subscribe weekly newsletter to stay upto date. We don’t send
								spam.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="creator position-relative d-flex flex-row justify-content-center align-items-center">
				<p className="mb-0 text-center">
					Template Designed by HItesh Tapaniya (@Benzatine Infotech)
				</p>
				<Button
					className="d-flex flex-row justify-content-center align-items-center"
					variant="primary"
					type="submit"
					onClick={Up}>
					<Image src={up} />
				</Button>
			</div>
		</>
	);
};

let Up = () => {
	window.scrollTo(0, 0);
};

export default Footer;
