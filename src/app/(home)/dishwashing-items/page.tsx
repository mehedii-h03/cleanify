import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProductCard from "@/components/ui/ProductCard";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { TProduct } from "@/types/types";
import Filtering from "@/components/pages/Products/Filtering";

// TODO have to create a meaningfull readme also

const Page = async ({ searchParams }: any) => {
  let url = `https://cleanify-server.vercel.app/dishwashing-items`;

  if (searchParams.brand) {
    url += `?brand=${searchParams.brand}`;
  }
  const res = await fetch(url, {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <section className="mb-28">
      <Container className="flex justify-end flex-col-reverse lg:flex-row-reverse gap-6">
        <div>
          <PageHeader
            title="Our Collection Of Products"
            primaryDesc="Showing 1–12 of 24 items"
            secondaryDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          {/* Caard */}
          <div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 place-content-center place-items-center">
              {products.map((product: TProduct) => (
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
            <div className="text-center mt-10">
              <Link href="/" className="primary-btn">
                Load More
                <MdArrowForwardIos />
              </Link>
            </div>
          </div>
        </div>
        {/* Filtering */}
        <div>
          <Filtering />
        </div>
      </Container>
    </section>
  );
};

export default Page;
