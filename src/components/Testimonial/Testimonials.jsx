import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial.jpg";

const Testimonials = () => {
	const settings = {
		infinite: true,
		dots: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
	};
	return (
		<section>
			<Container>
				<Row>
					<Col lg='10' md='12' className='m-auto'>
						<div
							className='testimonial__wrapper d-flex justify-content-between align-items-center '
							style={{ gap: 20 }}
						>
							<div className='testimonial__img w-100'>
								<img
									src={img}
									alt=''
									className='w-100'
									style={{ borderRadius: 20 }}
								/>
							</div>

							<div className='testimonial__content w-50'>
								<h2 className='mb-4'>Our Students Voice</h2>

								<Slider {...settings}>
									<div>
										<div className='single__testimonial'>
											<h6 className='mb-3 fw-bold'>
												Excellent course of materials
											</h6>
											<p>
												Steve's Code has been a game-changer for my career. The
												courses are comprehensive and taught by industry
												experts. I gained practical skills that I was able to
												apply immediately in my job. Highly recommended!
											</p>

											<div className='student__info mt-4'>
												<h6 className='fw-bold'>Kotiko Billionaire</h6>
												<p>London, UK</p>
											</div>
										</div>
									</div>

									<div>
										<div className='single__testimonial'>
											<h6 className='mb-3 fw-bold'>
												Excellent course of materials
											</h6>
											<p>
												I was impressed by the quality of the training and the
												practical approach of Steve's Code. The hands-on
												projects and real-world scenarios prepared me well for
												my role in cybersecurity. The knowledge I gained was
												invaluable.
											</p>

											<div className='student__info mt-4'>
												<h6 className='fw-bold'>Stephen otieno</h6>
												<p>Nairobi, KENYA</p>
											</div>
										</div>
									</div>

									<div>
										<div className='single__testimonial'>
											<h6 className='mb-3 fw-bold'>
												Excellent course of materials
											</h6>
											<p>
												Steve's Code offers a fantastic learning experience with
												cutting-edge content and great support. The courses are
												designed to be engaging and informative, making complex
												topics accessible and understandable.
											</p>

											<div className='student__info mt-4'>
												<h6 className='fw-bold'>Gabriel ochieng</h6>
												<p>India, BANGALORE</p>
											</div>
										</div>
									</div>
								</Slider>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Testimonials;
