import ProductCard from "@/components/ui/ProductCard";
import { TProduct } from "@/types/types";

const FlashSaleServer = async () => {
  const res = await fetch(
    "https://cleanify-server.vercel.app/dishwashing-items",
    {
      cache: "no-store",
    }
  );
  const products = await res.json();
  const flashSale = products.filter((product: TProduct) => product.flashSale);
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center place-content-center">
      {flashSale.map((item: TProduct) => (
        <ProductCard
          key={item._id}
          img={item.images?.image1}
          title={item.title}
          url={`/dishwashing-items/${item._id}`}
          price={item.price}
          salePrice={item.salePrice}
        />
      ))}
    </div>
  );
};

export default FlashSaleServer;
