import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutUs.css";

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      <div className="about-us-section">
        <h1>About Us</h1>
        <div className="about-banner" />
        <div className="section">
          <h2>History</h2>
          <p className="about-para">
            Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students.
          </p>
        </div>
        <div className="section">
          <h2>Vision</h2>
          <p className="about-para">
            To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.
          </p>
        </div>
        <div className="section">
          <h2>Mission</h2>
          <p className="about-para">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world.
          </p>
        </div>
        <div className="section">
          <h2>Principal's Message</h2>
          <img
            src="https://i.pinimg.com/564x/fa/de/8e/fade8e0baf8204c67a1f9713dd3808f2.jpg"
            alt=""
            className="pricipal"
          />
          <p className="about-para">
            "At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future".
          </p>
        </div>
        <div className="section">
          <h2>Infrastructure and Facilities</h2>
          <Slider {...settings} className="facilities-slider">
            <div className="slide">
              <h3>State-of-the-art Science Labs</h3>
              <p className="about-para">
                Modern science labs equipped with the latest technology.
              </p>
              <img
                src="https://i.pinimg.com/564x/27/5c/c3/275cc3c2995b9df5976cd7b04f0542b5.jpg"
                alt=""
                className="about-us-facilites"
              />
            </div>
            <div className="slide">
              <h3>Spacious Classrooms</h3>
              <p className="about-para">
                Well-equipped classrooms for an optimal learning experience.
              </p>
              <img
                src="https://i.pinimg.com/564x/34/03/a3/3403a3a7455aae6fce413f51cb071752.jpg"
                alt=""
                className="about-us-facilites"
              />
            </div>
            <div className="slide">
              <h3>Library</h3>
              <p className="about-para">
                A vast collection of books and digital resources.
              </p>
              <img
                src="https://i.pinimg.com/564x/47/8b/36/478b36f03c5d2f91e238d71ff3681c15.jpg"
                alt=""
                className="about-us-facilites"
              />
            </div>
            <div className="slide">
              <h3>Sports Facilities</h3>
              <p className="about-para">
                Playground, gymnasium, and swimming pool for physical
                activities.
              </p>
              <img
                src="https://i.pinimg.com/564x/66/19/af/6619afddaf9c3b6d66cda7948c1e9692.jpg"
                alt=""
                className="about-us-facilites"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
