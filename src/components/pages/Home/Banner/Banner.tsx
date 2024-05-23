import Container from "@/components/ui/Container";
import BannerCarousel from "./BannerCarousel";
import BannerInfo from "./BannerInfo";

const Banner = async () => {
  const res = await fetch(
    "https://cleanify-black.vercel.app/dishwashing-items",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const products = await res.json();
  const bannerProduct = products.slice(0, 3);
  return (
    <section className="mb-24">
      <div className="relative h-full py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/RPKj60D/446024562-766610355648825-7285781231210140593-n.png)",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <Container>
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
            <div className="max-w-full ">
              <BannerInfo />
              <BannerCarousel bannerProduct={bannerProduct} />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
