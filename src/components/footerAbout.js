import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyleAbout";
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
	<Box style={{marginTop:"400px"}}>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>
		GET IN TOUCH
	</h1>
	<Container>
		<Row>
		<Column >
			<Heading>ABOUT US</Heading>
			<FooterLink href="#"style={{color:"white"}} >Mission</FooterLink>
			<FooterLink href="#" style={{color:"white"}}>Vision</FooterLink>
			<FooterLink href="#"style={{color:"white"}} >Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>SERVICES</Heading>
			<FooterLink href="#"style={{color:"white"}}>Registration</FooterLink>
			<FooterLink href="#"style={{color:"white"}}>Marriage</FooterLink>
			
		</Column>
		<Column>
			<Heading>CONTACT US</Heading>
			<FooterLink href="#"style={{color:"white"}} ><strong>
                  {" "}
                  <GooglePlusOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span > aaaaaa@gmail.com</span></FooterLink>
			<FooterLink href="#" style={{color:"white"}}><strong>
                  {" "}
                  <PhoneOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span > +250 788 642 652</span></FooterLink>
			<FooterLink href="#" style={{color:"white"}}><strong>
                  {" "}
                  <AimOutlined className="arrow-icon" />{" "}
                </strong>{" "}
                <span style={{color:"white"}}> Rwanda / Kigali City</span></FooterLink>
			
		</Column>
		<Column>
			<Heading>SOCIAL MEDIA</Heading>
			<FooterLink href="#" style={{color:"white"}}>
			<i className="fab fa-facebook-f"><strong>
                  {" "}
                  <FacebookOutlined className="arrow-icon" />{" "}
                </strong>{" "}
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#"style={{color:"white"}} >
			<i className="fab fa-instagram"><strong>
                  {" "}
                  <InstagramOutlined className="arrow-icon" />{" "}
                </strong>{" "}
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#"style={{color:"white"}} >
			<i className="fab fa-twitter"><strong>
                  {" "}
                  <TwitterOutlined className="arrow-icon" />{" "}
                </strong>{" "}
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#"style={{color:"white"}} >
			<i className="fab fa-youtube"><strong>
                  {" "}
                  <YoutubeOutlined className="arrow-icon" />{" "}
                </strong>{" "}
				<span style={{ marginLeft: "10px",  }}>
				Youtube
				</span>
			</i>
			<p style={{marginLeft:"-800px",marginTop:"10px"}}>© 2021 MarryFromHome.com. All right reserved.   
Copyright Disclaimer</p>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
