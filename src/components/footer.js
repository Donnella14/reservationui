import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  GooglePlusOutlined,

  PhoneOutlined,
  AimOutlined,
  InstagramOutlined
} from "@ant-design/icons";
const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>
		NYAMPINGA JOSELYNE
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Mission</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">MentorShip</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#"><strong>
                  {" "}
                  <GooglePlusOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span> joselynenya@gmail.com</span></FooterLink>
			<FooterLink href="#"><strong>
                  {" "}
                  <PhoneOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span> +250 788 642 652</span></FooterLink>
			<FooterLink href="#"><strong>
                  {" "}
                  <AimOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span> Rwanda / Kigali City</span></FooterLink>
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f"><strong>
                  {" "}
                  <FacebookOutlined className="arrow-icon" />{" "}
                </strong>{" "}
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram"><strong>
                  {" "}
                  <InstagramOutlined className="arrow-icon" />{" "}
                </strong>{" "}
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter"><strong>
                  {" "}
                  <TwitterOutlined className="arrow-icon" />{" "}
                </strong>{" "}
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube"><strong>
                  {" "}
                  <YoutubeOutlined className="arrow-icon" />{" "}
                </strong>{" "}
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
