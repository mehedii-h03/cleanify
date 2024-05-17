import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import PopularProductsCardContainer from "./PopularProductsCardContainer";

const PopularProducts = () => {
  return (
    <section className="mb-32">
      <Container>
        <SectionHeader
          title={"Most Popular Products"}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina."
        />
        <PopularProductsCardContainer />
      </Container>
    </section>
  );
};

export default PopularProducts;
