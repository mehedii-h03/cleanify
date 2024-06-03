import { TProduct } from "@/types/types";
import Image from "next/image";

const Page = async () => {
  const res = await fetch(
    "https://cleanify-server.vercel.app/dishwashing-items",
    {
      cache: "no-store",
    }
  );
  const products = await res.json();

  return (
    <div>
      <h1 className="text-TPrimary font-bold text-3xl">All Products</h1>
      <div className="overflow-x-auto my-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#9A9A9A] text-white text-base">
              <th>Sl No</th>
              <th>Items</th>
              <th>Brand</th>
              <th>Product Id</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: TProduct, i: number) => (
              <tr key={product._id} className="border">
                <th>
                  <p>{i + 1}</p>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      {product.images?.image1 ? (
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            width={100}
                            height={100}
                            alt={`${product.title} image`}
                            src={product.images?.image1}
                          />
                        </div>
                      ) : (
                        <div className="mask mask-squircle w-12 h-12 bg-gray-300"></div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold">{product.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{product.brand}</p>
                </td>
                <td>{product.productId}</td>
                <td>$ {product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
