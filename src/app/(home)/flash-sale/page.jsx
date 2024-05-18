import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";


// TODO have to add dynamic data with slice and pagination

const Page = () => {
    return (
        <section className="mb-32">
            <Container>
                <PageHeader title={"Flash Sale"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua."} />
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center place-content-center">
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                    <ProductCard
                        img={
                            "https://www.sunlight.co.za/images/h0nadbhvm6m4/672k7ZhE0Y8ioK2erY6tJv/272171410a4be008eb59d24d92363f3a/U0RXTF9BbnRpYmFjdGVyaWFsXzc1MG1sX2JvdHRsZS5wbmc/1080w-1080h/sunlight-extra-antibacterial-dishwashing-liquid.jpg"
                        }
                        title={"Sunlight Dishwashing Liquid"}
                    />
                </div>
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