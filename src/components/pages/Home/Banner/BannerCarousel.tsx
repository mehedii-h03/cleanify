"use client";

import BannerCard from "@/components/ui/BannerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BannerCarousel = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
  };
  return (
    <div className="slider-container w-3/4 mx-auto">
      <Slider {...settings} className="ml-10">
        <BannerCard
          img={
            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
          }
          title={"Sunlight Dishwash"}
        />
        <BannerCard
          img={
            "https://images.othoba.com/images/thumbs/0350012_glitter-antibacterial-dishwashing-liquid-500ml.jpeg"
          }
          title={"Glitter Dishwash"}
        />
        <BannerCard
          img={
            "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689617082-61jYeipmiQL.jpg?crop=0.901xw:0.901xh;0.0529xw,0.0529xh&resize=980:*"
          }
          title={"Dawn Dishwash"}
        />
        <BannerCard
          img={
            "https://chaldn.com/_mpimage/dishoom-dishwashing-liquid-500-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D88956&q=best&v=1&m=400"
          }
          title={"Dishoom Dishwash"}
        />
      </Slider>
    </div>
  );
};

export default BannerCarousel;
