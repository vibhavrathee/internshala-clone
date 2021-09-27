import React from 'react'
import {Carousel} from 'react-bootstrap'
import './carousel.css'
export default function MyCarousel() {
    return (
        <main>
        <div className="myCarousel">
            <Carousel variant="dark">
                <Carousel.Item >
                    <img
                    className=" mx-auto d-block"
                    src="https://blog.internshala.com/wp-content/uploads/2020/10/Internshala-Training.jpg"
                    alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className=" mx-auto d-block"
                    src="https://blog.internshala.com/wp-content/uploads/2020/10/Internshala-Training.jpg"
                    alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="mx-auto d-block"
                    src="https://blog.internshala.com/wp-content/uploads/2020/10/Internshala-Training.jpg"
                    alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
        </main>
    )
}
