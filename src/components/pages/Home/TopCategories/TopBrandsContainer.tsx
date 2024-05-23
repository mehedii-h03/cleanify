import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

const TopBrandsContainer = () => {
  return (
    <Container className="grid grid-cols-12 gap-4">
      <Link
        href={"/dishwashing-items?brand=finish"}
        className="col-span-12 lg:col-span-4 row-span-2 rounded-[14px]"
      >
        <Image
          width={100}
          height={100}
          src={"https://i.ibb.co/bJDNMnN/Finish.jpg"}
          alt="Product image"
          className="w-full h-full object-contain rounded-[14px]"
        />
      </Link>
      <Link
        href={"/dishwashing-items?brand=dawn"}
        className="col-span-12 md:col-span-6 lg:col-span-4 rounded-[14px]"
      >
        <Image
          width={100}
          height={100}
          src={"https://i.ibb.co/5csGrq9/dawn.webp"}
          alt="product image"
          className="w-full h-full object-contain rounded-[14px]"
        />
      </Link>
      <Link
        href={"/dishwashing-items?brand=fairy"}
        className="col-span-12 lg:col-span-4 md:col-span-6 row-span-2 rounded-[14px]"
      >
        <Image
          width={100}
          height={100}
          src={"https://i.ibb.co/z5HVyyp/fairy.png"}
          alt="product image"
          className="w-full h-full object-contain rounded-[14px]"
        />
      </Link>
      <Link
        href={"/dishwashing-items?brand=goodmaid"}
        className="lg:col-span-4 col-span-12 rounded-[14px]"
      >
        <Image
          width={100}
          height={100}
          src={"https://i.ibb.co/JQsxdZz/goodmaid.png"}
          alt="product image"
          className="w-full h-full object-contain rounded-[14px]"
        />
      </Link>
    </Container>
  );
};

export default TopBrandsContainer;
