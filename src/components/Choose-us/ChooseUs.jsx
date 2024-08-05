import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
	const [showVideo, setShowVideo] = useState(false);
	return (
		<section>
			<Container>
				<Row>
					<Col lg='6' md='6'>
						<div className='choose__content'>
							<h2>Why Choose Us</h2>
							<p>
								Our platform stands out for its commitment to delivering
								top-quality education and support. Here’s why you should choose
								us: Expert Instructors: Learn from industry professionals with
								extensive experience and real-world insights. Comprehensive
								Content: Access a wide range of up-to-date courses designed to
								keep you ahead in the tech industry. Flexible Learning: Study at
								your own pace and on your schedule, ensuring that learning fits
								seamlessly into your life. Practical Skills: Gain hands-on
								experience and practical skills that you can immediately apply
								in your career. Dedicated Support: Receive personalized
								assistance and guidance throughout your learning journey to
								ensure your success.{" "}
								<strong>
									Choose us to unlock your potential and advance your career
									with confidence!
								</strong>
							</p>
						</div>
					</Col>

					<Col lg='6' md='6'>
						<div className='choose__img'>
							{showVideo ? (
								<ReactPlayer
									url='https://www.youtube.com/watch?v=qFp27TR4Yew'
									controls
									width='100%'
									height='350px'
								/>
							) : (
								<img src={chooseImg} alt='' className='w-100' />
							)}

							{!showVideo && (
								<span className='play__icon'>
									<i
										class='ri-play-circle-line'
										onClick={() => setShowVideo(!showVideo)}
									></i>
								</span>
							)}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ChooseUs;
