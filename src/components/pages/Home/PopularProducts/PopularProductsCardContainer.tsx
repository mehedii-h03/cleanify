import ProductCard from "@/components/ui/ProductCard";
import { TProduct } from "@/types/types";

const PopularProductsCardContainer = async () => {
  const res = await fetch(
    "https://cleanify-server.vercel.app/dishwashing-items",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const products = await res.json();
  const popularProducts = products.sort(
    (a: TProduct, b: TProduct) => (a.ratings ?? 0) - (b.ratings ?? 0)
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center place-content-center">
      {popularProducts.slice(0, 8).map((product: TProduct) => (
        <ProductCard
          key={product._id}
          img={product.images?.image1}
          title={product.title}
          url={`/dishwashing-items/${product._id}`}
          price={product.price}
          salePrice={product.salePrice}
        />
      ))}
    </div>
  );
};

export default PopularProductsCardContainer;
