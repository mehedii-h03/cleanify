import Banner from "@/components/pages/Home/Banner/Banner";
import FlashSale from "@/components/pages/Home/FlashSale/FlashSale";
import TopCategories from "@/components/pages/Home/TopCategories/TopCategories";

export default function Home() {
  return (
    <main>
      <Banner />
      <FlashSale />
      <TopCategories />
    </main>
  );
}
