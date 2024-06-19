import { Container, Image, Nav, Navbar } from "react-bootstrap";

import logo_h from "../../img/header_logo.svg";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import linkedin from "../../img/linkedin.svg";

import "./Header.css";

const Header = () => {
	return (
		<>
			<Navbar expand="lg" style={{ backgroundColor: "#C5E6F9" }}>
				<Container className="contain justify-content-xl-center justify-content-md-between">
					<Navbar.Brand
						className="col-xl-3 col-lg-2 d-flex justify-content-start me-0"
						href="#">
						<Image src={logo_h} />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse
						className="justify-content-between col-xl-8 col-lg-6"
						id="navbarScroll">
						<Nav className="my-2 my-lg-0 ms-xl-5 ms-lg-4 justify-content-center" navbarScroll>
							<Nav.Link
								className="nav_link me-2 text-uppercase"
								href="#action1">
								Home
							</Nav.Link>
							<Nav.Link
								className="nav_link me-2 text-uppercase"
								href="#action2">
								Services
							</Nav.Link>
							<Nav.Link
								className="nav_link me-2 text-uppercase"
								href="#action2">
								Pricing
							</Nav.Link>
							<Nav.Link
								className="nav_link me-2 text-uppercase"
								href="#action2">
								Testimonial
							</Nav.Link>
							<Nav.Link className="nav_link text-uppercase" href="#action2">
								Contact
							</Nav.Link>
						</Nav>
						<Nav className="my-2 my-lg-0 justify-content-center" navbarScroll>
							<Nav.Link href="#action1">
								<div className="parent bg-white d-flex justify-content-center align-items-center">
									<div className="child d-flex justify-content-center align-items-center">
										<Image src={facebook} />
									</div>
								</div>
							</Nav.Link>
							<Nav.Link href="#action2">
								<div className="parent bg-white d-flex justify-content-center align-items-center">
									<div className="child d-flex justify-content-center align-items-center">
										<Image src={twitter} />
									</div>
								</div>
							</Nav.Link>
							<Nav.Link href="#action2">
								<div className="parent bg-white d-flex justify-content-center align-items-center">
									<div className="child d-flex justify-content-center align-items-center">
										<Image src={instagram} />
									</div>
								</div>
							</Nav.Link>
							<Nav.Link href="#action2">
								<div className="parent bg-white d-flex justify-content-center align-items-center">
									<div className="child d-flex justify-content-center align-items-center">
										<Image src={linkedin} />
									</div>
								</div>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
