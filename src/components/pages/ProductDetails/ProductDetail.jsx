import { CiBookmarkPlus } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { TbRotate3D, TbTruckDelivery } from "react-icons/tb";


// TODO have to add dynamic data

const ProductDetail = () => {
    return (
        <div className="flex-1">
            <div className="pb-7 border-b-2 border-[#DDDDDD]">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-TPrimary">
                        Double Bed & Side Tables
                    </h3>
                    <div className="text-[#AEAEAE] text-[26px] cursor-pointer">
                        <CiBookmarkPlus />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <h5 className="text-[#414141] text-[26px]">$54.98</h5>
                    <div className="flex gap-2 items-center border-s-[1.5px] border-black ps-2">
                        <div className="flex gap-1 text-[#A6A6A6]">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <p className="text-sm text-[#414141]">(32 reviews)</p>
                    </div>
                </div>
            </div>
            <div className="mt-7">
                <p className="text-[#414141] text-[15px] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
                    Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
                </p>
                <ul className="mt-7 text-[15px] text-[#414141] list-disc space-y-1 px-5">
                    <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
                    <li>
                        Lorem ipsum dolor sit amet, consectetuer adipi scing elit
                    </li>
                    <li>Lorem ipsum dolor sit amet, consectetuer adipi </li>
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