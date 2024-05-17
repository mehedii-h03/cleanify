import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";

const FlashSale = () => {
  return (
    <section className="mb-32  py-8">
      <Container>
        <SectionHeader title="Flash Sale" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center place-content-center">
          <ProductCard
            img={
              "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
            }
            title={"Sunlight Dishwashing Liquid"}
          />
          <ProductCard
            img={
              "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
            }
            title={"Sunlight Dishwashing Liquid"}
          />
          <ProductCard
            img={
              "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
            }
            title={"Sunlight Dishwashing Liquid"}
          />
          <ProductCard
            img={
              "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
            }
            title={"Sunlight Dishwashing Liquid"}
          />
        </div>
      </Container>
    </section>
  );
};

export default FlashSale;
