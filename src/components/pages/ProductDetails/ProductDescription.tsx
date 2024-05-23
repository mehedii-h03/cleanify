import Container from "@/components/ui/Container";
import { TProduct } from "@/types/types";

const ProductDescription = ({ description2, features2 }: TProduct) => {
  return (
    <Container>
      <h4 className="#696969 text-2xl font-bold">Description</h4>
      <div className="mt-10">
        <p className="text-[#414141] text-[15px] leading-relaxed">
          {description2}
        </p>
        <ul className="mt-7 text-[15px] text-[#414141] list-disc space-y-1 px-5">
          {features2?.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ProductDescription;
