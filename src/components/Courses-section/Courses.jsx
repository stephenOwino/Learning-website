import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
	{
		id: "01",
		title: "Web Design BootCamp-2022 for Beginners",
		lesson: 12,
		students: 12.5,
		rating: 5.9,
		imgUrl: courseImg1,
	},

	{
		id: "02",
		title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
		lesson: 12,
		students: 12.5,
		rating: 5.9,
		imgUrl: courseImg2,
	},

	{
		id: "03",
		title: "UI/UX BootCamp for Beginners in 2022",
		lesson: 12,
		students: 12.5,
		rating: 5.9,
		imgUrl: courseImg3,
	},
];

const Courses = () => {
	return (
		<section>
			<Container>
				<Row>
					<Col lg='12' className='mb-5'>
						<div className='course__top d-flex justify-content-between align-items-center'>
							<div className='course__top__left w-50'>
								<h2>Our Popular Courses</h2>
								<p>
									Explore a wide range of cutting-edge tech courses designed to
									equip you with the skills needed in today's fast-paced digital
									world. Whether you're looking to master coding, dive into data
									science, or stay ahead with the latest in AI and
									cybersecurity, our courses have you covered. Unlock your
									potential and advance your career with our expertly curated
									content!
								</p>
							</div>

							<div className='w-50 text-end'>
								<button className='btn'>See All</button>
							</div>
						</div>
					</Col>
					{coursesData.map((item) => (
						<Col lg='4' md='6' sm='6'>
							<CourseCard key={item.id} item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Courses;
