"use client"

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductGallery = () => {
    const images = [
        {
            original: "https://img.freepik.com/free-photo/disinfection-equipment-table_23-2148577794.jpg?t=st=1715979257~exp=1715982857~hmac=ba04bfe0b756396473f009edf027aca7d5b57197a0ca9c4ea8d927028f159be2&w=740",
            thumbnail: "https://img.freepik.com/free-photo/disinfection-equipment-table_23-2148577794.jpg?t=st=1715979257~exp=1715982857~hmac=ba04bfe0b756396473f009edf027aca7d5b57197a0ca9c4ea8d927028f159be2&w=740",
        },
        {
            original: "https://images.othoba.com/images/thumbs/0350012_glitter-antibacterial-dishwashing-liquid-500ml.jpeg",
            thumbnail: "https://images.othoba.com/images/thumbs/0350012_glitter-antibacterial-dishwashing-liquid-500ml.jpeg",
        },
        {
            original: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689617082-61jYeipmiQL.jpg?crop=0.901xw:0.901xh;0.0529xw,0.0529xh&resize=980:*",
            thumbnail: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689617082-61jYeipmiQL.jpg?crop=0.901xw:0.901xh;0.0529xw,0.0529xh&resize=980:*",
        },
    ];
    return (
        <div className="flex-1">
            <ImageGallery lazyLoad={true} thumbnailPosition={"left"} showFullscreenButton={false} showNav={false} showPlayButton={false} items={images} originalHeight={2500} />
        </div>
    );
};

export default ProductGallery;