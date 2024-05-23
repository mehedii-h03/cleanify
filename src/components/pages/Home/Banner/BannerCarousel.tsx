"use client";

import BannerCard from "@/components/ui/BannerCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TProduct } from "@/types/types";

type TBannerCarouseProp = {
  bannerProduct: TProduct[];
};

const BannerCarousel = ({ bannerProduct }: TBannerCarouseProp) => {
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
        {bannerProduct.map((item: TProduct) => (
          <BannerCard
            key={item._id}
            productId={item._id}
            img={item.images?.image1}
            title={item.title}
          />
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
