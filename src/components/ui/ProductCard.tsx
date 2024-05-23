import Image from "next/image";
import Link from "next/link";
import { IoIosAddCircleOutline } from "react-icons/io";

type TProductCardProps = {
  img?: string;
  title?: string;
  url: string;
  price?: number;
  salePrice?: number;
};

const ProductCard = ({
  img,
  title,
  price,
  salePrice,
  url = "/",
}: TProductCardProps) => {
  return (
    <Link href={url}>
      <div className="card shadow-md max-w-72 relative rounded-[14px]">
        {img ? (
          <figure className="rounded-lg overflow-hidden h-72">
            <Image
              width={100}
              height={100}
              alt={title ?? "Product image"}
              className="w-full h-full object-cover bg-gray-200 rounded-[14px]"
              src={img}
            />
          </figure>
        ) : (
          <div className="h-72 bg-gray-200 rounded-[14px] flex items-center justify-center">
            <span>No image available</span>
          </div>
        )}
        <div className="p-4 flex flex-col space-y-2">
          <h2 className="text-lg font-medium text-gray-900 truncate">
            {title}
          </h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {salePrice ? (
                <>
                  <p className="text-sm line-through text-gray-500">${price}</p>
                  <p className="text-sm font-bold text-red-500">${salePrice}</p>
                </>
              ) : (
                <p className="text-sm font-bold text-red-500">${price}</p>
              )}
            </div>
            <IoIosAddCircleOutline className="text-2xl text-gray-700 cursor-pointer hover:text-red-500" />
          </div>
        </div>
        {salePrice && (
          <div className="absolute top-2 left-2 bg-red-500 rounded-full p-1 text-xs text-white text-center">
            - 13%
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
