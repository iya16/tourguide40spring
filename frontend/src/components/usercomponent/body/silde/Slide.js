import { Component } from "react";
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image from './../../../../assets/image.jpg';
import imagee from './../../../../assets/imagee.jpg';
import imageee from './../../../../assets/imageee.jpg';
import  './imageeeee.jpg';
// import './Slide.scss';

function Silider() {
  return (
    <div className="con">
            <Carousel data-bs-theme="light" className="carousel">     
              <Carousel.Item className="carouselItem">
                    <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                    />             
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>this is the  description about the first slide .if you want for more description you can ask us any time.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imagee}
                    alt="Second slide"
                    />
                        <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imageee}
                        alt="Third slide"
                        />
                    <Carousel.Caption>
                            <h5 className="text-center">Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
                    </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
    </div>
  );
}
class Slide extends Component {
    render(){
        return(
            <div>
                <Silider />
            </div>
        )
    }
}
export default Slide;
