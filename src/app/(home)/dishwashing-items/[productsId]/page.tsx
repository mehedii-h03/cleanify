import Container from "@/components/ui/Container";
import ProductGallery from "@/components/pages/ProductDetails/ProductGallery";
import ProductDetail from "@/components/pages/ProductDetails/ProductDetail";
import ProductDescription from "@/components/pages/ProductDetails/ProductDescription";
import { MdArrowForwardIos } from "react-icons/md";
import { TProduct } from "@/types/types";

type TProductDetailParams = {
  params: {
    productsId: string;
  };
};

export const generateStaticParams = async () => {
  const res = await fetch(
    "https://cleanify-server.vercel.app/dishwashing-items"
  );
  const products = await res.json();
  return products.slice(0, 10).map((product: TProduct) => ({
    productsId: product._id,
  }));
};

const Page = async ({ params }: TProductDetailParams) => {
  const res = await fetch(
    `https://cleanify-server.vercel.app/dishwashing-items/${params.productsId}`,
    {
      cache: "no-store",
    }
  );
  const singleProduct = await res.json();

  const {
    title,
    price,
    salePrice,
    description1,
    description2,
    features1,
    features2,
    images,
    reviews,
    ratings,
  } = singleProduct;

  return (
    <section className="">
      <Container>
        <div className="flex gap-1 items-center mb-5">
          <p className="text-[#7B7B7B]">Product Listing</p>
          <MdArrowForwardIos className="text-[#7B7B7B]" />
          <p className="text-[#414141]">{title}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-16">
          <ProductGallery images={images} />
          <ProductDetail
            title={title}
            price={price}
            salePrice={salePrice}
            description1={description1}
            features1={features1}
            reviews={reviews}
            ratings={ratings}
          />
        </div>
      </Container>
      <div className="bg-[#F8F8F8] my-20 py-20">
        <ProductDescription features2={features2} description2={description2} />
      </div>
    </section>
  );
};

export default Page;
