import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.avif";
import "./hero-section.css";

const HeroSection = () => {
	return (
		<section>
			<Container>
				<Row>
					<Col lg='6' md='6'>
						<div className='hero__content'>
							<h2 className='mb-4 hero__title'>
								Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
							</h2>
							<p className='mb-5'>
								Learn on Your Schedule Our flexible learning platform allows you
								to study at your own pace, anytime and anywhere. Whether you're
								balancing work, family, or other commitments, our courses are
								designed to fit into your life. Gain the skills you need on a
								schedule that works best for you.
							</p>
						</div>
						<div className='search'>
							<input type='text' placeholder='Search' />
							<button className='btn'>Search</button>
						</div>
					</Col>

					<Col lg='6' md='6'>
						<img src={heroImg} alt='' className='w-100 hero__img' />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default HeroSection;
