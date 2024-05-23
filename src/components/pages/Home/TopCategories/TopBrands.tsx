import TopBrandsContainer from "./TopBrandsContainer";
import { MdArrowForwardIos } from "react-icons/md";

const TopBrands = () => {
  return (
    <section className="mb-32 space-y-16" id="top-brands">
      <div className="text-center space-y-3">
        <h3 className="text-TPrimary text-3xl font-bold">Top Brands</h3>
        <p className="text-[#666666] mx-auto max-w-[60ch]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
        </p>
      </div>
      <TopBrandsContainer />
      <div className="text-center">
        <button className="primary-btn">
          View All <MdArrowForwardIos />
        </button>
      </div>
    </section>
  );
};

export default TopBrands;
