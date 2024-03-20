import React from "react";
import "./testimonial.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { testimonial } from "../../data";
import Slider from "react-slick";

const Testimonial: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="mx">
      <div className="testimonial">
        <h3>Testimonial</h3>

        <div className="card-wrapp">
          <Slider {...settings}>
            {testimonial.map((f, i) => (
              <div>
                <div className="card">
                  <div className="star" key={i}>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <div className="content">
                    <p>{f.content}</p>
                  </div>

                  <div className="user">
                    <div className="profile">
                      <User />
                    </div>
                    <div>
                      <p>{f.userName}</p>
                      <h6>{f.roll}</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
