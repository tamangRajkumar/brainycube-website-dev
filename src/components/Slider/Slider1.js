import { useEffect } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Team, Winner, Women } from "@/public";

const Slider1 = () => {
  const slides = [
    // { image: "images/participants.jpg" },
    // { image: { Team } },
    // { image: { Winner } },
    // { image: { Women } },
  ];
  useEffect(() => {
    $(".slider").slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, []);

  return (
    <div>
      <h1>Higlights</h1>
      <div className="slider">
        {slides.map((slide) => (
          <div key={slide.id}>
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider1;
