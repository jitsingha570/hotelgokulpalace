import { Link } from "react-router-dom";
import Imgvisiting1 from "../assets/pictures/Imgvisiting1.jpg";
import Imgvisiting2 from "../assets/pictures/Imgvisiting2.jpg";
import Imgvisiting3 from "../assets/pictures/Imgvisiting3.jpg";
import Iconmap from "../assets/logo/map.png";
import Iconwiki from "../assets/logo/wiki.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  { name: " VICTORIA", photo: Imgvisiting1 ,distance: "10km"},
  { name: "botanical garden", photo: Imgvisiting2 ,distance: "10km"},
  { name: "princep ghat", photo: Imgvisiting3 ,distance: "10km"},
  { name: "victoria", photo: Imgvisiting1 ,distance: "10km"},
  { name: "victoria", photo: Imgvisiting1 ,distance: "10km"},
  { name: "victoria", photo: Imgvisiting1 ,distance: "10km"},
];

const Visitingplace = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full h-130 md:h-170 flex justify-center items-center bg-red-900">
      <div className=" w-full  ">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index} className="p-4">
              <div className="w-9/10 h-100 md:h-130 md:ml-20 flex flex-col 
              md:flex-row items-center justify-center bg-yellow-200 text-white text-xl font-bold rounded-lg shadow-lg">
                <img src={card.photo} alt={card.name} className="object-cover h-60 w-9/10 md:h-80 md:w-5/10 shadow-xl " />
                <div className="flex flex-row gap-5 mt-10">
                  <h2 className=" text-blue-900 text-lg font-bold">{card.name}</h2>
                  <h2 className=" text-red-900 text-lg font-thin">{card.distance}</h2>
                  <a href="https://twitter.com/ " target="_blank" >
                  <img src={Iconmap} alt="map"  className="w-10 h-10"/>
                  </a>
                  <img src={Iconwiki} alt="wiki"  className="w-10 h-10"/>
                </div>
                
                

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default  Visitingplace;

