import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Filtering from "@/components/Pages/Products/Filtering";
import ProductCard from "@/components/ui/ProductCard";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";


// TODO have to make the url dynamic
// TODO 


const Page = () => {
    return (
        <section className="mb-28">
            <Container className="flex justify-end flex-col-reverse lg:flex-row-reverse gap-6">
                <div>
                    <PageHeader title="Our Collection Of Products" primaryDesc="Showing 1–12 of 24 items" secondaryDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    {/* Caard */}
                    <div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 place-content-center place-items-center">
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                            <ProductCard
                                img={
                                    "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                                }
                                title={"Sunlight Dishwashing Liquid"}
                                url="/products/1"

                            />
                        </div>
                        <div className="text-center mt-10">
                            <Link href="/" className="primary-btn">
                                Load More
                                <MdArrowForwardIos />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Filtering */}
                <div>
                    <Filtering />
                </div>
            </Container>
        </section>
    );
};

export default Page;