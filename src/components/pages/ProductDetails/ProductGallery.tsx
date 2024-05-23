"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type TProductGalleryProps = {
  images: {
    image1: string;
    image2: string;
    image3: string;
  };
};

const ProductGallery = ({ images }: TProductGalleryProps) => {
  const { image1, image2, image3 } = images;
  const changeShapeOfImage = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
  ];

  return (
    <div className="flex-1">
      <ImageGallery
        lazyLoad={true}
        thumbnailPosition={"left"}
        showFullscreenButton={false}
        showNav={false}
        showPlayButton={false}
        items={changeShapeOfImage}
      />
    </div>
  );
};

export default ProductGallery;
