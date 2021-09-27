import React from 'react'
import './footer.css'
import {Container, Stack, Row, Col, Badge} from 'react-bootstrap'
export default function Footer() {
    return (
        <footer>
            <Container fluid className=" myContainer"> 
                <Row className="">
                    <Col className="px-3 my-3 d-none d-lg-block">
                        <h5>Internships by places</h5>
                        <div className="footer-list-item">
                            <a>Internship in India</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Internship in Delhi</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Internship in Bangalore</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Internship in Hyderabad</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Internship in Mumbai</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Internship in Chennai</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Internship in Gurgaon</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Internship in Kolkata</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Virtual internship</a>
                        </div>
                    </Col>
                    <Col className="px-3 my-3 d-none d-lg-block">
                        <h5>Internship by Stream</h5>
                        <div className="footer-list-item">
                            <a>Computer Science Internship</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Electronics Internship</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Mechanical Internship</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Civil Internship</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Marketing Internship</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Chemical Internship</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Finance Internship</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Summer Research Fellowship</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Campus Ambassador Program</a>
                        </div>
                    </Col>
                    <Col className="px-3 my-3 d-none d-lg-block">
                        <h5>
                            <div id="trainings-footer">
                                <a href="#">Online Trainings{' '}                                                                        
                                <Badge bg="warning" text="light">
                                    <span className="offer">80% OFF</span>
                                </Badge>
                                </a>
                            </div>
                        </h5>
                        <div className="footer-list-item">
                            <a>Programming with Python</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Digital Marketing</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Web Development</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Machine Learning</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Advanced Excel</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Ethical Hacking</a>
                        </div>
                        <div className="footer-list-item">
                            <a>AutoCAD</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Creative Writing</a>
                        </div>
                        <div className="footer-list-item">
                            <a>Data Science</a>
                        </div>
                    </Col>
                    <Col className="px-3 my-3 d-none d-lg-block">
                        <h5>About Internshala</h5>
                            <div className="footer-list-item">
                                <a>About us</a>
                            </div>
                            <div className="footer-list-item">
                                <a>We're hiring</a>
                            </div>
                            <div className="footer-list-item">
                                <a>Hire interns for your company</a>
                            </div>
                            <div className="footer-list-item">
                                <a>Team Diary</a>
                            </div>
                            <div className="footer-list-item">
                                <a>Blog</a>
                            </div>
                            <div className="footer-list-item">
                                <a>Our Services</a>
                            </div>
                            <div className="footer-list-item">
                                <a>Terms &amp; Conditions</a>
                            </div>
                            <div className="footer-list-item">
                                <a>Privacy</a>
                            </div>
                            <div className="footer-list-item">
                                <a>Contact us</a>
                            </div>
                    </Col>
                    {/* on smaller screens */}
                    <Col className="px-3 my-3 d-lg-none" xs={12}>
                        <h5>
                            <div id="trainings-footer">
                                <a href="#">Online Trainings{' '}                                                                        
                                <Badge bg="warning" text="light">
                                    <span className="offer">80% OFF</span>
                                </Badge>
                                </a>
                            </div>
                        </h5>
                        <Row>
                            <Col>
                                <div className="footer-list-item">
                                    <a href="#">Programming with Python</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">Digital Marketing</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">Web Development</a>
                                </div>
                            </Col>
                            <Col>
                                <div className="footer-list-item">
                                    <a href="#">Machine Learning</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">Advanced Excel</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">Ethical Hacking</a>
                                </div>
                            </Col>
                            <Col>
                                <div className="footer-list-item">
                                    <a href="#">AutoCAD</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">Creative Writing</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">Data Science</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="my-3 d-lg-none" xs={12}>
                        <h5>About Internshala</h5>
                            <Row>
                                <Col>
                                <div className="footer-list-item">
                                    <a href="#">About us</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">We're hiring</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">Hire interns for your company</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">Team Diary</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">Blog</a>
                                </div>
                                <div className="footer-list-item">
                                    <a href="#">Our Services</a>
                                </div>
                                </Col>
                                <Col>
                                    <div className="footer-list-item">
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                    <div className="footer-list-item">
                                        <a href="#">Privacy</a>
                                    </div>
                                    <div className="footer-list-item">
                                        <a href="#">Contact us</a>
                                    </div>
                                </Col>
                                <Col/>
                            </Row>
                    </Col>
                </Row> 
                    
                <div className="px-3 py-3 d-flex justify-content-end">
                    <div className="ms-auto">
                        © Copyright 2021 Internshala
                    </div>
                </div>
                    {/* </div> */}
                    {/* COPYRIGHTS AND STUFF ENDED  */}
            </Container>
        </footer>
    )
}
{/* COPYRIGHT AND STUFF  */}
                    {/* <div id="footer-bottom">
                        <a href="">
                            <div className="footer-list-item" id="android_app_container">
                                <i className="ic-24-playstore"></i> <span>Get Android App</span>
                            </div>
                        </a>
                        <div id="social_media_container">
                            <a className="social_media_link_footer" href="#"><i className="ic-24-instagram"></i></a>
                            <a className="social_media_link_footer" href="#"><i className="ic-24-twitter"></i></a>
                            <a className="social_media_link_footer" href="#"><img className="img-icon" src=""/></a>
                            <a className="social_media_link_footer" href="#"><i className="ic-24-linkedin"></i></a>
                        </div> */}
