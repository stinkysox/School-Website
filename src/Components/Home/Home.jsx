import React from "react";
import Header from "../Header/Header";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-section">
        <div className="text-container">
          <h1>Springdale Public School</h1>
          <p>
            "Welcome to Springdale Public School, where we nurture young minds
            for a brighter future."
          </p>
        </div>

        <div className="slider-container">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={128}
            totalSlides={3}
            interval={3000}
            isPlaying={true}
            infinite={true}
          >
            <Slider>
              <Slide index={0}>
                <img
                  src="https://i.pinimg.com/564x/35/2f/77/352f77a38d2d39e212903bec53d15210.jpg"
                  alt="Slide 1"
                  className="slider-image"
                />
                <div className="slider-content">
                  <h2>Annual Sports Day</h2>
                  <p>Celebrating Excellence in Sports.</p>
                </div>
              </Slide>
              <Slide index={1}>
                <img
                  src="https://i.pinimg.com/564x/2e/93/ba/2e93ba95cad504c955e38f549a1b0ee5.jpg"
                  alt="Slide 2"
                  className="slider-image"
                />
                <div className="slider-content">
                  <h2>Science Exhibition</h2>
                  <p>Showcasing Student Innovation</p>
                </div>
              </Slide>
              <Slide index={2}>
                <img
                  src="https://i.pinimg.com/564x/48/18/fb/4818fbddabec81194862b36a0866c9bb.jpg"
                  alt="Slide 3"
                  className="slider-image"
                />
                <div className="slider-content">
                  <h2>Cultural Fest</h2>
                  <p>Embracing Diversity and Creativity.</p>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
};

export default Home;
