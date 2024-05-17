import Banner from "@/components/pages/Home/Banner/Banner";
import FlashSale from "@/components/pages/Home/FlashSale/FlashSale";
import PopularProducts from "@/components/pages/Home/PopularProducts/PopularProducts";
import TopCategories from "@/components/pages/Home/TopCategories/TopCategories";

export default function Home() {
  return (
    <main>
      <Banner />
      <FlashSale />
      <TopCategories />
      <PopularProducts />
    </main>
  );
}
