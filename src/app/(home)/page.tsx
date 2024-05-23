import Banner from "@/components/pages/Home/Banner/Banner";
import FlashSale from "@/components/pages/Home/FlashSale/FlashSale";
import PopularProducts from "@/components/pages/Home/PopularProducts/PopularProducts";
import TopBrands from "@/components/pages/Home/TopCategories/TopBrands";

export default function Home() {
  return (
    <main>
      <Banner />
      <FlashSale />
      <TopBrands />
      <PopularProducts />
    </main>
  );
}
