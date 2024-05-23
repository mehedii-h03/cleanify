"use client";

import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import Countdown from "@/components/pages/ProductDetails/CountdownContainer";
import FlashSaleServer from "@/components/pages/FlasSale/FlashSaleServer";

// TODO Have to set a static countdown

const Page = () => {
  return (
    <section className="mb-32">
      <Countdown />
      <Container>
        <PageHeader
          title={"Flash Sale"}
          primaryDesc="Showing 1–12 of 24 items"
          secondaryDesc={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <FlashSaleServer />
        <div className="text-center mt-10">
          <Link href="/" className="primary-btn">
            Load More
            <MdArrowForwardIos />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Page;
