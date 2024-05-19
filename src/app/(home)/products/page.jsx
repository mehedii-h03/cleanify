import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Filtering from "@/components/Pages/Products/Filtering";

const Page = () => {
    return (
        <section className="mb-28">
            <Container className="flex flex-row-reverse gap-6">
                <div>

                    <PageHeader title="Our Collection Of Products" primaryDesc="Showing 1–12 of 24 items" secondaryDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
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