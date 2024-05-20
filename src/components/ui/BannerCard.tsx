// import Image from "next/image";
import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";

type TBannerCardProps = {
  img: string;
  title: string;
};

// FIX Have to fix the image tag

const BannerCard = ({ img, title }: TBannerCardProps) => {
  return (
    <Link href={"/products/1"}>
      <div className="card card-compact max-w-72 rounded-none relative">
        <figure className="rounded-lg">
          <img className="rounded-[14px] w-full h-56 object-top" src={img} />
        </figure>
        <div className="p-3 space-y-2">
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl text-left">
            {title}
          </h2>
          <div className="w-full flex items-center">
            <div className="flex gap-2 text-sm">
              <p className="line-through text-TSecondary ">$250</p>
              <p className="">$200</p>
            </div>
            <IoIosAddCircleOutline className="text-2xl ml-auto cursor-pointer" />
          </div>
        </div>
        <div className="bg-TPrimary rounded-full p-2 absolute top-2 left-2 text-xs text-white">
          - 13%
        </div>
      </div>
    </Link>
  );
};

export default BannerCard;
