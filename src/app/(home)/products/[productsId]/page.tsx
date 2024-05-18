import Container from "@/components/ui/Container";
import ProductGallery from "@/components/pages/ProductDetails/ProductGallery";
import ProductDetail from "@/components/pages/ProductDetails/ProductDetail";
import ProductDescription from "@/components/pages/ProductDetails/ProductDescription";
import { MdArrowForwardIos } from "react-icons/md";

const Page = () => {
  return (
    <section className="">
      <Container>
        <div className="flex gap-1 items-center mb-5">
          <p className="text-[#7B7B7B]">Product Listing</p>
          <MdArrowForwardIos className="text-[#7B7B7B]" />
          <p className="text-[#414141]">Dummy Product Page</p>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-16">
          <ProductGallery />
          <ProductDetail />
        </div>
      </Container>
      <div className="bg-[#F8F8F8] my-20 py-20">
        <ProductDescription />
      </div>
    </section>
  );
};

export default Page;
