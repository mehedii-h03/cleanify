import { TProduct } from "@/types/types";
import { CiBookmarkPlus } from "react-icons/ci";
import { TbRotate3D, TbTruckDelivery } from "react-icons/tb";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductDetail = ({
  title,
  price,
  salePrice,
  description1,
  features1,
  reviews,
  ratings,
}: TProduct) => {
  return (
    <div className="flex-1">
      <div className="pb-7 border-b border-[#DDDDDD]">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold text-TPrimary">{title}</h3>
          <div className="text-[#AEAEAE] text-[26px] cursor-pointer">
            <CiBookmarkPlus />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h5 className="text-[#414141] text-[26px]">
            ${salePrice ? salePrice : price}
          </h5>
          <div className="flex gap-2 items-center border-s-[1.5px] border-black ps-2">
            <Rating style={{ maxWidth: 80 }} value={ratings ?? 0} readOnly />
            <p className="text-sm text-[#414141]">{reviews} reviews</p>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <p className="text-[#414141] text-[15px] leading-relaxed">
          {description1}
        </p>
        <ul className="mt-7 text-[15px] text-[#414141] list-disc space-y-1 px-5">
          {features1?.map((item: string, i: number) => (
            <li key={i + 1}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-7 space-y-2 text-[#424242] text-[15px]">
        <div className="flex gap-3 items-center">
          <TbTruckDelivery className="text-2xl text-[#B9B9B9]" />
          <p>Free worldwide shipping on all orders over $100</p>
        </div>
        <div className="flex gap-3 items-center">
          <TbRotate3D className="text-2xl text-[#B9B9B9]" />
          <p>Delivers in: 3-7 Working Days Shipping & Return</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
