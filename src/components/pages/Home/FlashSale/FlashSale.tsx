import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import { TProduct } from "@/types/types";

const FlashSale = async () => {
  const res = await fetch(
    "https://cleanify-server.vercel.app/dishwashing-items",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const products = await res.json();
  const flashSale = products.filter((product: TProduct) => product.flashSale);

  return (
    <section className="mb-32 py-8" id="flash-sale">
      <Container>
        <SectionHeader title="Flash Sale" url="/flash-sale" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center place-content-center">
          {flashSale.slice(0, 4).map((item: TProduct) => (
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
      </Container>
    </section>
  );
};

export default FlashSale;
