import PriceFiltering from "./PriceFiltering";
import RatingsFiltering from "./RatingsFiltering";
import BrandFiltering from "./BrandFiltering";

const Filtering = () => {
  return (
    <div className="space-y-6">
      <PriceFiltering />
      <BrandFiltering />
      <RatingsFiltering />
    </div>
  );
};

export default Filtering;
