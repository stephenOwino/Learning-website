import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
	{
		title: "Quick Learning",
		desc: "Our courses at Steve's Code are designed for efficient and effective learning. We focus on delivering concise, practical content that enables you to grasp key concepts quickly and apply them in real-world scenarios. With our streamlined approach, you'll acquire essential skills in less time, allowing you to advance your career without lengthy commitments. Dive into engaging lessons and start achieving your goals faster with our quick learning solutions.",
		icon: "ri-draft-line",
	},

	{
		title: "All Time Support",
		desc: "At Steve's Code, we are committed to providing you with continuous support throughout your learning journey. Our dedicated team is available to assist you with any questions or challenges you may encounter, ensuring you have the resources and guidance you need to succeed. Whether you need technical assistance, course-related help, or career advice, our support team is here for you around the clock, so you can focus on achieving your goals with confidence.",
		icon: "ri-discuss-line",
	},

	{
		title: "Certification",
		desc: "Upon completing our courses at Steve's Code, you'll receive a certification that highlights your skills and accomplishments. Our certificates are designed to validate your knowledge and demonstrate your expertise to employers. Each certification is a testament to your hard work and dedication, making you stand out in the competitive tech industry. Whether you're looking to advance in your current role or explore new opportunities, our certifications are a valuable asset to your professional portfolio.",
		icon: "ri-contacts-book-line",
	},
];

const Features = () => {
	return (
		<section>
			<Container>
				<Row>
					{FeatureData.map((item, index) => (
						<Col lg='4' md='6' key={index}>
							<div className='single__feature text-center px-4'>
								<h2 className='mb-3'>
									<i class={item.icon}></i>
								</h2>
								<h6>{item.title}</h6>
								<p>{item.desc}</p>
							</div>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Features;
