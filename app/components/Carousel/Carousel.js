//import Link from 'next/link';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Carousel = () => {
  return (
    <div>
      
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-1.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Scott Boxer</h6>
									<p className="p-sm">@scott_boxer</p>
								</div>
							</div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-3.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Marisol19</h6>
									<p className="p-sm">@marisol19</p>
								</div>
							</div>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <div className="author-data clearfix">
								<div className="review-avatar">
									<img src="/assets/img/review-author-5.jpg" alt="review-avatar" />
								</div>
								<div className="review-author">
									<h6 className="s-18 w-700">Jennifer Harper</h6>
									<p className="p-sm">App Developer</p>
								</div>
							</div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Carousel
